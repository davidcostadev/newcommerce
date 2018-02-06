import axios from 'axios'

async function fun() {
  console.log(new Date(), 'Api Categories')

  const data = JSON.stringify({
    PE_PASSKEY: process.env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
  })

  const url = `${process.env.DOMAIN_API}/Tsvmwebsite/sp_web_website_menu_sel`

  const response = await axios.post(url, data)

  return response.data.result[0].PS_TABELA_INFO[0].TABLE_FAMILIA
}

export default fun
