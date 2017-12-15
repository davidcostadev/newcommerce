import axios from 'axios'

async function Product(productId) {
  console.log(new Date(), 'Api Product')

  const data = JSON.stringify({
    PE_PASSKEY: process.env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
    PE_ID_CLIENTE: null,
    PE_ID_PRODUTO: productId,
  })

  const response = await axios.post(`${process.env.DOMAIN_API}/Tsvmwebsite/sp_web_busca_landingpage_sel`, data)

  return {
    product: response.data.result[0].PS_TABELA_INFO[0],
    images: response.data.result[0].PS_IMAGENS_PRODUTO,
    products: response.data.result[0].PS_PRODUTOS_RELACIONADOS,
  }
}

export default Product
