import React from 'react'
import PropTypes from 'prop-types'

class Select extends React.Component {
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
    const { id, ...otherProps } = this.props

    return (
      <select
        className="form-control"
        {...otherProps}
        id={id}
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  }
}

Select.propTypes = {
  value: PropTypes.any,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

Select.defaultProps = {
  value: '',
}


export default Select
