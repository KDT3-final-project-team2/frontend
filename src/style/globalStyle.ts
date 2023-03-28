import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --color-primary-100: #4357AC;
    --color-primary-050: #8294CD;
    --color-primary-020: #B3C2E7;
    --color-primary-010: #E2EFFF;
    --color-inactive: #E2EFFF;
    --color-yellow: #FFC847;
    --color-red: #E95656;
    --color-blue: #5A98E1;
    --color-back: #223f53;
    --color-light-gray: #F5F5F5; 
  }
  body {
    font-family: "LineSeedKR", sans-serif;
    font-size: 14px;
  }
  div, section, button{
    box-sizing: border-box
  }
  h1 {
    font-size: 34px;
    font-weight: bold;
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    display: flex;
    cursor: pointer;
    outline: none;
    border: none;
    align-items: center;
    justify-content: center;
  };
  input {
    outline: none;
    padding-left: 20px;
    border-radius: 30px;
    border : 1px solid black;
    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
      font-size: 16px;
      font-weight: bold
    }
  }
  ::selection {
    color: white;
    background-color: var(--color-point);
  }
  .react-confirm-alert-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  .react-confirm-alert {
    background: #fff;
    width: 30vw;
    max-width: 350px;
    min-width: 250px;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
