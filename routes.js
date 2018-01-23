const routes = module.exports = require('next-routes')()

routes
  .add('index')
  .add('category', '/category/:family?/:group?/:subgroup?')
  .add('product', '/product/:slug')
  .add('search')
  .add('cart')
  .add('cart/address')
  .add('cart/payment')
  .add('cart/end', '/cart/end/:orderId')
  .add('login')
  .add('dashboard')
  .add('dashboard/orders')

