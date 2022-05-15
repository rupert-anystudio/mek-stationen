import { createGlobalStyle } from 'styled-components'
import fontsizes from '../../styles/fontsizes'
import fontstyles from '../../styles/fontstyles'

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
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
  html {
    font-size: 62.5%;
    /* scroll-behavior: smooth; */
    /* scroll-snap-type: y mandatory;
    scroll-snap-points-y: repeat(100vh); */
  }
  body {
    ${fontsizes.root}
    ${fontstyles.root}
    text-rendering: optimizeLegibility;
    /* overflow: -moz-scrollbars-vertical; */
    /* overflow: hidden;
    overflow-y: scroll; */
    background:black;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin: 0 auto;
    min-height: 100vh;
    /* max-width: 192rem; */
    margin: 0 auto;
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
