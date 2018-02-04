import React from 'react'
import shortid from 'shortid'
import FormGroup from '../form/FormGroup'
import Input from '../form/Input'
// import User from '../../api/User'
import { FlashMessages } from '../page/FlashMessage'

class FormChangePassword extends React.Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.handle = this.handle.bind(this)

    this.state = {
      password: '',
      passwordConfirm: '',
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

  onSubmit(event) {
    event.preventDefault()

    const {
      password,
      passwordConfirm,
    } = this.state

    console.log(password, passwordConfirm)

    if (password.length < 6) {
      this.addErrors({
        type: 'danger',
        message: 'Por favor, insira uma senha de no minimo 6 letras.',
      })
    } else if (password !== passwordConfirm) {
      this.addErrors({
        type: 'danger',
        message: 'Por favor, confirme sua senha',
      })
    } else {
      this.setState({
        errors: [],
      })
      this.props.onChange(password)
    }
  }

  render() {
    const { isLoading, errors, success } = this.state

    if (success) {
      const message = [
        {
          type: 'success',
          message: 'Um email foi encaminhado para sua endereço de email e siga as instrução contida nele.',
        },
      ]

      return (
        <FlashMessages msgs={message} />
      )
    }

    return (
      <form>
        <FlashMessages msgs={errors} />
        <FormGroup>
          <label htmlFor="email" className="control-label">Senha</label>
          <Input
            type="password"
            name="password"
            id="password"
            label="Senha"
            placeholder="Sua senha"
            onChange={this.handle}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email" className="control-label">Confirme sua Senha</label>
          <Input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            label="Confirme sua Senha"
            placeholder="Repita sua senha"
            onChange={this.handle}
          />
        </FormGroup>
        <div className="text-center">
          <button
            className="btn btn-primary"
            disabled={isLoading}
            onClick={this.onSubmit}
          >
            Alterar Senha
          </button>
        </div>
      </form>
    )
  }
}


export default FormChangePassword
