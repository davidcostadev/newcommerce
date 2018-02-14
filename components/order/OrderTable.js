import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../../routes'
import { RouterLink } from '../../layout/Html'
import { StringToReal } from '../../utils/money'

const Table = ({ orders }) => (
  <table cellSpacing="0" className="table table-hover table-hover-link">
    <thead>
      <tr>
        <th>#</th>
        <th>Criação</th>
        <th>Quant.</th>
        <th>Valor Total</th>
        <th style={{ width: '150px' }} >Status Pedido</th>
        <th style={{ width: '150px' }} >Status Financeiro</th>
        <th style={{ width: '150px' }} >Status Estrega</th>
        <th style={{ width: '110px' }} />
      </tr>
    </thead>
    <TableBody orders={orders} />
  </table>
)


Table.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    PS_ID_PEDIDO: PropTypes.string.isRequired,
    PS_QT_VOLUME: PropTypes.string.isRequired,
    PS_VL_TTL_PEDIDO: PropTypes.string.isRequired,
    PS_STATUS_PEDIDO: PropTypes.string.isRequired,
    PS_STATUS_FINANCEIRO: PropTypes.string.isRequired,
    PS_STATUS_ENTREGA: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

const TableItem = ({ order }) => (
  <tr>
    <td>
      <Link route="dashboard/order" params={{ orderId: order.PS_ID_PEDIDO }}>
        <RouterLink>{order.PS_ID_PEDIDO}</RouterLink>
      </Link>
    </td>
    <td>{order.PS_DATADOCADASTRO}</td>
    <td>{order.PS_QT_VOLUME}</td>
    <td>R$ {StringToReal(order.PS_VL_TTL_PEDIDO)}</td>
    <td>{order.PS_STATUS_PEDIDO}</td>
    <td>{order.PS_STATUS_FINANCEIRO}</td>
    <td>{order.PS_STATUS_ENTREGA}</td>
    <td>
      <Link route="dashboard/order" params={{ orderId: order.PS_ID_PEDIDO }}>
        <RouterLink>Ver Pedido</RouterLink>
      </Link>
    </td>
  </tr>
)

TableItem.propTypes = {
  order: PropTypes.shape({
    PS_ID_PEDIDO: PropTypes.string.isRequired,
    PS_QT_VOLUME: PropTypes.string.isRequired,
    PS_VL_TTL_PEDIDO: PropTypes.string.isRequired,
    PS_STATUS_PEDIDO: PropTypes.string.isRequired,
    PS_STATUS_FINANCEIRO: PropTypes.string.isRequired,
    PS_STATUS_ENTREGA: PropTypes.string.isRequired,
  }).isRequired,
}


const TableBody = ({ orders }) => {
  if (!orders.length) {
    return (
      <tbody>
        <tr>
          <td className="text-center" colSpan="4">
            Nenhum pedido foi encontrado
          </td>
        </tr>
      </tbody>
    )
  }


  const list = orders.map(order => (
    <TableItem
      key={order.PS_ID_PEDIDO}
      order={order}
    />
  ))
  return (
    <tbody>
      {list}
    </tbody>
  )
}

TableBody.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    PS_ID_PEDIDO: PropTypes.string.isRequired,
    PS_QT_VOLUME: PropTypes.string.isRequired,
    PS_VL_TTL_PEDIDO: PropTypes.string.isRequired,
    PS_STATUS_PEDIDO: PropTypes.string.isRequired,
    PS_STATUS_FINANCEIRO: PropTypes.string.isRequired,
    PS_STATUS_ENTREGA: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}


export default Table
