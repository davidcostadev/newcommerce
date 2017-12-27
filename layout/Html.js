import styled from 'styled-components'
import theme from '../layout/theme'

const LinkInverse = `
  color: ${theme.linkInverse} !important;

  &:hover {
    color: ${theme.linkHoverInverse} !important;
  }
  &:active {
    color: ${theme.linkActiveInverse} !important;
  }
`

export const Link = styled.a`
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

export default Link
