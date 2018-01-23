import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ShowToGuest = ({ authentication, children }) => {
  if (authentication) {
    return null
  }

  return children
}

ShowToGuest.propTypes = {
  authentication: PropTypes.bool,
  children: PropTypes.any.isRequired,
}

ShowToGuest.defaultProps = {
  authentication: false,
}

const mapStateToProps = ({ authentication }) => ({
  authentication,
})


export default connect(mapStateToProps)(ShowToGuest)
