import { ApolloClient, InMemoryCache } from "@apollo/client";
const apolloClient = new ApolloClient({
  uri: process.env.APOLLO_API,
  cache: new InMemoryCache(),
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apolloClient;
