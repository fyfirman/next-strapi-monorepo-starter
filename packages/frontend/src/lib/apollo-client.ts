import { ApolloClient, InMemoryCache } from "@apollo/client";
import env from "./environment";

const apolloClient = new ApolloClient({
  uri: env.graphqlUrl,
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
  },
});

export default apolloClient;
