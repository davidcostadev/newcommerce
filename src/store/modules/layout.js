export default {
  state: {
    overlay: false
  },
  mutations: {
    'OVER_MENU' (state, status) {
      if (typeof status !== 'undefined') {
        state.overlay = status
      } else {
        state.overlay = !state.overlay
      }
    }
  },
  actions: {
    overMenu ({ commit }) {
      commit('OVER_MENU')
    },
    closeMenu ({ commit }) {
      commit('OVER_MENU', false)
    }
  }
}
