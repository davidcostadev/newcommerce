
import ApiSearch from '../../api/Search'


describe('ApiChat', () => {
  it('Data notebook', (done) => {
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

  it('Data empty', (done) => {
    try {
      ApiSearch({ search: 'asd' }).then((response) => {
        expect(response).toHaveProperty('products')
        expect(response).toHaveProperty('pagination')
        expect(response.pagination.total).toBe(0)
        done()
      })
    } catch (e) {
      expect(e).toMatch('error')
    }
  })
})
