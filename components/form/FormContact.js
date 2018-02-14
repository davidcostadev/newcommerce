import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from '../form/FormGroup'
import Input from '../form/Input'
import Textarea from '../form/Textarea'
import { FlashMessages } from '../page/FlashMessage'

class FormContact extends React.Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.handle = this.handle.bind(this)

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      isLoading: false,
      errors: [],
    }
  }

  onSubmit(event) {
    event.preventDefault()

    const {
      name,
      email,
      subject,
      message,
    } = this.state

    if (!name.length) {
      this.addErrors({
        id: 1,
        type: 'danger',
        message: 'Por favor, informe o nome',
      })
    } else if (!email.length) {
      this.addErrors({
        id: 2,
        type: 'danger',
        message: 'Por favor, informe o email',
      })
    } else if (!subject.length) {
      this.addErrors({
        id: 3,
        type: 'danger',
        message: 'Por favor, informe o assunto',
      })
    } else if (!message.length) {
      this.addErrors({
        id: 4,
        type: 'danger',
        message: 'Por favor, informe sua mensagem',
      })
    } else {
      this.setState({
        errors: [],
      })
      this.props.onChange({
        name,
        email,
        subject,
        message,
      })
    }
  }

  handle({ target }) {
    this.setState({
      [target.id]: target.value,
    })
  }

  addErrors({ id, type, message }) {
    this.setState({
      errors: [
        {
          id,
          type,
          message,
        },
      ],
    })
  }

  render() {
    const { isLoading, errors } = this.state

    return (
      <form>
        <FlashMessages msgs={errors} />
        <FormGroup>
          <Input
            name="name"
            id="name"
            placeholder="Seu Nome"
            onChange={this.handle}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            onChange={this.handle}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="subject"
            id="subject"
            placeholder="Assunto"
            onChange={this.handle}
          />
        </FormGroup>
        <FormGroup>
          <Textarea
            name="message"
            id="message"
            placeholder="Mensagem"
            onChange={this.handle}
          />
        </FormGroup>
        <div className="text-center">
          <button
            className="btn btn-primary"
            disabled={isLoading}
            onClick={this.onSubmit}
          >
            Enviar
          </button>
        </div>
      </form>
    )
  }
}

FormContact.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default FormContact
