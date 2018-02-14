import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { authSession, redirect } from './user'
import isRedirect from '../utils/auth'

const withAuth = (ComposedComponent) => {
  class Auth extends React.Component {
    static async getInitialProps(context) {
      const loggedIn = authSession(context)
      let auth = {
        rules: {
          guest: false,
        },
      }

      if (typeof ComposedComponent.auth !== 'undefined') {
        auth = ComposedComponent.auth()
      }
      if (isRedirect(loggedIn, auth.rules)) {
        redirect(context, '/')
      }

      const props = await ComposedComponent.getInitialProps(context)

      return props
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  Auth.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object,
  }

  Auth.defaultProps = {
    user: {},
  }

  const mapStateToProps = ({ authentication, user }) => ({
    isAuthenticated: authentication,
    user,
  })

  return connect(mapStateToProps)(Auth)
}

export default withAuth
