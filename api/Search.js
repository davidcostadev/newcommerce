import axios from 'axios'
import { parsePagination } from '../utils/pagination'

async function Search(props) {
  console.log(new Date(), 'Api Search')

  const quant = props.quant ? props.quant : 21
  const page = props.page ? props.page - 1 : 0

  const data = JSON.stringify({
    PE_PASSKEY: process.env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
    PE_ID_CLIENTE: null,
    PE_PRODUTO: props.search,
    PE_ESTOQUE: 0,
    PE_QUANT_REGISTROS: quant,
    PE_PAGINA_ID: page,
    PE_COLUNA_ID: 2,
    PE_COLUNA_ORDER: 2,
  })

  try {
    const url = `${process.env.DOMAIN_API}/Tsvmwebprodutos/sp_web_busca_horizontal_sel`

    const response = await axios.post(url, data)

    if (response.data.result[0].PS_ALERTA === 206) {
      return {
        products: [],
        pagination: {
          total: 0,
          list: [],
        },
      }
    }

    return {
      products: response.data.result[0].PS_TABELA_INFO,
      pagination: parsePagination(page + 1, response.data.result[0].PS_QUANT_TOTAL_REGISTRO, quant),
    }
  } catch (e) {
    throw new Error('invalid request')
  }
}

export default Search
