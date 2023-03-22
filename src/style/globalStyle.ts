import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --color-primary: #218de6;
    --color-inactive: #7abbf0;
    --color-point: #0ec9bd;
    --color-back: #223f53;
    --color-light-gray: #F5F5F5;
  }
  body {
    font-family: "LineSeedKR", sans-serif;
    font-size: 14px;
  }
  h1 {
    font-size: 32px;
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
    display: flex;
    outline: none;
    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }
  ::selection {
    color: white;
    background-color: var(--color-point);
  }
`;

export default GlobalStyles;
