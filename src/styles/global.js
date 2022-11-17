import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1 {
    font-size: 82px;
    text-transform: uppercase;
    font-family: 'VT323', monospace;
    text-align: center;
    color: black;
    text-shadow: 2px 4px #FE49A4, 4px 6px #5dfe29;
    margin-top: 2px;
    margin-bottom: 0;
    @media only screen and (max-width: 768px) {
      font-size: 36px;
      background-color: rgba(0,255,245,0.65);
      text-shadow: 1px 2px #FE49A4, 2px 3px #5dfe29;
  }
  }

  h2 {
    font-size: 30px;
    font-family: 'Share Tech Mono', monospace;
    text-align: center;
    margin-top: .5rem;
    margin-bottom: .5rem;
    
  } 

  p {
    font-size: 40px;
    color: black;
    text-transform: uppercase;
    font-family: 'Share Tech Mono', monospace;
    font-weight: 800;
    text-align: center;
    margin-top: 0;
    margin-bottom: 1rem;
    text-shadow: 1px 2px cyan, 2px 3px #5dfe29;
    @media only screen and (max-width: 768px) {
      font-size: 20px;
      text-shadow: .5px 1px cyan, 1px 1.5px #5dfe29;
  }

  }

  body {
    margin: 0;
    padding: 0;
    background-image: url("/background.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100vw;
    overflow-x: hidden;
  }
`;


export default GlobalStyle;



