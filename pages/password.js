import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import withRedux from 'next-redux-wrapper'
import Page from '../containers/PageHOF'
import { initStore } from '../store'
import { Link } from '../layout/Html'
import { Container, PageContent } from '../layout/Pages'
import FormChangePasswordGuest from '../components/form/FormChangePasswordGuest'
import FormChangePassword from '../components/form/FormChangePassword'
import User from '../api/User'
import { FlashMessages } from '../components/page/FlashMessage'

class Password extends React.Component {
  static async getInitialProps(props) {
    const {
      req,
      store,
      isServer,
      query,
    } = props
    const { chave } = query

    const { sessionId } = await Page.getInitialProps(store, req, isServer)
    const { passwordValid, userId } = await Password.checkPassword(chave)

    const urlMeta = {
      PS_TITLE: 'password',
      PS_DESCRIPTION: 'If you dont remember of your password, you can reset it in this page',
    }

    return {
      sessionId,
      urlMeta,
      query,
      passwordValid,
      userId,
    }
  }

  static async checkPassword(key) {
    let passwordValid = false
    let userId = null

    if (!key.length) {
      return {
        passwordValid,
        userId,
      }
    }

    try {
      const env = {
        PASSKEY: process.env.PASSKEY,
        DOMAIN_API: process.env.DOMAIN_API,
      }
      const response = await User.checkHash(env, axios.post, key)

      if (response.PS_ID_PESSOA > 0) {
        passwordValid = true
        userId = parseInt(response.PS_ID_PESSOA, 10)
      }
    } catch (error) {
      console.error(error)
    }

    return {
      passwordValid,
      userId,
    }
  }


  constructor() {
    super()

    this.changePassword = this.changePassword.bind(this)

    this.state = {
      success: false,
    }
  }

  async changePassword(password) {
    const { userId } = this.props

    try {
      const env = {
        PASSKEY: process.env.PASSKEY,
        DOMAIN_API: process.env.DOMAIN_API,
      }

      User.changePassword(env, axios.post, {
        userId,
        password,
      })

      this.setState({
        success: true,
      })
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    const { passwordValid } = this.props
    const { chave } = this.props.query
    const { success } = this.state

    let Content = null

    if (success) {
      const msgs = [
        {
          type: 'success',
          message: 'Sua senha foi alterada com sucesso.',
        },
      ]
      Content = (
        <div>
          <FlashMessages msgs={msgs} />
          <p>
            <Link route="/login"><a className="btn btn-primary">Entrar</a></Link>
          </p>
        </div>
      )
    } else if (passwordValid) {
      Content = (
        <div>
          <FormChangePassword onChange={this.changePassword} />
        </div>
      )
    } else {
      let errors = []

      if (chave && !passwordValid) {
        errors = [
          {
            type: 'danger',
            message: 'Link está expirado, por favor requisite novamente a mudança da senha',
          },
        ]
      }

      Content = (
        <div>
          <FlashMessages msgs={errors} />
          <p>Seguida os passos abaixo:</p>
          <ul>
            <li>Digite seu email</li>
            <li>Uma mensagem será enviada</li>
            <li>Siga a instruções contidas na mensagem</li>
          </ul>
          <FormChangePasswordGuest />
        </div>
      )
    }

    return (
      <Page {...this.props}>
        <Container>
          <PageContent>
            <div className="row justify-content-sm-center">
              <div className="col-sm-8">
                <h1>Resetar Senha</h1>
                {Content}
              </div>
            </div>
          </PageContent>
        </Container>
      </Page>
    )
  }
}

Password.propTypes = {
  passwordValid: PropTypes.bool.isRequired,
  query: PropTypes.shape({
    chave: PropTypes.string.isRequired,
  }),
}

Password.defaultProps = {
  query: {
    chave: '',
  },
}

const mapState = state => state

export default withRedux(initStore, mapState)(Password)
