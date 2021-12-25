import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Nav from "../component/app/Nav/Nav";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>todaWe</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
