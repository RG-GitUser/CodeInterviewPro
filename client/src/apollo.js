// apollo.js

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_API_ENDPOINT', 
  cache: new InMemoryCache(),
});

export default client;
