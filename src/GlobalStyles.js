import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Comic Code', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`
