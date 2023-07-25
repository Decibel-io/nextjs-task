import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar-track {
    border-radius: 0px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background: transparent;
  }

  body {
    font-size: 14px;
    overflow: hidden;
    width: 100% !important;
  }
`
