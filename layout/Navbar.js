import styled from 'styled-components'
import theme from './theme'

export const Navbar = styled.div`
  background-color: ${theme.colorPrimary};
  justify-content: center;
  display: flex;
  padding: 5px 0;

  @media (min-width: ${theme.minMd}) {
    display: none;
  }
`

export const Item = styled.a`
  &:hover {
    opacity: .7
  }
`

