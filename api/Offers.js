import axios from 'axios'
import qs from 'qs'

async function Offers({ limit, page }) {
  console.log(new Date(), 'Api Offers')

  const query = qs.stringify({
    idProject: process.env.PROJECT_ID,
    limit,
    page,
  })


  const url = `${process.env.DOMAIN_API}/offers?${query}`

  const { data } = await axios.get(url)

  return data.data
}

export default Offers
