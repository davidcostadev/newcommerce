import React from 'react'
import PropTypes from 'prop-types'
import classname from 'classnames'
import styled from 'styled-components'


const listDelivery = [
  {
    id: 1,
    name: 'Pegar na Loja',
  },
  // {
  //   id: 2,
  //   name: 'Delivery',
  // },
  // {
  //   id: 41068,
  //   name: 'Pac',
  // },
  // {
  //   id: 40096,
  //   name: 'Sedex',
  // },
]

const Ways = ({ deliveryDefault, onClick }) => (
  <div>
    {
      listDelivery.map(delivery => (
        <Way
          key={delivery.id}
          deliveryDefault={deliveryDefault}
          delivery={delivery}
          onClick={onClick}
        />
      ))
    }
  </div>
)

Ways.propTypes = {
  deliveryDefault: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

const ButtonDelivery = styled.button`
  margin-bottom: 30px;

  & + & {
    margin-left: 15px;
  }
`

const Way = ({ deliveryDefault, delivery, onClick }) => {
  const classDelivery = classname(
    'btn',
    'btn-default',
    {
      'btn-primary': deliveryDefault === delivery.id,
    },
  )
  return (
    <ButtonDelivery className={classDelivery} onClick={() => onClick(delivery.id)}>
      {delivery.name}
    </ButtonDelivery>
  )
}

Way.propTypes = {
  deliveryDefault: PropTypes.number.isRequired,
  delivery: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Ways
