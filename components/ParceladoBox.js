import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../layout/theme'
import { ProductCurrency, ProductAmount } from '../layout/Product'
import { toFloat, floatToReal } from '../utils/money'


const ProductComplement = styled.div`
  display: flex;
  justify-content: center;
  padding: 6px 12px;
  font-size: 14px;
  align-items: baseline;

  ${ProductCurrency} {
    margin-right: 5px;
    margin-left: 5px;
    font-size: 14px;
  }
  ${ProductAmount} {
    font-size: 14px;
    margin-right: 5px;
  }

  strong {
    color: ${theme.colorSecond};
  }
`


export const ParcelBox = ({ parcel, amount }) => (
  <ProductComplement>
    ou {parcel}x de
    <ProductCurrency>R$</ProductCurrency>
    <ProductAmount>{amount}</ProductAmount>
  </ProductComplement>
)

ParcelBox.propTypes = {
  parcel: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,
}

export function parcelado(number) {
  const float = toFloat(number)

  let currentParcel = 1
  let currentAmount = 0
  const limitSemJuros = 3
  const minimoParcela = 5

  if (float < minimoParcela) {
    return <ParcelBox parcel={currentParcel} amount={floatToReal(float)} />
  }

  for (let i = 1; i <= limitSemJuros; i += 1) {
    const current = float / i
    if (current < minimoParcela) {
      break
    }
    currentParcel = i
    currentAmount = current
  }

  return <ParcelBox parcel={currentParcel} amount={floatToReal(currentAmount)} />
}
