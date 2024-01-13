import React from "react";
import { ChakraProvider, ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import { createApp } from 'vue';
import * as ReactDOM from 'react-dom/client';

import "./App.css";
import { QuestionForm, Header } from "./Components";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Create an ApolloClient instance
const client = new ApolloClient({
  link: new HttpLink({ uri: "http://127.0.0.1:3001/graphql" }),
  cache: new InMemoryCache(),
});

// Extend Chakra UI theme for custom styling
const { Button } = chakraTheme.components;
const chakraThemeExtended = extendBaseTheme({
  components: {
    Button,
  },
});

// Create a Vue app instance
const vueApp = createApp(App);

// Mount Chakra UI and Vue app on the root element
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={chakraThemeExtended}>
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
    </ChakraProvider>
  </React.StrictMode>,
);

// Vue app component (This should probably be a separate file)
function App() {
  return (
    <ChakraBaseProvider theme={chakraTheme}>
      {/* Add your Vue components here */}
    </ChakraBaseProvider>
  );
}

// React component for Home
function Home() {
  return (
    <>
      <Header />
      Home
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
