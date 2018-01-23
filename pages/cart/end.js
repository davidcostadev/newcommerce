import React from 'react'
import PropTypes from 'prop-types'
import withRedux from 'next-redux-wrapper'
import styled from 'styled-components'
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

const Title = styled.div`
  padding: 30px;
  text-align: center;
  font-size: 38px;
`

const Hero = styled.div`
  margin-bottom: 30px;
  text-align: center;
  font-size: 26px;
  background: white;
  padding: 20px 15px;
`

const Media = styled.div`
  margin-bottom: 30px;
  font-size: 16px;
`

class CartEnd extends React.Component {
  static async getInitialProps({ req, store, isServer }) {
    const props = await Page.getInitialProps(store, req, isServer)
    return props
  }

  render() {
    const urlMeta = {
      PS_TITLE: 'Carrinho: Finalização',
      PS_DESCRIPTION: 'Carrinho finalização',
    }


    return (
      <Page {...{ urlMeta }} {...this.props}>
        <Container>
          <Title>Obrigado! Seu pedido foi efetuado com sucesso.</Title>
          <Hero>
            Seu pedido foi efetuado com sucesso e será processado em nossa loja física no
            endereço abaixo.
          </Hero>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <Media className="media">
                <div className="pull-left" href="#">
                  <i className="fa fa-home" />
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Endereço</h4>
                  <p className="endereco">
                    R. Maestro Joaquim Rangel, 849<br />
                    Alto da Boa Vista, <br />
                    Ribeirão Preto/SP, 14025-610<br />
                    (16) 3965-6742
                  </p>
                </div>
              </Media>
            </div>
          </div>
        </Container>
      </Page>
    )
  }
}

// CartEnd.propTypes = {
//   // userData: PropTypes.object.isRequired,
//   cart: PropTypes.object.isRequired,
//   cartItens: PropTypes.array.isRequired,
// }

const mapState = state => state


export default withRedux(initStore, mapState, null)(withAuth(CartEnd))

