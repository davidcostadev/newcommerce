import React from 'react'
import withRedux from 'next-redux-wrapper'
import Page from '../containers/PageHOF'
import { Container } from '../layout/Pages'
import { initStore } from '../store'
import LoginFrom from '../components/users/LoginForm'
import withAuth from '../utils/withAuth'

class Login extends React.Component {
  static async getInitialProps(context) {
    withAuth.getInitialProps(context)
  }

  render() {
    const urlMeta = {
      PS_TITLE: 'Entrar',
      PS_DESCRIPTION: 'Acessar os pedidos',
    }

    return (
      <Page {...{ urlMeta }} {...this.props}>
        <Container>
          <LoginFrom />
        </Container>
      </Page>
    )
  }
}


export default withRedux(initStore)(withAuth(Login))
