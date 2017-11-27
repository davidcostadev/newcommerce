import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { floatToReal } from '../utils/money'
import Table from '../layout/Table'


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

const Product = ({ product }) => (
  <tr>
    <td>
      <img src={product.image} alt={product.title} />
    </td>
    <td>{product.title}</td>
    <td>R$ {floatToReal(product.price)}</td>
    <td>
      <input className="form-control" value={product.quant} />
    </td>
    <td>R$ {floatToReal(product.quant * product.price)}</td>
  </tr>
)

Product.propTypes = {
  product: PropTypes.object.isRequired,
}

const CheckoutRow = styled.div`
  background: white;
  display: flex;
  justify-content: flex-end;

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


const ContentCart = () => (
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
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </tbody>
    </Table>

    <CheckoutRow>
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            <span>Subtotal</span>
            <span>R$ {floatToReal(284)}</span>
          </p>
          <p className="card-text">
            <span><strong>Total</strong></span>
            <span>R$ {floatToReal(284)}</span>
          </p>
          <button className="btn btn-primary">Finalizar Comprar</button>
        </div>
      </div>
    </CheckoutRow>
  </Page>
)

export default ContentCart
