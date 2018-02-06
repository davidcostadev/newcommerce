import React from 'react'
import styled from 'styled-components'
import theme from '../layout/theme'
import LogoSVG from '../static/img/logo'

const LogoBox = styled.div`
use {
  fill: ${theme.white} !important;
}
@media(min-width: ${theme.minMd}) {
  use {
    fill: ${theme.colorPrimary} !important;
  }
}
`


const Logo = () => (
  <LogoBox>
    <LogoSVG />
  </LogoBox>
)

export default Logo
