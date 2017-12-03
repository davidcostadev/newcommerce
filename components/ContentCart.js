import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { floatToReal } from '../utils/money'
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
            <span>R$ {floatToReal(284)}</span>
          </p>
          <p className="card-text">
            <span>Frete</span>
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
