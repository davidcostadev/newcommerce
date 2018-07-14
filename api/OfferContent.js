import axios from 'axios'

async function OfferContent(idOffer) {
  console.log(new Date(), 'Api OfferContent')

  const url = `${process.env.DOMAIN_API}/offers/${idOffer}/content`

  const { data } = await axios.get(url)

  if (data.data.length) {
    return data.data[0]
  }
}

export default OfferContent
