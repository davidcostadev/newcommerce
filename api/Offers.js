import axios from 'axios'
import qs from 'qs'

async function Offers(filters) {
  console.log(new Date(), 'Api Offers')

  const query = qs.stringify({
    idProject: process.env.PROJECT_ID,
    ...filters,
  })


  const url = `${process.env.DOMAIN_API}/offers?${query}`

  const { data } = await axios.get(url)

  if (typeof filters.limit !== 'undefined' && filters.limit === 1) {
    if (data.data.length) {
      return data.data[0]
    }
  }
  return data.data
}

export default Offers
