import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import shortid from 'shortid'
import { Link } from '../../routes'
import { RouterLink } from '../../layout/Html'
import InputFormGroup from '../../components/form/InputFormGroup'
import RadioFormGroup from '../../components/form/RadioFormGroup'
import User from '../../api/User'
import { FlashMessages } from '../page/FlashMessage'
import env from '../../utils/env'

class FormSignUpWholesale extends React.Component {
  static formartPhone(value) {
    if (value.replace(/\D/ig, '').length === 11) {
      return '(99) 99999-9999'
    }
    if (value.replace(/\D/ig, '').length === 10) {
      return '(99) 9999-99999'
    }

    return '(99) 9999-9999'
  }

  constructor(props) {
    super(props)

    this.save = this.save.bind(this)
    this.handle = this.handle.bind(this)

    this.state = {
      name: '', // pf
      cpf: '', // pf
      rg: '', // pf
      fantasy_name: '', // pj
      social_name: '', // pj
      cnpj: '', // pj
      insc_state: '', // pj
      cep: '',
      address: '',
      address_number: '',
      address_city: '',
      address_neighborhood: '',
      address_state: '',
      phone_main: '',
      phone_mobile: '',
      email: '',
      password: '',
      password_confirm: '',
      isLoading: false,
      success: false,
      // errors: [],
    }
  }

  handle({ target }) {
    this.setState({
      [target.id]: target.value,
    })
  }

  async save(e) {
    e.preventDefault()

    let { name } = this.state

    if (!name.length) {
      name = this.state.fantasy_name
    }

    let typeId = 2

    if (this.props.type === 'pf') {
      typeId = 1
    }

    this.setState({ isLoading: true })

    if (!this.state.email.length || !this.state.password.length) {
      this.addErrors({
        type: 'danger',
        message: 'Por favor preencha seu email e senha corretamente',
      })
    } else if (this.state.password !== this.state.password_confirm) {
      this.addErrors({
        type: 'danger',
        message: 'Por favor preencha seu as senhas não conferem',
      })
    } else {
      try {
        const user = await User.create(env, axios.post, {
          type: this.props.type,
          type_id: typeId,
          name, // pf
          cpf: this.state.cpf, // pf
          rg: this.state.rg, // pf
          fantasy_name: this.state.fantasy_name, // pf
          social_name: this.state.social_name, // pf
          cnpj: this.state.cnpj, // pf
          insc_state: this.state.insc_state, // pf
          cep: this.state.cep,
          address: this.state.address,
          address_number: this.state.address_number,
          address_city: this.state.address_city,
          address_neighborhood: this.state.address_neighborhood,
          address_state: this.state.address_state,
          phone_main: this.state.phone_main,
          phone_mobile: this.state.phone_mobile,
          email: this.state.email,
          password: this.state.password,
          password_confirm: this.state.password_confirm,
        })

        console.log('return', user)
        this.setState({ success: true })
      } catch (error) {
        console.log('error', error)

        this.addErrors({
          type: 'danger',
          message: 'Não foi possivel fazer o cadastro',
        })
      }
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
    const {
      isLoading,
      errors,
      success,
    } = this.state
    let FormInputs = null

    if (success) {
      const message = [
        {
          id: 1,
          type: 'success',
          message: `Um email foi encaminhado para sua endereço de email e
            siga as instrução contida nele.`,
        },
      ]

      return (
        <FlashMessages msgs={message} />
      )
    }

    if (this.props.type === 'pf') {
      FormInputs = (
        <div>
          <InputFormGroup
            id="name"
            label="Seu nome"
            value={this.state.name}
            onChange={this.handle}
          />
          <InputFormGroup
            id="cpf"
            label="Seu cpf"
            value={this.state.cpf}
            onChange={this.handle}
            mask="999.999.999-99"
          />
          <InputFormGroup
            id="rg"
            type="number"
            label="Seu RG"
            value={this.state.rg}
            onChange={this.handle}
          />
        </div>
      )
    } else {
      FormInputs = (
        <div>
          <InputFormGroup
            id="fantasy_name"
            label="Nome Fantasia"
            value={this.state.fantasy_name}
            onChange={this.handle}
          />
          <InputFormGroup
            id="social_name"
            label="Rasao Social"
            value={this.state.social_name}
            onChange={this.handle}
          />
          <InputFormGroup
            id="cnpj"
            label="CNPJ"
            value={this.state.cnpj}
            onChange={this.handle}
            mask="999.999.999/9999-99"
          />
          <InputFormGroup
            id="insc_state"
            label="Inscrição Estadual"
            value={this.state.insc_state}
            onChange={this.handle}
          />
        </div>
      )
    }

    return (
      <form className="form" onSubmit={this.save}>
        <FlashMessages msgs={errors} />
        <RadioFormGroup
          id="gender"
          label="Tipo de pessoa"
          onChange={this.props.changeTypePerson}
          value={this.props.type}
          radios={[
            {
              label: 'Pessoa Física',
              value: 'pf',
            },
            {
              label: 'Pessoa Juridica',
              value: 'pj',
            },
          ]}
        />
        {FormInputs}

        <InputFormGroup
          id="cep"
          label="CEP"
          value={this.state.cep}
          onChange={this.handle}
          mask="99999-999"
        />
        <InputFormGroup
          id="address"
          label="Endereço"
          value={this.state.address}
          onChange={this.handle}
        />
        <InputFormGroup
          id="address_number"
          label="Número"
          value={this.state.address_number}
          onChange={this.handle}
        />
        <InputFormGroup
          id="address_city"
          label="Cidade"
          value={this.state.address_city}
          onChange={this.handle}
        />
        <InputFormGroup
          id="address_neighborhood"
          label="Bairro"
          value={this.state.address_neighborhood}
          onChange={this.handle}
        />
        <InputFormGroup
          id="address_state"
          label="Estado"
          value={this.state.address_state}
          onChange={this.handle}
        />
        <InputFormGroup
          id="phone_main"
          label="Telefone"
          value={this.state.phone_main}
          onChange={this.handle}
          mask={FormSignUpWholesale.formartPhone(this.state.phone_main)}
          maskChar=" "
        />
        <InputFormGroup
          id="phone_mobile"
          label="Celular"
          value={this.state.phone_mobile}
          onChange={this.handle}
          mask={FormSignUpWholesale.formartPhone(this.state.phone_mobile)}
          maskChar=" "
        />
        <InputFormGroup
          id="email"
          label="Email"
          value={this.state.email}
          onChange={this.handle}
        />
        <InputFormGroup
          id="password"
          label="Senha"
          value={this.state.password}
          onChange={this.handle}
        />
        <InputFormGroup
          id="password_confirm"
          label="Confirme sua Senha"
          value={this.state.password_confirm}
          onChange={this.handle}
        />
        <div className="d-flex justify-content-between">
          <Link to="/">
            <RouterLink href="/">Voltar</RouterLink>
          </Link>
          <button className="btn btn-primary" disabled={isLoading}>Cadastrar</button>
        </div>
      </form>
    )
  }
}

FormSignUpWholesale.propTypes = {
  type: PropTypes.string,
  changeTypePerson: PropTypes.func.isRequired,
}

FormSignUpWholesale.defaultProps = {
  type: 'pf',
}


export default FormSignUpWholesale
