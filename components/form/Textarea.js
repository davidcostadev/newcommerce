import React from 'react'
import PropTypes from 'prop-types'

class Textarea extends React.Component {
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
      <textarea
        className="form-control"
        {...otherProps}
        id={id}
        onChange={this.handleChange}
        value={this.state.value}
      />
    )
  }
}

Textarea.propTypes = {
  value: PropTypes.any,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

Textarea.defaultProps = {
  value: '',
}


export default Textarea
