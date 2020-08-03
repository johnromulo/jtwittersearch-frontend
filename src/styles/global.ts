import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-multi-carousel/lib/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #root {
    height: 100%;
    background : #EEEEEE;
  }

  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
  }

  body, input, button, span {
    font: 1.4rem 'Open Sans', Helvetica,sans-serif, arial;
    border: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }


  @media (max-width: 1024px){
    html {
      font-size: 52.5%;
    }
  }


  @media (max-width: 425px) {
    html {
      font-size: 35.5%;
    }
  }

`;
