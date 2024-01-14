import React from 'react';
import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react';
import { createApolloClient, ApolloProvider } from './apollo'; // Import your Apollo-related setup
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { Header, Home, AddQuestion } from './components';

// Extend Chakra UI theme for custom styling
const { Button } = chakraTheme.components;
const chakraThemeExtended = extendBaseTheme({
  components: {
    Button,
  },
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
