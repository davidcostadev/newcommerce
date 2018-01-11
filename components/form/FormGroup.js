import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const FormGroup = ({ row, children }) => {
  const classes = classnames(
    'form-group',
    { row },
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

FormGroup.propTypes = {
  row: PropTypes.bool,
  children: PropTypes.any.isRequired,
}

FormGroup.defaultProps = {
  row: false,
}

export default FormGroup
