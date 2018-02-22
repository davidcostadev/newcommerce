import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from './FormGroup'
import Input from './Input'

const PropsRadio = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

const createInputIdArray = (id, value) => `${id}-${value}`

const Radio = props => (
  <div className="form-check">
    <label className="form-check-label">
      <Input
        className="form-check-input"
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={props.default === props.value}
      />
      {props.label}
    </label>
  </div>
)

Radio.propTypes = {
  ...PropsRadio,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  default: PropTypes.string.isRequired,
}

const Radios = (props) => {
  const {
    id,
    radios,
    onChange,
    value,
  } = props

  if (!radios.length) {
    return null
  }

  return radios.map(input => (
    <Radio
      key={createInputIdArray(id, input.value)}
      id={createInputIdArray(id, input.value)}
      name={id}
      value={input.value}
      onChange={onChange}
      default={value}
      {...input}
    />
  ))
}

Radios.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  radios: PropTypes.arrayOf(PropTypes.shape(PropsRadio).isRequired).isRequired,
  value: PropTypes.string.isRequired,
}

const RadioFormGroup = (props) => {
  const {
    id,
    label,
    radios,
    row,
    onChange,
    value,
  } = props

  return (
    <FormGroup row={row}>
      <label className="label-control">{label}</label>
      <Radios
        id={id}
        radios={radios}
        onChange={onChange}
        value={value}
      />
    </FormGroup>
  )
}

RadioFormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  row: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  radios: PropTypes.arrayOf(PropTypes.shape(PropsRadio).isRequired).isRequired,
}

RadioFormGroup.defaultProps = {
  row: false,
}

export default RadioFormGroup
