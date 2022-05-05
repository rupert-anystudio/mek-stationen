import { createGlobalStyle } from 'styled-components'
import fontsizes from '../../styles/fontsizes'
import fontstyles from '../../styles/fontstyles'

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body, html, #__next {
    background: white;
    color: black;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 0;
    user-select: none;
  }
  body {
    ${fontsizes.root}
    ${fontstyles.root}
    text-rendering: optimizeLegibility;
    overflow: -moz-scrollbars-vertical;
    overflow: hidden;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 auto;
    min-height: 100vh;
  }
  a {
    color: inherit;
    text-decoration: none;
    &:hover, &:active {
      text-decoration: underline;
    }
  }
  h1, h2, h3, h4, h5, h6, p, ul, ol, input, textarea, button {
    ${fontsizes.root}
    ${fontstyles.root}
    margin: .4em 0;
  }
`

export default GlobalStyles
