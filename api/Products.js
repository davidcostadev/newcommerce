import axios from 'axios'

// record a generic message and send it to Rollbar


async function Products() {
  console.log(new Date(), 'Api Products')

  const data = JSON.stringify({
    PE_PASSKEY: process.env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
    PE_ID_CLIENTE: 0,
    PE_QUANT_REGISTROS: 4,
    PE_PAGINA_ID: 0,
    PE_COLUNA_ID: 2,
    PE_COLUNA_ORDER: 2,
  })

  const url = `${process.env.DOMAIN_API}/Tsvmwebsite/sp_web_busca_home_sel`

  const response = await axios.post(url, data)

  return response.data.result[0].PS_TABELA_INFO
}

export default Products
