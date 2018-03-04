import styled from 'styled-components'
import theme from './theme'

export const Toolbar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;

  @media (min-width: ${theme.minMd}) {
    display: none;
  }
`

export const Menu = styled.div`
  display: flex;
`
export const Item = styled.a`
  background-color: ${theme.colorPrimary};
  color: ${theme.white} !important;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 0px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colorSecond};
  }

  i {
    font-size: 28px;
  }
`

