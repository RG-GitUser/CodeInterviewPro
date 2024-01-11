import React from "react";
import "./App.css";
import { QuestionForm } from "./Components";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

// Create an ApolloClient instance
const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3001/graphql" }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <QuestionForm />
      </div>
    </ApolloProvider>
  );
}

export default App;
