import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '../routes'
import theme from '../layout/theme'

const Badge = styled.span`
  display: inline-block;
  width: 22px;
  height: 22px;
  padding: 5px 0px;
  background: ${theme.colorSecond};
  border-radius: 50%;
  font-size: 12px;
  vertical-align: super;
  color: white;
  transform: translate(4px, -8px);
`

const ButtonCartWrap = styled.a`
  display: flex;
  align-items: center;
  color: ${theme.colorPrimary} !important;
  background-color: white;
  border-radius: 3px;
  border-width: 0;
  padding: 0 10px;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${theme.buttonDefault} !important;
    color: green;
  }
  &:active {
    background-color: ${theme.buttonDefaultHover} !important;
  }
  i {
    font-size: 32px;
    vertical-align: middle;
  }
`

export const Button = ({ quant }) => (
  <Link route="/cart">
    <ButtonCartWrap>
      <i className="ion-ios-cart-outline" />
      <Badge className="badge">{quant}</Badge>
    </ButtonCartWrap>
  </Link>
)


Button.propTypes = {
  quant: PropTypes.number,
}

Button.defaultProps = {
  quant: 0,
}

const mapState = state => ({
  quant: state.cartItens.length,
})

export default connect(mapState)(Button)
