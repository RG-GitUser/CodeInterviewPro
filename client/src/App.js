import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
import "./App.css";
import { QuestionForm, Header, Categories, StartQuiz } from "./Components";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import React, { useState } from "react";

const { Button } = chakraTheme.components;

// Create an ApolloClient instance
const client = new ApolloClient({
  link: new HttpLink({ uri: "http://127.0.0.1:3001/graphql" }),
  cache: new InMemoryCache(),
});

const theme = extendBaseTheme({
  components: {
    Button,
  },
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

// React component for Home
function Home() {
  const initialCategories = ["MongoDB", "Express", "React", "Node", "JavaScript Fundamentals", "RESTful API", "GraphQL"];
  const [activeCategories, setActiveCategories] = useState([]);

  return (
    <>
      <Header />
      <Categories initialCategories={initialCategories} activeCategories={activeCategories} setActiveCategories={setActiveCategories} />
      <StartQuiz activeCategories={activeCategories} />
    </>
  );
}

// React component for AddQuestion
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
