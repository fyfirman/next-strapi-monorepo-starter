import { ApolloClient, InMemoryCache } from "@apollo/client";
import env from "./environment";

const apolloClient = new ApolloClient({
  uri: env.graphqlUrl,
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
});

export default apolloClient;
