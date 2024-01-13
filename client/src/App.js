import React from "react";
import { ChakraProvider } from '@chakra-ui/react' //chakra UI import 
import * as ReactDOM from 'react-dom/client'

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

const app = createApp(App);

// Install Chakra UI
const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}> {/* <--- Extend theme to handle  */ }
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  )
}

export default App;
