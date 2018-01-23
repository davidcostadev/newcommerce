import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ShowCart = ({ authentication, children }) => {
  if (!authentication && process.env.BUSSNESS_ENABLE_CART !== 'true') {
    return null
  }

  return children
}

ShowCart.propTypes = {
  authentication: PropTypes.bool,
  children: PropTypes.any.isRequired,
}

ShowCart.defaultProps = {
  authentication: false,
}

const mapStateToProps = ({ authentication }) => ({
  authentication,
})


export default connect(mapStateToProps)(ShowCart)
