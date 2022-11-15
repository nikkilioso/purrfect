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
  }
`;

/* RESPONSIVE?
Large:
@media only screen and (min-width: ) {

}

Meduim:
@media only screen and (min-width: ) {

  } 


Small:
  h1 {
    font-size: 24px;
    text-transform: uppercase;
    font-family: 'VT323', monospace;
    text-align: center;
    color: black;
    text-shadow: 2px 4px #FE49A4, 4px 6px #5dfe29;
    margin-top: 2px;
    margin-bottom: 0;
  }
    
  }*/

export default GlobalStyle;



