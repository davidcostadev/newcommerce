import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import jsCookie from 'js-cookie'
import Router from 'next/router'
import Input from '../form/Input'
import User from '../../api/User'
import { setAuthentication } from '../../flux/user/actions'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    console.log(props)

    this.save = this.save.bind(this)
    this.handle = this.handle.bind(this)

    this.state = {
      email: '',
      password: '',
      isLoading: false,
    }
  }

  handle({ target }) {
    this.setState({
      [target.id]: target.value,
    })
  }

  async save(e) {
    e.preventDefault()

    const { email, password } = this.state

    this.setState({ isLoading: true })

    if (email.length && password.length) {
      try {
        const env = {
          PASSKEY: process.env.PASSKEY,
          DOMAIN_API: process.env.DOMAIN_API,
        }

        const user = await User.login(env, axios.post, { email, password })

        console.log(user)

        jsCookie.set('logged', true, { expires: 7 })

        this.props.setAuthentication(true)

        Router.replace('/')
      } catch (error) {
        console.error(error)
      }
    }
    this.setState({ isLoading: false })
  }

  render() {
    const { isLoading } = this.state

    return (
      <div className="row justify-content-sm-center">
        <div className="col-sm-4">
          <form className="form" onSubmit={this.save}>
            <Input
              id="email"
              label="Email"
              placeholder="Seu email"
              onChange={this.handle}
            />
            <Input
              id="password"
              type="password"
              label="Senha"
              placeholder="Sua Senha"
              onChange={this.handle}
            />
            <div className="text-center'">
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
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setAuthentication,
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(LoginForm)
