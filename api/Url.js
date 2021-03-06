import axios from 'axios'

async function Url(query) {
  console.log(new Date(), 'Api Url')

  const slug = []

  if (query.family) {
    slug.push(query.family)
  }
  if (query.group) {
    slug.push(query.group)
  }
  if (query.subgroup) {
    slug.push(query.subgroup)
  }
  if (query.slug) {
    slug.push(query.slug)
  }

  const data = JSON.stringify({
    PE_PASSKEY: process.env.PASSKEY,
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
    PE_ID_CLIENTE: null,
    PE_PAGENAME: slug.join('/'),
  })

  try {
    const url = `${process.env.DOMAIN_API}/Tsvmwebsite/sp_website_url_sel`

    const response = await axios.post(url, data)

    if (response.data.result[0].PS_ALERTA !== 7) {
      throw response.data.result[0]
    }

    return response.data.result[0].PS_TABELA_INFO[0]
  } catch (e) {
    throw e
  }
}

export default Url
