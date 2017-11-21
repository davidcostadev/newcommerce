import axios from 'axios'
import parsePagination from '../utils/pagination'

async function Category(props) {
  console.log(new Date(), 'Api Category')

  const quant = props.quant ? props.quant : 21
  const page = props.page ? props.page - 1 : 0

  const data = JSON.stringify({
    PE_PASSKEY: 'c9b3c80c2ed263f967a4b455c6eb7d51',
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
    PE_ID_CLIENTE: null,
    PE_ID_FAMILIA: props.familyId,
    PE_ID_GRUPO: props.groupId ? props.groupId : null,
    PE_ID_SUBGRUPO: props.subGroupId ? props.subGroupId : null,
    PE_QUANT_REGISTROS: quant,
    PE_PAGINA_ID: page,
    PE_COLUNA_ID: 2,
    PE_COLUNA_ORDER: 2,
  })


  const response = await axios.post('http://186.202.64.106:8000/datasnap/rest/Tsvmwebsite/sp_web_busca_vertical_sel', data);
  console.log(response.data)
  return {
    products: response.data.result[0].PS_TABELA_INFO,
    pagination: parsePagination(page, response.data.result[0].PS_QUANT_TOTAL_REGISTRO, quant)
  }
}

export default Category
