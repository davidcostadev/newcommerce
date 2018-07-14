import PropTypes from 'prop-types'

const ShowPrice = ({ children }) => {
  if (process.env.BUSSNESS_ENABLE_PRICE !== 'true') {
    return null
  }

  return children
}

ShowPrice.propTypes = {
  children: PropTypes.any.isRequired,
}

export default ShowPrice
