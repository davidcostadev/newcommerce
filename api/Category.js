import axios from 'axios'
import { getSort, getColumn, parsePagination } from '../utils/pagination'


const filterPropSort = (sort) => {
  if (typeof sort === 'undefined') {
    return {
      sort: getSort('asc'),
      column: getColumn('name'),
    }
  }

  return {
    sort: getSort(sort.split('.')[1]),
    column: getColumn(sort.split('.')[0]),
  }
}
async function Category(props) {
  console.log(new Date(), 'Api Category')

  const quant = props.quant ? props.quant : 21
  const page = props.page ? props.page - 1 : 0
  const { sort, column } = filterPropSort(props.sort)

  const data = JSON.stringify({
    PE_PASSKEY: process.env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
    PE_ID_CLIENTE: null,
    PE_ID_FAMILIA: props.familyId,
    PE_ID_GRUPO: props.groupId ? props.groupId : null,
    PE_ID_SUBGRUPO: props.subGroupId ? props.subGroupId : null,
    PE_QUANT_REGISTROS: quant,
    PE_PAGINA_ID: page,
    PE_COLUNA_ID: column,
    PE_COLUNA_ORDER: sort,
  })


  const response = await axios.post(`${process.env.DOMAIN_API}/Tsvmwebsite/sp_web_busca_vertical_sel`, data)

  return {
    products: response.data.result[0].PS_TABELA_INFO,
    pagination: parsePagination(page + 1, response.data.result[0].PS_QUANT_TOTAL_REGISTRO, quant),
  }
}

export default Category
