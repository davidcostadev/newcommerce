import axios from 'axios'

async function ProductImages(idProduct) {
  console.log(new Date(), 'Api ProductImages')

  const url = `${process.env.DOMAIN_API}/products/${idProduct}/images`

  const { data } = await axios.get(url)

  return data.data
}

export default ProductImages
