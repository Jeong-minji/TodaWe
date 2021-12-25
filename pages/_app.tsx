import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/theme";
import Head from "next/head";
import Nav from "../component/app/Nav/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>todaWe</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        ></link>
        <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.js"
        ></script>
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

// 각 페이지 별로 공통적으로 쓰이는 부분에 대한 코드를 작성하는 곳
// props로 Component를 받아서, 각 페이지에서 리턴해줌
// Component 부분에 pages 라우팅한 페이지가 갈아 끼워지는 형식
// react로 치면 index.js 파일
