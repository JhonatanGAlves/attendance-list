import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: 16px;
    font-family: 'Source Code Pro', monospace;

    -webkit-font-smoothing: antialiased;
  }
`

export default GlobalStyle