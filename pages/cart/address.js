import React from 'react'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../../store'
import Page from '../../containers/PageHOF'
import { Container } from '../../layout/Pages'
import * as Cart from '../../layout/Cart'
import FormGroup from '../../components/form/FormGroup'
import Input from '../../components/form/Input'
import withAuth from '../../utils/withAuth'

class CartAddress extends React.Component {
  static async getInitialProps({ req, store, isServer }) {
    const { sessionId } = await Page.getInitialProps(store, req, isServer)

    // const cartId = Page.getCartId(store, req, isServer)
    // const { cart, cartItens } = await Cart.getCart(store, cartId, sessionId)

    const urlMeta = {
      PS_TITLE: 'Carrinho: Endereço',
      PS_DESCRIPTION: 'Carrinho de Compra de Endereço',
    }

    return {
      // cartId,
      sessionId,
      urlMeta,
      // cart,
      // cartItens,
      // setCart,
      // setCartItens,
    }
  }

  constructor(props) {
    super(props)

    this.save = this.save.bind(this)
    this.handle = this.handle.bind(this)

    this.state = {
      fullname: 'David Santana Costa',
      phone: '',
      cep: '',
      address: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
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

  // static async getCart(store, cartId, sessionId) {
  //   // console.log('getCart')
  //   // const state = store.getState()

  //   // if (state.cartItens.length) {
  //   //   return {
  //   //     cart: state.cart,
  //   //     cartItens: state.cartItens,
  //   //   }
  //   // }


  //   // const { cart, cartItens } = await getCart({
  //   //   cartId,
  //   //   sessionId,
  //   // })

  //   // store.dispatch(setCart(cart))
  //   // store.dispatch(setCartItens(cartItens))

  //   return {
  //     // cart,
  //     // cartItens,
  //   }
  // }

  // async changeQuant(movimentCartId, productId, quant) {
  //   // console.log('changeQuant', movimentCartId, productId)
  //   // console.log(this)

  //   // const { cart, cartItens } = await changeQuant({
  //   //   cartId: this.props.cartId,
  //   //   sessionId: this.props.sessionId,
  //   //   movimentCartId,
  //   //   productId,
  //   //   quant,
  //   // })

  //   // console.log(cart, cartItens)

  //   // this.props.setCart(cart)
  //   // this.props.setCartItens(cartItens)
  // }

  render() {
    const {
      fullname,
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
                          placeholder="Cidade"
                          onChange={this.handle}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label htmlFor="state" className="col-sm-3 col-form-label">Estado*</label>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="state" placeholder="Estado" />
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

