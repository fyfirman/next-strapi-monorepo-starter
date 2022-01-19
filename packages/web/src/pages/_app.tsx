import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: Add nav & footer & SEO
  return <Component {...pageProps} />;
}

export default MyApp;
