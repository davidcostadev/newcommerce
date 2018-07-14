import React from 'react'
import PropTypes from 'prop-types'

const ButtonToStore = ({ to }) => (
  <a
    className="btn btn-lg btn-primary btn-buy"
    href={to}
  >
    Ir para loja
  </a>
)

ButtonToStore.propTypes = {
  to: PropTypes.string.isRequired,
}


export default ButtonToStore
