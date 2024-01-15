import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createApolloClient, ApolloProvider } from './apollo'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';   // Add missing components to functions below
import { Header, Navigation, Home, AddQuestion, About, Contact, Footer } from './components';

// Extend Chakra UI theme for custom styling
const chakraThemeExtended = extendTheme({
  // Custom configs go here 
});

// Create an ApolloClient instance
const client = createApolloClient();

function App() {
  return (
    <ChakraProvider theme={chakraThemeExtended}>
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-question" element={<AddQuestion />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
