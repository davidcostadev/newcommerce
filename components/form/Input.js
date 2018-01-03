import React from 'react'
import PropTypes from 'prop-types'
// import * as Form from '~layout/Form'

class Input extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: typeof props.value !== 'undefined' ? props.value : '',
    }
  }


  handleChange(e) {
    this.setState({ value: e.target.value })

    this.props.onChange(e)
  }

  render() {
    const { id, label, ...otherProps } = this.props

    return (
      <div className="form-group">
        <label htmlFor={id} className="control-label">{label}</label>
        <input
          className="form-control"
          {...otherProps}
          id={id}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

Input.propTypes = {
  value: PropTypes.any,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  value: '',
}


export default Input
