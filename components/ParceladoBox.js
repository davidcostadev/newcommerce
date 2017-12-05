import React from 'react'
import PropTypes from 'prop-types'
import { toFloat, floatToReal } from '../utils/money'
import styles from '../assets/scss/App.scss'

export const ParcelBox = ({ parcel, amount }) => (
  <div className={styles.productComplement}>
    ou {parcel}x de
    <span className={styles.currency}>R$</span>
    <span className={styles.amount}>{amount}</span>
    <strong>Sem Juros</strong>
  </div>
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


