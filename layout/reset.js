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
  overflow-x: initial;
  color: ${theme.text};
  font-family: ${theme.fontBody};
  background: ${theme.bodyBg};
}


a {
  color: ${theme.colorPrimary};
  text-decoration: none;

  &:focus,
  &:hover {
    color: ${theme.colorPrimary};
    text-decoration: none;
  }
}

input,
textarea,
select {
  font-family: ${theme.fontBody}
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}


p {
  margin-top: 0;
  margin-bottom: 20px;
}
a {

}
`

export default style
