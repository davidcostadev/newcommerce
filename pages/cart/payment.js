import React from 'react'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import axios from 'axios'
import styled from 'styled-components'
import jsCookie from 'js-cookie'
import { bindActionCreators } from 'redux'
import Router from 'next/router'
import { setCart, setCartItens } from '../../flux/cart/cartActions'
import { initStore } from '../../store'
import Page from '../../containers/PageHOF'
import TableProducts from '../../components/product/TableProducts'
import WayPayment from '../../components/product/WayPayment'
import WayDelivery from '../../components/product/WayDelivery'
import { Container } from '../../layout/Pages'
import * as Cart from '../../layout/Cart'
import { floatToReal, StringToReal } from '../../utils/money'
import { closeCart } from '../../api/Cart'
import withAuth from '../../utils/withAuth'

const PagePayment = styled.form`
  margin-bottom: 30px;
`

class CartPayment extends React.Component {
  static async getInitialProps({ req, store, isServer }) {
    const { sessionId, cartId } = await Page.getInitialProps(store, req, isServer)

    const { cart, cartItens } = store.getState()

    return {
      cartId,
      sessionId,
      cart,
      cartItens,
    }
  }

  constructor(props) {
    super(props)

    this.save = this.save.bind(this)
    this.handle = this.handle.bind(this)

    this.changeWayPayment = this.changeWayPayment.bind(this)
    this.changeWayDelivery = this.changeWayDelivery.bind(this)

    this.state = {
      paymentId: 1,
      deliveryId: 1,
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


    this.setState({ isLoading: true })
    this.closeCart()
    this.setState({ isLoading: false })
  }

  changeWayPayment(id) {
    this.setState({
      paymentId: id,
    })
  }

  changeWayDelivery(id) {
    this.setState({
      deliveryId: id,
    })
  }

  async closeCart() {
    const {
      paymentId,
      deliveryId,
    } = this.state

    this.props.setCart({})
    this.props.setCartItens([])

    jsCookie.set('cartId', null)

    try {
      const env = {
        PASSKEY: process.env.PASSKEY,
        DOMAIN_API: process.env.DOMAIN_API,
      }
      const data = {
        cartId: this.props.cart.PS_ID_CARRINHO,
        userId: this.props.user.PS_ID_CADASTRO,
        deliveryId,
        paymentId,
      }
      const cart = await closeCart(env, axios.post, data)

      Router.replace(`/cart/end/${cart.PS_ID_CADASTRO}`)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {
      paymentId,
      deliveryId,
      isLoading,
    } = this.state

    const {
      cart,
      cartItens,
    } = this.props

    const urlMeta = {
      PS_TITLE: 'Carrinho: Finalização',
      PS_DESCRIPTION: 'Carrinho finalização',
    }


    return (
      <Page {...{ urlMeta }} {...this.props}>
        <Container>
          <Cart.Title>Finalização</Cart.Title>
          <PagePayment onSubmit={this.save}>
            <div className="row">
              <div className="col-md-12">
                <TableProducts
                  products={cartItens}
                />
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-6">
                        <h4>Pagamento</h4>
                        <WayPayment
                          paymentDefault={paymentId}
                          onClick={this.changeWayPayment}
                        />
                        <h4>Meio de Entrega</h4>
                        <WayDelivery
                          deliveryDefault={deliveryId}
                          onClick={this.changeWayDelivery}
                        />
                      </div>
                      <div className="col-sm-6">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>Subtotal</td>
                              <td>R$ {StringToReal(cart.PS_VL_SUBTOTAL)}</td>
                            </tr>
                            <tr>
                              <td>Frete</td>
                              <td>R$ {floatToReal(0)}</td>
                            </tr>
                            <tr>
                              <td>Total</td>
                              <td>R$ {StringToReal(cart.PS_VL_TOTAL_GERAL)}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    <button
                      className="btn btn-primary btn-lg"
                      disabled={isLoading}
                      onClick={this.save}
                    >
                      Finalizar Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </PagePayment>
        </Container>
      </Page>
    )
  }
}

CartPayment.propTypes = {
  user: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
  setCartItens: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,
  cartItens: PropTypes.array.isRequired,
}

const mapState = state => state

const mapDispatchToProps = dispatch => ({
  setCart: bindActionCreators(setCart, dispatch),
  setCartItens: bindActionCreators(setCartItens, dispatch),
})


export default withRedux(initStore, mapState, mapDispatchToProps)(withAuth(CartPayment))

