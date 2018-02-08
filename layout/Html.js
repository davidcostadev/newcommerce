import styled from 'styled-components'
import theme from '../layout/theme'
// import Routes from '../routes'

const LinkInverse = `
  color: ${theme.linkInverse} !important;

  &:hover {
    color: ${theme.linkHoverInverse} !important;
  }
  &:active {
    color: ${theme.linkActiveInverse} !important;
  }
`

export const RouterLink = styled.a`
  cursor: pointer;
  color: ${theme.link} !important;

  &:hover {
    color: ${theme.linkHover} !important;
  }
  &:active {
    color: ${theme.linkActive} !important;
  }

  ${props => (props.inverse ? LinkInverse : '')}

`

export default RouterLink
