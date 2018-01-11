const routes = module.exports = require('next-routes')()

routes
  .add('index')
  .add('category', '/category/:family?/:group?/:subgroup?')
  .add('product', '/product/:slug')
  .add('search')
  .add('cart')
  .add('cart/address')
  .add('login')
  .add('dashboard')
  .add('dashboard/orders')

