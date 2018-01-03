import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Router from 'next/router'
// import PropTypes from 'prop-types'
// import Head from 'next/head'
import jsCookie from 'js-cookie'
// import { setCategories } from '../store'
// import { setSessionId } from '../flux/user/actions'
// import ApiCategories from '../api/Categories'
// import HeaderPage from '../components/HeaderPage'
// import FooterPage from '../components/FooterPage'
// import Sitemap from '../components/Sitemap'
// import Copy from '../components/Copy'

const redirect = (context, target) => {
  if (context.isServer) {
    // server
    // 303: "See other"
    context.res.redirect(target)
    context.res.finished = true
    context.res.end()
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(target)
  }
}

const authSession = ({ isServer, req }) => {
  if (isServer) {
    return req.cookies.logged === 'true' || null
  }

  return jsCookie.get('logged') === 'true' || null
}


const withAuth = (ComposedComponent) => {
  class Auth extends React.Component {
    static async getInitialProps(context) {
      const loggedIn = authSession(context)

      if (loggedIn) {
        redirect(context, '/')
      }
    }

    componentWillMount() {
      // jsCookie.set('logged', true, { expires: 7 })
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  Auth.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  }

  const mapStateToProps = () => ({
    isAuthenticated: false,
  })


  return connect(mapStateToProps)(Auth)
}


export default withAuth

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
