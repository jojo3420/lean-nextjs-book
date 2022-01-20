import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  // reset css 
  ${reset}
  
  // box-sizing mode 변경  
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;

  }
`

export default GlobalStyle