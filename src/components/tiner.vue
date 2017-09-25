<template>
  <div class="siema">
    <div class="siema-container" ref="siema_container">
      <slot></slot>
    </div>
    <div class="siema-nav">
      <button class="siema-btn siema-prev" ref="siema_prev"><i class="ion-ios-arrow-left"></i> </button>
      <button class="siema-btn siema-next" ref="siema_next"><i class="ion-ios-arrow-right"></i> </button>
    </div>
  </div>
</template>

<script>
  import Siema from 'siema'

  export default {
    data () {
      return {
        siema: {},
        currentSlide: null
      }
    },
    methods: {
      click (index) {
        this.$parent.$emit('tiner_click', index)
      },
      vars () {
        this.currentSlide = this.siema.currentSlide
      }
    },
    created () {
      console.log('created', {a: this.$refs.siema_container})
    },
    mounted () {
      setTimeout(() => {
        // console.log('mounted', {a: this.$refs.siema_container})
        console.log('mounted', this.$refs.siema_container.children.length)
        // console.log('length', this.$refs.siema_container.children.length)
        this.siema = new Siema({
          selector: this.$refs.siema_container,
          perPage: 5,
          threshold: 20,

          onInit: (a) => {
            // console.log('on_init')
            console.log('on_init', this.$refs.siema_container.children.length)
            // console.log(a)
            this.vars()

            // console.log({s: this.$refs.siema_container})

            this.$refs.siema_next.addEventListener('click', () => {
              console.log('next')
              this.siema.next()
            })
            this.$refs.siema_prev.addEventListener('click', () => {
              console.log('prev')
              this.siema.prev()
            })
          },
          onChange: (a) => {
            this.vars()
          }
        }, 1000)
      })
    }
  }
</script>

<style lang="scss">
  .siema {
    overflow: hidden;
    position: relative;

    .siema-btn {
      position:absolute;
      top: 0;
      height: 100%;
      background: rgba(0, 0, 0, 0.0);
      border-width: 0;
      color: white;
      cursor: pointer;
      padding: 8px;
      // opacity: 0.5;

      i {
        font-size: 34px;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.9);
        color: white;
      }
      &:active {
        background: rgba(0, 0, 0, 1);
        color: white;
      }
    }

    &:hover {
      .siema-btn {
        // opacity: 1;
      }
    }

    .siema-next {
      right: 0;
      background: linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
    }
    .siema-prev {
      background: linear-gradient(to left, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
      left: 0;
    }
  }
</style>
