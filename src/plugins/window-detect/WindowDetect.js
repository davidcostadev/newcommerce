// import Vue from 'vue'

const WindowDetect = {
  install: (Vue, store) => {
    store.registerModule('detect', {
      getters: {
        width: state => state.width,
        isMobile: state => state.isMobile,
        isTable: state => state.isTable,
        isDesktop: state => state.isDesktop,
        isSm: state => state.isSm,
        isMd: state => state.isMd,
        isLg: state => state.isLg,
        isXl: state => state.isXl
      },
      state () {
        return {
          width: 1000,
          isMobile: false,
          isTable: false,
          isDesktop: false,
          isSm: false,
          isMd: false,
          isLg: false,
          isXl: false
        }
      },
      mutations: {
        RESIZE_WINDOW: (state, width) => {
          state.isMobile = false
          state.isTable = false
          state.isDesktop = false

          if (width >= 992) {
            state.isDesktop = true
          } else if (width >= 768) {
            state.isTable = true
          } else {
            state.isMobile = true
          }
          state.isXl = false
          state.isLg = false
          state.isMd = false
          state.isSm = false

          if (width >= 1200) {
            state.isXl = true
          } else if (width >= 992) {
            state.isLg = true
          } else if (width >= 768) {
            state.isMd = true
          } else if (width >= 576) {
            state.isSm = true
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
