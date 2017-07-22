// import Vue from 'vue'

const WindowDetect = {
  install: (Vue, store) => {
    store.registerModule('detect', {
      getters: {
        width: state => state.width,
        isMobile: state => state.isMobile,
        isTable: state => state.isTable,
        isDesktop: state => state.isDesktop
      },
      state () {
        return {
          width: 1000,
          isMobile: false,
          isTable: false,
          isDesktop: false
        }
      },
      mutations: {
        RESIZE_WINDOW: (state, width) => {
          if (width >= 992) {
            state.isMobile = false
            state.isTable = false
            state.isDesktop = true
          } else if (width >= 768) {
            state.isMobile = false
            state.isTable = true
            state.isDesktop = false
          } else {
            state.isMobile = true
            state.isTable = false
            state.isDesktop = false
          }
          state.width = width
        }
      }
    })

    Vue.prototype.$detect = store.getters

    Vue.mixin({
      created () {
        this.$nextTick(() => {
          window.addEventListener('resize', this.eventResizeWindow)
          this.$store.commit('RESIZE_WINDOW', document.documentElement.clientWidth)
        })
      },

      methods: {
        eventResizeWindow () {
          this.$store.commit('RESIZE_WINDOW', document.documentElement.clientWidth)
        }
      }
    })

    // Vue.WindowDetect = Vue.prototype.$detect =
  }
}

// const methods = {
//   isMobile() {
//   }
// }

export default WindowDetect
