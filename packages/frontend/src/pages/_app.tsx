import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "~/lib/apollo-client";
import { ContentProvider } from "~/lib/content";
import { CONTENTS } from "~/graphql/content.operation";
import { Query } from "~/@types/graphql";
import { StringHashMap, transformGraphQLResponseToObject } from "~/lib/content-utils";

interface MyAppProps extends AppProps {
  content: StringHashMap;
}

function MyApp({ Component, pageProps, content }: MyAppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ContentProvider content={content}>
        <Component {...pageProps} />
      </ContentProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async () => {
  const { data } = await apolloClient.query<Query>({
    query: CONTENTS,
  });

  if (!data) {
    return;
  }

  return {
    content: transformGraphQLResponseToObject(data.contents),
  };
};

export default MyApp;
