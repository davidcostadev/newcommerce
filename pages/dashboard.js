import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import { initStore } from '../store'
import User from '../api/User'
import Order from '../api/Order'
import { setCart, setCartItens } from '../flux/cart/cartActions'
import withAuth from '../utils/withAuth'
import Page from '../containers/PageHOF'
import OrderTable from '../components/order/OrderTable'
import { Link } from '../routes'
import { RouterLink } from '../layout/Html'

// import ContentCart from '../components/ContentCart'
import {
  Container,
  PageContent,
  PageContentInner,
  Card,
} from '../layout/Pages'

class Dashboard extends React.Component {
  static async getInitialProps({ req, store, isServer }) {
    const props = await Page.getInitialProps(store, req, isServer)
    // console.log(props)

    const { user } = props

    const userFull = await Dashboard.getUser(user)
    const orders = await Dashboard.getOrders(user)

    const urlMeta = {
      PS_TITLE: 'Dashboard',
      PS_DESCRIPTION: 'Dashboard',
    }

    return {
      ...props,
      userFull,
      orders,
      urlMeta,
    }
  }

  static async getUser(user) {
    try {
      const env = {
        PASSKEY: process.env.PASSKEY,
        DOMAIN_API: process.env.DOMAIN_API,
      }

      const userFull = await User.get(env, axios.post, user.PS_ID_CADASTRO)

      return userFull
    } catch (e) {
      console.error(e)
    }

    return null
  }

  static async getOrders(user) {
    try {
      const env = {
        PASSKEY: process.env.PASSKEY,
        DOMAIN_API: process.env.DOMAIN_API,
      }

      const userFull = await Order.get(env, axios.post, {
        userId: user.PS_ID_CADASTRO,
      })
      console.log(userFull)

      return userFull
    } catch (e) {
      console.error(e)
    }

    return null
  }

  render() {
    const { userFull, orders } = this.props

    const urlId = userFull.user_id
    const imageId = userFull.image_id

    const url = `http://www.winerp.com.br/images/mundial/customers/${urlId}-255-${imageId}.jpg`

    return (
      <Page {...this.props}>
        <Container>
          <PageContent>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-lg-3 col-lg-pull-9 ">
                <p className="text-center">
                  <img
                    src={url}
                    alt="imagem do perfil"
                    className="img-thumbnail"
                    style={{ width: '263px' }}
                  />
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-lg-9 col-lg-push-3">
                <div className="navbar navbar-light bg-light navbar-expand-lg">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link route="dashboard">
                        <RouterLink className="nav-link">Inicio</RouterLink>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link route="dashboard/password">
                        <RouterLink className="nav-link">Minha Senha</RouterLink>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link route="dashboard/logout">
                        <RouterLink className="nav-link">Sair</RouterLink>
                      </Link>
                    </li>
                  </ul>
                </div>
                <PageContentInner>
                  <Card className="card">
                    <div className="card-body">
                      <div className="card-title">
                        <h4>{userFull.name}</h4>
                      </div>
                      <address>
                        {userFull.email}
                        <br /> {userFull.address}, {userFull.adress_number}
                        <br /> {userFull.address_city}/{userFull.address_state}
                        <br />
                      </address>
                    </div>
                  </Card>
                </PageContentInner>
              </div>
            </div>

            <Card className="card">
              <div className="card-body">
                <div className="card-title">
                  <h4>Últimos pedidos</h4>
                </div>
              </div>
              <OrderTable orders={orders} />
            </Card>
          </PageContent>
        </Container>
      </Page>
    )
  }
}


Dashboard.propTypes = {
  userFull: PropTypes.object.isRequired,
  orders: PropTypes.array.isRequired,
}

const mapState = state => state


const mapDispatchToProps = dispatch => ({
  setCart: bindActionCreators(setCart, dispatch),
  setCartItens: bindActionCreators(setCartItens, dispatch),
})


export default withRedux(initStore, mapState, mapDispatchToProps)(withAuth(Dashboard))
