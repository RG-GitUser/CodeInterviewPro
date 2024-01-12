import React from "react";
import "./App.css";
import { QuestionForm, Header } from "./Components";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

// Create an ApolloClient instance
const client = new ApolloClient({
  link: new HttpLink({ uri: "http://127.0.0.1:3001/graphql" }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-question" element={<AddQuestion />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

function Home() {
  return (
    <>
      <Header />
      Home
    </>
  );
}

function AddQuestion() {
  return (
    <div>
      <Header />
      <h1>Add Question</h1>
      <QuestionForm />
    </div>
  );
}

export default App;
