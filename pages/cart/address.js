import React from 'react'
import withRedux from 'next-redux-wrapper'
import axios from 'axios'
import User from '../../api/User'
import { initStore } from '../../store'
import Page from '../../containers/PageHOF'
import { Container } from '../../layout/Pages'
import * as Cart from '../../layout/Cart'
import FormGroup from '../../components/form/FormGroup'
import Input from '../../components/form/Input'
import withAuth from '../../utils/withAuth'
import StateSelect from '../../components/form/StateList'

class CartAddress extends React.Component {
  static async getInitialProps({ req, store, isServer }) {
    const { sessionId } = await Page.getInitialProps(store, req, isServer)

    const { user } = store.getState()

    const userData = await CartAddress.getUser(user.PS_ID_CADASTRO)

    const urlMeta = {
      PS_TITLE: 'Carrinho: Endereço',
      PS_DESCRIPTION: 'Carrinho de Compra de Endereço',
    }

    return {
      // cartId,
      userData,
      sessionId,
      urlMeta,
      // cart,
      // cartItens,
      // setCart,
      // setCartItens,
    }
  }

  static async getUser(userId) {
    const env = {
      PASSKEY: process.env.PASSKEY,
      DOMAIN_API: process.env.DOMAIN_API,
    }

    const user = await User.get(env, axios.post, userId)

    return user
  }

  constructor(props) {
    super(props)

    this.save = this.save.bind(this)
    this.handle = this.handle.bind(this)

    const { userData } = props


    this.state = {
      fullname: userData.PS_NOME,
      phone: userData.PS_FONE_PRINCIPAL,
      cep: userData.PS_CEP,
      address: userData.PS_ENDERECO,
      number: userData.PS_ENDERECO_NUMERO,
      complement: userData.PS_COMPLEMENTO,
      neighborhood: userData.PS_BAIRRO,
      city: userData.PS_CIDADE,
      state: userData.PS_UF,
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

    console.log(this.state)
  }

  render() {
    const {
      fullname,
      phone,
      cep,
      address,
      number,
      complement,
      neighborhood,
      city,
      state,
    } = this.state

    return (
      <Page {...this.props}>
        <Container>
          <Cart.Title>Dados de Endereço</Cart.Title>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form onSubmit={this.save}>
                <Cart.Box className="card">
                  <div className="card-body">
                    <h5 className="card-title">Dados Pessoais</h5>
                    <FormGroup row>
                      <label htmlFor="fullname" className="col-sm-3 col-form-label">Nome Completo*</label>
                      <div className="col-sm-9">
                        <Input
                          id="fullname"
                          placeholder="Seu Nome"
                          value={fullname}
                          onChange={this.handle}
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <label htmlFor="phone" className="col-sm-3 col-form-label">Celular*</label>
                      <div className="col-sm-9">
                        <Input
                          id="phone"
                          value={phone}
                          placeholder="Seu Celular"
                          onChange={this.handle}
                        />
                      </div>
                    </FormGroup>
                  </div>
                </Cart.Box>
                <Cart.Box className="card">
                  <div className="card-body">
                    <h4 className="card-title">Informações de endereço</h4>
                    <div className="form-group row">
                      <label htmlFor="cep" className="col-sm-3 col-form-label">CEP*</label>
                      <div className="col-sm-9">
                        <Input
                          id="cep"
                          value={cep}
                          placeholder="000-00000"
                          onChange={this.handle}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="phone" className="col-sm-3 col-form-label">Endereço*</label>
                      <div className="col-sm-9">
                        <Input
                          id="address"
                          value={address}
                          placeholder="Seu Endereço"
                          onChange={this.handle}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="number" className="col-sm-3 col-form-label">Número*</label>
                      <div className="col-sm-9">
                        <Input
                          id="number"
                          value={number}
                          placeholder="Número do endereço"
                          onChange={this.handle}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="complemento" className="col-sm-3 col-form-label">Complemento*</label>
                      <div className="col-sm-9">
                        <Input
                          id="complement"
                          value={complement}
                          placeholder="Complemento"
                          onChange={this.handle}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="bairro" className="col-sm-3 col-form-label">Bairro*</label>
                      <div className="col-sm-9">
                        <Input
                          id="neighborhood"
                          value={neighborhood}
                          placeholder="Bairro"
                          onChange={this.handle}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="city" className="col-sm-3 col-form-label">Cidade*</label>
                      <div className="col-sm-9">
                        <Input
                          id="city"
                          value={city}
                          placeholder="Cidade"
                          onChange={this.handle}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="state" className="col-sm-3 col-form-label">Estado*</label>
                      <div className="col-sm-9">
                        <StateSelect
                          id="state"
                          value={state}
                          onChange={this.handle}
                        />
                      </div>
                    </div>
                  </div>
                </Cart.Box>
                <p className="text-center">
                  <button className="btn btn-primary btn-lg">Continuar</button>
                </p>
              </form>
            </div>
          </div>
        </Container>
      </Page>
    )
  }
}


const mapState = state => state


// const mapDispatchToProps = dispatch => ({
//   setCart: bindActionCreators(setCart, dispatch),
//   setCartItens: bindActionCreators(setCartItens, dispatch),
// })


export default withRedux(initStore, mapState, null)(withAuth(CartAddress))
// export default withRedux(initStore, mapState, null)(withAuth(Login))

