import axios from 'axios'

async function Product(productId) {
  console.log(new Date(), 'Api Product');


  const data = JSON.stringify({
    PE_PASSKEY: 'c9b3c80c2ed263f967a4b455c6eb7d51',
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
    PE_ID_CLIENTE: null,
    PE_ID_PRODUTO: productId
  });

  // console.log(data);

  const response = await axios.post('http://186.202.64.106:8000/datasnap/rest/Tsvmwebsite/sp_web_busca_landingpage_sel', data)


  return {
    product: response.data.result[0].PS_TABELA_INFO[0],
    images: response.data.result[0].PS_IMAGENS_PRODUTO,
    products: response.data.result[0].PS_PRODUTOS_RELACIONADOS,
  }
}

export default Product
