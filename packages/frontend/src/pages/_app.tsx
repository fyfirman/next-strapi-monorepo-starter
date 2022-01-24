import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { ContentProvider } from "~/lib/content";
import { CONTENTS } from "~/graphql/content.operation";
import { Query } from "~/@types/graphql";
import { StringHashMap, transformGraphQLResponseToObject } from "~/lib/content-utils";
import apolloClient from "~/lib/apollo-client";
import type { AppProps } from "next/app";

interface MyAppProps extends AppProps {
  content: StringHashMap;
}

function MyApp(props: MyAppProps) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment --  `pageProps` default variable from next is any.
  const { Component, content, pageProps } = props;

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

  if (!data.contents) {
    return;
  }

  return {
    content: transformGraphQLResponseToObject(data.contents),
  };
};

export default MyApp;
