import styled from 'styled-components'
import theme from './theme'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.7);
  display: ${prop => (prop.hide ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  @media (min-width: ${theme.minMd}) {
    display: none;
  }

  form {
    width: 90%;
  }
`

export const Form = styled.form`

`
