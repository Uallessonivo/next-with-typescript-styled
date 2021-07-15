import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1080px) {
      html {
          font-size: 93.75%;
      }
  }

  @media (max-width: 720px) {
      html {
          font-size: 87.5%;
      }
  }

  a {
      text-decoration: none;
  }
`
