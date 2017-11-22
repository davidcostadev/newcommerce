
import ApiSearch from '../../api/Search'


describe('Chatbot', () => {
  it('returns data when sendMessage is called', (done) => {
    try {
      ApiSearch({ search: 'notebook' }).then((response) => {
        expect(response).toHaveProperty('products')
        expect(response).toHaveProperty('pagination')
        done()
      })
    } catch (e) {
      expect(e).toMatch('error')
    }
  })
})
