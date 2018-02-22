import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from './FormGroup'
import Input from './Input'

export const getTypeInput = (type) => {
  switch (type) {
    case 'password':
    case 'password_confirm':
    case 'passwordConfirm':
      return 'password'
    case 'email':
      return 'email'
    default:
      return 'text'
  }
}

const InputFormGroup = (props) => {
  const {
    id,
    label,
    type,
    value,
    row,
    onChange,
    ...attrs
  } = props
  const placeholder = props.placeholder.length ? props.placeholder : label

  return (
    <FormGroup row={row}>
      <label htmlFor={id} className="control-label">{label}</label>
      <Input
        {...attrs}
        id={id}
        type={getTypeInput(id)}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FormGroup>
  )
}

InputFormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  row: PropTypes.bool,
}

InputFormGroup.defaultProps = {
  type: 'text',
  row: false,
  value: '',
  placeholder: '',
}

export default InputFormGroup
