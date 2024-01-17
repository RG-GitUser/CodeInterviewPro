

import { useState } from "react";
import { useMutation } from "@apollo/client";
import {gql} from '@apollo/client'
// import { LOGIN_USER } from '../../utils/mutations';
import Auth from "../../utils/auth";
import "./Login.css";

 const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      {showAlert && (
        <div className="alert error">
          Something went wrong with your login credentials!
        </div>
      )}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Your email"
        name="email"
        onChange={handleInputChange}
        value={userFormData.email}
        required
      />

      <label htmlFor="password" style={{ marginTop: '16px' }}>Password</label>
      <input
        type="password"
        placeholder="Your password"
        name="password"
        onChange={handleInputChange}
        value={userFormData.password}
        required
      />

      <button
        type="submit"
        disabled={!(userFormData.email && userFormData.password)}
      >
        login
      </button>
      {error && (
        <div className="alert error" style={{ marginTop: '16px' }}>
          Login failed
        </div>
      )}
   
    </form>
  );
};

export default LoginForm;
