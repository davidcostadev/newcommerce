import React from 'react'
import PropTypes from 'prop-types'
import { StringToReal } from '../utils/money'

const getUrlImage = url => url
  .replace('mundialsystem.com.br/images', 'winerp.com.br/images/mundial')

class Product extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quant: props.product.PS_QT,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleChange(e) {
    this.setState({
      quant: e.target.value,
    })
  }

  handleBlur(product, changeQuant) {
    const quant = this.state.quant.length && this.state.quant > 0 ? this.state.quant : 1

    this.setState({ quant })

    changeQuant(
      product.PS_ID_MOVIMENTO_CAR,
      product.PS_ID_PRODUTO,
      quant,
    )
  }

  render() {
    return (
      <tr>
        <td>
          <img
            src={getUrlImage(this.props.product.PS_PATH_IMAGEM_60)}
            alt={this.props.product.PS_DESCRICAO}
          />
        </td>
        <td>{this.props.product.PS_DESCRICAO}</td>
        <td>R$ {StringToReal(this.props.product.PS_VL_UNITARIO)}</td>
        <td>
          <input
            className="form-control"
            value={this.state.quant}
            onChange={this.handleChange}
            onBlur={() => this.handleBlur(this.props.product, this.props.changeQuant)}
          />
        </td>
        <td>R$ {StringToReal(this.props.product.PS_VALOR_TOTAL)}</td>
      </tr>
    )
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
}

export default Product
