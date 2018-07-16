import axios from 'axios'
import qs from 'querystring'

async function OfferRel(idOffer, filters) {
  console.log(new Date(), 'Api OfferRel')

  const query = qs.stringify({
    ...filters,
  })

  const url = `${process.env.DOMAIN_API}/offers/${idOffer}/rel?${query}`

  const { data } = await axios.get(url)

  return data.data
}

export default OfferRel
