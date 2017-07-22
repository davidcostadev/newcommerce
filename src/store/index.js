import Vuex from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug
})
