import React from 'react'
import PropTypes from 'prop-types'
import { StringToReal } from '../utils/money'
import { getUrlImage } from '../utils/media'


class Product extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quant: props.product.PS_QT,
    }

    this.onDelete = this.onDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  onDelete(product) {
    this.props.deleteProduct(product.PS_ID_MOVIMENTO_CAR)
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
    const { product, deletingProduct } = this.props

    const movingId = parseInt(product.PS_ID_MOVIMENTO_CAR, 10)

    return (
      <tr>
        <td>
          <img
            src={getUrlImage(product.PS_PATH_IMAGEM_60)}
            alt={product.PS_DESCRICAO}
          />
        </td>
        <td>{product.PS_DESCRICAO}</td>
        <td>R$ {StringToReal(product.PS_VL_UNITARIO)}</td>
        <td>
          <input
            className="form-control"
            value={this.state.quant}
            onChange={this.handleChange}
            onBlur={() => this.handleBlur(product, this.props.changeQuant)}
          />
        </td>
        <td>R$ {StringToReal(product.PS_VALOR_TOTAL)}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            disabled={movingId === deletingProduct}
            onClick={() => this.onDelete(product)}
          >
            {movingId === deletingProduct ? 'removendo...' : 'remover'}
          </button>
        </td>
      </tr>
    )
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  changeQuant: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  deletingProduct: PropTypes.number.isRequired,
}

export default Product
