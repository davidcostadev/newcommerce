import React from 'react'
import withRedux from 'next-redux-wrapper'
import Page from '../containers/PageHOF'
import { Container, FormContent } from '../layout/Pages'
import { initStore } from '../store'
import FormSignUpWholesale from '../components/users/FormSignUpWholesale'
import withAuth from '../utils/withAuth'

class SignUp extends React.Component {
  static auth() {
    return {
      rules: {
        guest: true,
      },
    }
  }

  static async getInitialProps(context) {
    const props = await Page.getInitialProps(context.store, context.req, context.isServer)

    return props
  }

  constructor() {
    super()

    this.changeTypePerson = this.changeTypePerson.bind(this)

    this.state = {
      type: 'pf',
    }
  }

  changeTypePerson(type) {
    this.setState({
      type: type.target.value,
    })
  }

  render() {
    const urlMeta = {
      PS_TITLE: 'Cadastrar',
      PS_DESCRIPTION: 'Faça seu Cadastro',
    }
    let Content = null

    if (process.env.BUSSNESS_TYPE === 'wholesale') {
      Content = (
        <FormSignUpWholesale
          type={this.state.type}
          changeTypePerson={this.changeTypePerson}
        />
      )
    }

    return (
      <Page {...{ urlMeta }} {...this.props}>
        <Container>
          <FormContent>
            <div className="row justify-content-sm-center">
              <div className="col-sm-10 col-lg-6">
                <h1>Cadastro</h1>
                {Content}
              </div>
            </div>
          </FormContent>
        </Container>
      </Page>
    )
  }
}


export default withRedux(initStore)(withAuth(SignUp))
