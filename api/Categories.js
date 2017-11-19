import axios from 'axios'

async function fun() {
  console.log(new Date(), 'Api Categories')

  const data = JSON.stringify({
    PE_PASSKEY: 'c9b3c80c2ed263f967a4b455c6eb7d51',
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
  })

  const response = await axios.post('http://186.202.64.106:8000/datasnap/rest/Tsvmwebsite/sp_web_website_menu_sel', data);
  return response.data.result[0].PS_TABELA_INFO[0].TABLE_FAMILIA
}

export default fun
