const nextRoutes = require('next-routes')

const routes = nextRoutes()

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
  .add('password')
  .add('dashboard')
  .add('dashboard/order', '/dashboard/order/:orderId')
  .add('dashboard/password')
  .add('dashboard/logout')

module.exports = routes

