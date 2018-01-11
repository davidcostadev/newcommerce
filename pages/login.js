import React from 'react'
import withRedux from 'next-redux-wrapper'
import styled from 'styled-components'
import Page from '../containers/PageHOF'
import { Container } from '../layout/Pages'
import { initStore } from '../store'
import LoginFrom from '../components/users/LoginForm'
import withAuth from '../utils/withAuth'

const FormContent = styled.div`
  padding: 70px 0 160px;

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
`

class Login extends React.Component {
  static auth() {
    return {
      rules: {
        guest: true,
      },
    }
  }

  static async getInitialProps(context) {
    const props = await Page.getInitialProps(context.store, context.req, context.isServer)

    console.log(props)

    return props
  }

  render() {
    const urlMeta = {
      PS_TITLE: 'Entrar',
      PS_DESCRIPTION: 'Acessar os pedidos',
    }

    return (
      <Page {...{ urlMeta }} {...this.props}>
        <Container>
          <FormContent>
            <h1>Login</h1>
            <LoginFrom />
          </FormContent>
        </Container>
      </Page>
    )
  }
}


export default withRedux(initStore)(withAuth(Login))
