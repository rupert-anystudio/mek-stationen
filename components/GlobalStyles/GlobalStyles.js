import { createGlobalStyle } from 'styled-components'
import fontsizes from '../../styles/fontsizes'
import fontstyles from '../../styles/fontstyles'

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    width: 1920px;
    height: 1080px;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    position: relative;
    padding: 0;
    margin: 0;
    user-select: none;
    background: white;
    color: black;
    font-size: 62.5%;
  }
  body {
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    ${fontsizes.root}
    ${fontstyles.root}
  }
  #__next {
    position: relative;
    width: 100%;
    min-height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    transform: translate3d(0,0,0);
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
