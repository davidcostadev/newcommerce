/* eslint no-undef: "off" */
import { getUrlImage } from '../../utils/media'

describe('should work', () => {
  it('in replace this string for a env param', () => {
    process.env.IMAGE_BASE = 'http://dominio.com/images/'

    const original = 'http://www.mundialsystem.com.br/images/products/imagem---34834-60-175143.jpg'
    const expected = `${process.env.IMAGE_BASE}products/imagem---34834-60-175143.jpg`

    expect(getUrlImage(original))
      .toBe(expected)
  })
})
