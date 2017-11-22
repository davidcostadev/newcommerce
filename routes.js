const routes = module.exports = require('next-routes')()

routes
.add('index')
.add('category', '/category/:family?/:group?/:subgroup?')
.add('product', '/product/:slug')
.add('search')
// .add('user', '/user/:id', 'profile')
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({name: 'beta', pattern: '/v3', page: 'v3'})
