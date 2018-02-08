import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import shortid from 'shortid'
import FormGroup from '../form/FormGroup'
import Input from '../form/Input'
import User from '../../api/User'
import { FlashMessages } from '../page/FlashMessage'

class FormChangePasswordGuest extends React.Component {
  constructor(props) {
    super(props)

    this.save = this.save.bind(this)
    this.handle = this.handle.bind(this)

    this.state = {
      email: '',
      isLoading: false,
      success: false,
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

    const { email } = this.state

    this.setState({ isLoading: true })

    if (email.length) {
      try {
        const env = {
          PASSKEY: process.env.PASSKEY,
          DOMAIN_API: process.env.DOMAIN_API,
        }

        await User.resetPassword(env, axios.post, email)
        this.setState({ success: true })
      } catch (error) {
        console.error(error)

        this.addErrors({
          type: 'danger',
          message: 'Não foi possivel fazer o resetar sua senha',
        })
      }
    } else {
      this.addErrors({
        type: 'danger',
        message: 'Por favor preencha seu email',
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
    const { isLoading, errors, success } = this.state

    if (success) {
      const msg = `Um email foi encaminhado para sua endereço de email e
      siga as instrução contida nele.`

      const message = [
        {
          type: 'success',
          message: msg,
        },
      ]

      return (
        <FlashMessages msgs={message} />
      )
    }

    return (
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
        <div className="text-center">
          <button className="btn btn-primary" disabled={isLoading}>Resetar</button>
        </div>
      </form>
    )
  }
}


export default connect()(FormChangePasswordGuest)
