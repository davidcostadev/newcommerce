import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import jsCookie from 'js-cookie'
import shortid from 'shortid'
import Router from 'next/router'
import { Link } from '../../layout/Html'
import FormGroup from '../form/FormGroup'
import Input from '../form/Input'
import User from '../../api/User'
import { setAuthentication } from '../../flux/user/actions'
import { FlashMessages } from '../page/FlashMessage'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.save = this.save.bind(this)
    this.handle = this.handle.bind(this)

    this.state = {
      email: '',
      password: '',
      isLoading: false,
      errors: [],
    }
  }

  handle({ target }) {
    this.setState({
      [target.id]: target.value,
    })
  }

  async save(e) {
    e.preventDefault()

    // this.props.addFlashMessage({
    //   type: 'success',
    //   message: 'foi uma alerta',
    // })

    const { email, password } = this.state

    this.setState({ isLoading: true })

    if (email.length && password.length) {
      try {
        const env = {
          PASSKEY: process.env.PASSKEY,
          DOMAIN_API: process.env.DOMAIN_API,
        }

        const user = await User.login(env, axios.post, { email, password })

        jsCookie.set('logged', true, { expires: 7 })
        jsCookie.set('user', user, { expires: 30 })

        this.props.setAuthentication(true)

        Router.replace('/')
      } catch (error) {
        if (error.PS_TABELA_INFO[0].PS_ID_ERRO === '5') {
          this.addErrors({
            type: 'danger',
            message: 'Usuários e Senha inválidos',
          })
        } else {
          console.error(error)

          this.addErrors({
            type: 'danger',
            message: 'Não foi possivel fazer o login',
          })
        }
      }
    } else {
      this.addErrors({
        type: 'danger',
        message: 'Por favor preencha seu email e senha',
      })
    }
    this.setState({ isLoading: false })
  }

  addErrors({ type, message }) {
    this.setState({
      errors: [
        {
          id: shortid.generate(),
          type,
          message,
        },
      ],
    })
  }

  render() {
    const { isLoading, errors } = this.state

    return (
      <div className="row justify-content-sm-center">
        <div className="col-sm-4">
          <form className="form" onSubmit={this.save}>
            <FlashMessages msgs={errors} />
            <FormGroup>
              <label htmlFor="email" className="control-label">Email</label>
              <Input
                id="email"
                label="Email"
                placeholder="Seu email"
                onChange={this.handle}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password" className="control-label">Sua Senha</label>
              <Input
                id="password"
                type="password"
                label="Senha"
                placeholder="Sua Senha"
                onChange={this.handle}
              />
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Link route="password">
                <a>Esqueci a senha</a>
              </Link>
              <button className="btn btn-primary" disabled={isLoading}>Entrar</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

LoginForm.propTypes = {
  setAuthentication: PropTypes.func.isRequired,
  // addFlashMessage: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setAuthentication,
    // addFlashMessage,
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(LoginForm)
