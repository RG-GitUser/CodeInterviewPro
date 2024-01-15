// Header.js

import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'graphql-tag';
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

const Header = () => {
  // Use the useQuery hook to fetch user data
  const { loading, error, data } = useQuery(GET_USER);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-question">Add Question</Link>
          </li>
         
          {loading ? (
            <li>Loading...</li>
          ) : error ? (
            <li>Error fetching user data</li>
          ) : (
            <li>Welcome, {data.user.username}</li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
