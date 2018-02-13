export const getUrlImage = url => url
  .replace('http://www.mundialsystem.com.br/images/', process.env.IMAGE_BASE)

export default getUrlImage
