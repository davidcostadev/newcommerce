import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { floatToReal, StringToReal } from '../utils/money'
import Table from '../layout/Table'
import theme from '../layout/theme'

const products = [
  {
    id: 1,
    image: 'http://www.winerp.com.br/images/mundial/products/45093-60-193420.jpg',
    title: '45093-Gabinete Slim DT-100BK C/Fonte PS-200 FX C3TECH S/Cabo',
    price: 284,
    quant: 2,
  },
]

const Page = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
`


const Title = styled.h1`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
`
const getUrlImage = url => url.replace('mundialsystem.com.br/images/products', 'winerp.com.br/images/mundial/products')

const Product = ({ product }) => (
  <tr>
    <td>
      <img src={getUrlImage(product.PS_PATH_IMAGEM_60)} alt={product.PS_DESCRICAO} />
    </td>
    <td>{product.PS_DESCRICAO}</td>
    <td>R$ {StringToReal(product.PS_VL_UNITARIO)}</td>
    <td>
      <input className="form-control" value={product.PS_QT} />
    </td>
    <td>R$ {StringToReal(product.PS_VALOR_TOTAL)}</td>
  </tr>
)

Product.propTypes = {
  product: PropTypes.object.isRequired,
}

const CheckoutRow = styled.div`
  display: flex;
  justify-content: space-between;

  .card {
    width: 100%;
    max-width: 250px;
  }
  .card-text {
    display: flex;
    justify-content: space-between;
  }
  button {
    width: 100%;
  }

`

const CalcShipping = styled.div`
  background: white;
  border: 1px solid ${theme.border};
  padding: 15px 20px;
  border-radius: 4px;
  max-width: 500px;

`

const Products = ({ products }) => {
  if (!products.length) {
    return (
      <tr><td colSpan="5">Nenhum produto no carrinho</td></tr>
    )
  }

  return products.map(product => (
    <Product key={product.id} product={product} />
  ))
}

const Checkout = ({ cart, cartItens }) => {
  if (!cartItens.length) {
    return null
  }

  return (
    <CheckoutRow>
      <CalcShipping>
        <p>Consulte o prazo de entrega e o frete para seu CEP:</p>
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="00000-000" />
            <span className="input-group-btn">
              <button className="btn btn-default">Calcular</button>
            </span>
          </div>
        </div>
        <div className="form-check">
          <label htmlFor="" className="form-check-label">
            <input type="radio" className="form-check-input" />
            Retirar da loja(sem frete) - Em Média 0 dia(s) úteis - R$ 0,00
        </label>
          <label htmlFor="" className="form-check-label">
            <input type="radio" className="form-check-input" />
            Retirar da loja(sem frete) - Em Média 0 dia(s) úteis - R$ 0,00
        </label>
          <label htmlFor="" className="form-check-label">
            <input type="radio" className="form-check-input" />
            Retirar da loja(sem frete) - Em Média 0 dia(s) úteis - R$ 0,00
        </label>
        </div>
      </CalcShipping>
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            <span>Subtotal</span>
            <span>R$ {StringToReal(cart.PS_VL_SUBTOTAL)}</span>
          </p>
          <p className="card-text">
            <span>Frete</span>
            <span>R$ {floatToReal(0)}</span>
          </p>
          <p className="card-text">
            <span><strong>Total</strong></span>
            <span>R$ {StringToReal(cart.PS_VL_TOTAL_GERAL)}</span>
          </p>
          <button className="btn btn-primary">Finalizar Comprar</button>
        </div>
      </div>
      </CheckoutRow>
  )

}


const ContentCart = ({ cart, cartItens }) => {
  console.log(cart)
  console.log(cartItens)
  return (
    <Page>
      <Title>Carrinho</Title>
      <Table>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Preço Unit.</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <Products products={cartItens} />
        </tbody>
      </Table>

      <Checkout cart={cart} cartItens={cartItens} />

    </Page>
  )
}

export default ContentCart
