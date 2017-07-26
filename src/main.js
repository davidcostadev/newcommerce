// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import '~plugins/bootstrap-vue'
import '~plugins/vuex'
import '~plugins/window-detect'
import '~plugins/vue-awesome-swiper'

import App from './default'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
