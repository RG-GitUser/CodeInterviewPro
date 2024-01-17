// Header.js
//
import { useContext } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import { Link } from "react-router-dom";
import "./header.css";
import Auth from "../../utils/auth";

// Define GraphQL query
const GET_USER = gql`
  query {
    user {
      id
      username
    }
  }
`;

const Header = ({ onHomeClick }) => {
  // Use the useQuery hook to fetch user data
  // const { loading, error, data } = useQuery(GET_USER);

  return (
    <header>
      <h1 className="title">Coding Interview Pro</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={onHomeClick}>
              Home
            </Link>
          </li>
          {Auth.loggedIn() && (
            <li>
              <Link to="/add-question">Add Question</Link>
            </li>
          )}
          {!Auth.loggedIn() && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {!Auth.loggedIn() && (
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          )}
          {Auth.loggedIn() && (
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
