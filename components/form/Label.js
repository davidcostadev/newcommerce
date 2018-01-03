import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ htmlFor, ...props }) => (
  <label htmlFor={htmlFor} {...props} />
)

Label.propTypes = {
  htmlFor: PropTypes.any.isRequired,
}

export default Label
