import Vue from 'vue'
import Router from 'vue-router'
import Index from '~pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      meta: {
        title: 'newCommerce - More platform for ecommerce in vuejs'
      },
      component: Index
    }
  ]
})
