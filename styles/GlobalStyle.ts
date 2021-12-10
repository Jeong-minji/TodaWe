import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: AmaticSC;
    src: url('/fonts/AmaticSC-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: AmaticSCB;
    src: url('/fonts/AmaticSC-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: Hangang;
    src: url('/fonts/SEOULHANGANGB.TTF') format('truetype');
  }

  @font-face {
    font-family: HangangB;
    src: url('/fonts/SEOULHANGANGEB.TTF') format('truetype');
  }
`;
