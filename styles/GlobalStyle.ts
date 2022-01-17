import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  // reset css 
  ${reset}
  
  // box-sizing mode 변경  
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle