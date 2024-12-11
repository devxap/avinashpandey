import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%; /* Set both html and body to 100% height */
    margin: 0; /* Remove default margin */
  }

  body {
  background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    font-family: 'Courier New', Courier, monospace;
    transition: all 0.3s ease-in-out;
    height: 100%; /* Ensure body takes up 100% of the viewport height */
    display: flex;
    flex-direction: column;
  }

   a {
        color: ${({ theme }) => theme.socialIcon};
    }

    hr {
        background: ${({ theme }) => theme.text};
    }
`;

export default GlobalStyle;
