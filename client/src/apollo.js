// apollo.js
import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_API_ENDPOINT', 
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* component code */ }
    </ApolloProvider>
      
  );
}

export default client;
