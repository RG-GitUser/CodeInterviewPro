import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";

import { LOGIN_USER } from '../../utils/mutations';
import Auth from "../utils/auth";

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
    <Box
      as="form"
      p={5}
      shadow="md"
      borderWidth="1px"
      onSubmit={handleFormSubmit}
    >
      {showAlert && (
        <Alert status="error">
          <AlertIcon />
          Something went wrong with your login credentials!
        </Alert>
      )}
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Your email"
          name="email"
          onChange={handleInputChange}
          value={userFormData.email}
        />
      </FormControl>

      <FormControl id="password" isRequired mt={6}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Your password"
          name="password"
          onChange={handleInputChange}
          value={userFormData.password}
        />
      </FormControl>

      <Button
        colorScheme="teal"
        mt={6}
        type="submit"
        isDisabled={!(userFormData.email && userFormData.password)}
      >
        Submit
      </Button>
      {error && (
        <Box color="red.500" mt={3}>
          Login failed
        </Box>
      )}
    </Box>
  );
};

export default LoginForm;