// Header.js
//
import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "graphql-tag";
import { Link } from "react-router-dom";
import "./header.css";

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
      <h1>Coding Interview Pro</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={onHomeClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/add-question">Add Question</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
