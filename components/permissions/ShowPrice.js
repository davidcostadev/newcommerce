import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ShowPrice = ({ authentication, children }) => {
  if (!authentication && process.env.BUSSNESS_ENABLE_PRICE !== 'true') {
    return null
  }

  return children
}

ShowPrice.propTypes = {
  authentication: PropTypes.bool,
  children: PropTypes.any.isRequired,
}

ShowPrice.defaultProps = {
  authentication: false,
}

const mapStateToProps = ({ authentication }) => ({
  authentication,
})


export default connect(mapStateToProps)(ShowPrice)
