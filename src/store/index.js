import Vuex from 'vuex'

import layout from './modules/layout'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    layout
  },
  strict: debug
})
