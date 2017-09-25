import Vue from 'vue'
import Router from 'vue-router'
import Index from '~pages/index'
import Product from '~pages/product'
import Category from '~pages/category'

Vue.use(Router)

export default new Router({
  history: false,
  routes: [
    {
      path: '',
      name: 'Home',
      meta: {
        title: 'newCommerce - More platform for ecommerce in vuejs'
      },
      component: Index
    },
    {
      path: '/product/:slug',
      name: 'Product',
      meta: {
        title: 'newCommerce - More platform for ecommerce in vuejs'
      },
      component: Product
    },
    {
      path: '/category/:slug',
      name: 'Category',
      meta: {
        title: 'newCommerce - More platform for ecommerce in vuejs'
      },
      component: Category
    }
  ]
})
