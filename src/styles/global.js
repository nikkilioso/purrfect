import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1 {
    font-size: 90px;
    text-transform: uppercase;
    font-family: 'VT323', monospace;
    text-align: center;
    color: black;
    text-shadow: 2px 4px #FE49A4, 4px 6px #5dfe29;
    margin-top: 5px;
    margin-bottom: 15px;
    line-height: 1;
  }

  h2 {
    font-size: 40px;
    font-family: 'Share Tech Mono', monospace;
    text-align: center;
    margin-top: .5rem;
    margin-bottom: .5rem;
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
    overflow-x: hidden;
    scrollbar-color: rebeccapurple green;
  }
`;

export default GlobalStyle;