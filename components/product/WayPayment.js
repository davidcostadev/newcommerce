import React from 'react'
import PropTypes from 'prop-types'
import classname from 'classnames'
import styled from 'styled-components'

const listPayments = [
  // {
  //   id: 13,
  //   name: 'Pagseguro',
  // },
  // {
  //   id: 15,
  //   name: 'Boleto',
  // },
  // {
  //   id: 17,
  //   name: 'Depósito',
  // },
  {
    id: 1,
    name: 'Na loja',
  },
]

const Ways = ({ paymentDefault, onClick }) => (
  <div>
    {
      listPayments.map(payment => (
        <Way
          key={payment.id}
          paymentDefault={paymentDefault}
          payment={payment}
          onClick={onClick}
        />
      ))
    }
  </div>
)

Ways.propTypes = {
  paymentDefault: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

const ButtonPayment = styled.button`
  margin-bottom: 30px;

  & + & {
    margin-left: 15px;
  }
`

const Way = ({ paymentDefault, payment, onClick }) => {
  const classPayment = classname(
    'btn',
    'btn-default',
    {
      'btn-primary': paymentDefault === payment.id,
    },
  )
  return (
    <ButtonPayment className={classPayment} onClick={() => onClick(payment.id)}>
      {payment.name}
    </ButtonPayment>
  )
}

Way.propTypes = {
  paymentDefault: PropTypes.number.isRequired,
  payment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Ways
