import React from 'react'
import PropTypes from 'prop-types'
import { StringToReal } from '../../utils/money'
import { getUrlImage } from '../../utils/media'
import Table from '../../layout/Table'

const TableBlock = ({ products }) => (
  <Table className="table">
    <thead>
      <tr>
        <th>images</th>
        <th>producto</th>
        <th>Val. Unitario</th>
        <th>Quant</th>
        <th>Val. Total</th>
      </tr>
    </thead>
    <tbody>
      <TableList products={products} />
    </tbody>
  </Table>
)

TableBlock.propTypes = {
  products: PropTypes.array.isRequired,
}

const TableItem = ({ product }) => (
  <tr>
    <td>
      <img
        src={getUrlImage(product.PS_PATH_IMAGEM_60)}
        alt={product.PS_DESCRICAO}
      />
    </td>
    <td>{product.PS_DESCRICAO}</td>
    <td>R$ {StringToReal(product.PS_VL_UNITARIO)}</td>
    <td>{product.PS_QT}</td>
    <td><strong>R$ {StringToReal(product.PS_VALOR_TOTAL)}</strong></td>
  </tr>
)

TableItem.propTypes = {
  product: PropTypes.shape({
    PS_PATH_IMAGEM_60: PropTypes.string.isRequired,
    PS_VL_UNITARIO: PropTypes.string.isRequired,
    PS_QT: PropTypes.string.isRequired,
    PS_VALOR_TOTAL: PropTypes.string.isRequired,
  }).isRequired,
}

const TableList = ({ products }) => {
  if (!products.length) {
    return (
      <tr>
        <td>Nenhum produto na lista</td>
      </tr>
    )
  }
  // console.log(products)

  return products.map(product => (
    <TableItem key={product.PS_ID_MOVIMENTO_CAR} product={product} />
  ))
}

TableList.propTypes = {
  products: PropTypes.array.isRequired,
}

export default TableBlock
