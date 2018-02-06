import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import PropTypes from 'prop-types'
// import Head from 'next/head'
// import jsCookie from 'js-cookie'
// import { setCategories } from '../store'
// import { setSessionId } from '../flux/user/actions'
// import ApiCategories from '../api/Categories'
// import HeaderPage from '../components/HeaderPage'
// import FooterPage from '../components/FooterPage'
// import Sitemap from '../components/Sitemap'
// import Copy from '../components/Copy'

const HOF = (ComposedComponent) => {
  class Auth extends React.Component {
    componentWillMount() {
      if (this.props.isAuthenticated) {
        console.log(this.context)
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  Auth.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  }

  return Auth
}

const mapStateToProps = () => ({
  isAuthenticated: false,
})

export default connect(mapStateToProps)(HOF)

// Page.propTypes = {
//   urlMeta: PropTypes.shape({
//     PS_TITLE: PropTypes.string.isRequired,
//     PS_DESCRIPTION: PropTypes.string.isRequired,
//   }).isRequired,
//   url: PropTypes.shape({
//     query: PropTypes.shape({
//       q: PropTypes.string,
//     }),
//   }),
//   children: PropTypes.any.isRequired,
// }

// Page.defaultProps = {
//   url: PropTypes.shape({
//     query: {
//       q: '',
//     },
//   }),
// }

// const mapToState = state => ({
//   categories: state.categories,
// })

// const mapDispatchToProps = dispatch => ({
//   setCategories: bindActionCreators(setCategories, dispatch),
// })

// export default connect(mapToState, mapDispatchToProps)(Page)
