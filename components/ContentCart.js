import React from 'react'
// import PropTypes from 'prop-types'
import Router from 'next/router'
import { floatToReal, StringToReal } from '../utils/money'
import ProductCart from '../components/ProductCart'
import Table from '../layout/Table'
import * as Cart from '../layout/Cart'
import { Link } from '../routes'

const Products = ({ products, changeQuant }) => {
  if (!products.length) {
    return (
      <tr><td colSpan="5">Nenhum produto no carrinho</td></tr>
    )
  }

  return products.map(product => (
    <ProductCart key={product.PS_ID_PRODUTO} product={product} changeQuant={changeQuant} />
  ))
}

const Checkout = ({ cart, cartItens }) => {
  if (!cartItens.length) {
    return null
  }

  return (
    <Cart.CheckoutRow>
      {/* <Cart.CalcShipping>
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
      </Cart.CalcShipping> */}
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
          <Link route="/cart/address">
            <button className="btn btn-primary">Finalizar Comprar</button>
          </Link>
        </div>
      </div>
    </Cart.CheckoutRow>
  )
}


const ContentCart = ({ cart, cartItens, changeQuant }) => {
  return (
    <Cart.Page>
      <Cart.Title>Carrinho</Cart.Title>
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
          <Products products={cartItens} changeQuant={changeQuant} />
        </tbody>
      </Table>
      <Checkout cart={cart} cartItens={cartItens} />
    </Cart.Page>
  )
}

export default ContentCart
