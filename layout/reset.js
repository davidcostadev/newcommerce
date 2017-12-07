import { injectGlobal } from 'styled-components'
import theme from './theme'

const style = () => injectGlobal`
*, ::after, ::before {
  box-sizing: border-box;
}
body {
  /* color: ${theme.text}; */
  /* font-family: 'Open Sans', sans-serif; */
  /* margin: 0; */
}
p {
  margin-top: 0;
  margin-bottom: 20px;
}
a {
  text-decoration: none;
}
`

export default style
