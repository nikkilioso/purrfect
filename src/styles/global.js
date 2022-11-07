import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1 {
    font-size: 80px;
    font-family: 'VT323', monospace;
    text-align: center;
  }

  body {
    margin: 0;
    padding: 0;
    background-image: url("/background.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
    width: 100vw;
  }
`;

export default GlobalStyle;