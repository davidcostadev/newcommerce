import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export const FlashMessageItem = ({ type, message }) => (
  <div className={classnames(
    'alert',
    {
      'alert-success': type === 'success',
      'alert-danger': type === 'danger',
      'alert-warning': type === 'warning',
      'alert-info': type === 'info',
    },
  )}
  >
    {message}
  </div>
)

FlashMessageItem.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export const FlashMessages = ({ msgs }) => {
  if (!msgs.length) {
    return null
  }

  return msgs.map(({ id, type, message }) => (
    <FlashMessageItem
      key={id}
      type={type}
      message={message}
    />
  ))
}

FlashMessages.propsTypes = {
  msgs: PropTypes.shape({
    id: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
}

