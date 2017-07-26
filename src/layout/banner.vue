<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="n in 3" :key="n">
      <div class="slide-content" style="background-image: url(/static/img/banner-mobile.jpg)">
        <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
          <p v-if="active == n">hello</p>
        </transition>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    data () {
      return {
        active: 1,
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true
          // onSlideChangeEnd (swiper) {
          //   console.log(this)
          //   console.log(swiper)
          // }
          // // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          // notNextTick: true,
          // // swiper configs 所有的配置同swiper官方api配置
          // autoplay: 3000,
          // direction: 'vertical',
          // grabCursor: true,
          // setWrapperSize: true,
          // autoHeight: true,
          // pagination: '.swiper-pagination',
          // paginationClickable: true,
          // prevButton: '.swiper-button-prev',
          // nextButton: '.swiper-button-next',
          // scrollbar: '.swiper-scrollbar',
          // mousewheelControl: true,
          // observeParents: true,
          // // if you need use plugins in the swiper, you can config in here like this
          // // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          // debugger: true,
          // // swiper callbacks
          // // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          // onTransitionStart (swiper) {
          //   console.log(swiper)
          // }
          // more Swiper configs and callbacks...
          // ...
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      setTimeout(() => {
        this.swiper.on('SlideChangeEnd', (swiper) => {
          // console.log()
          // console.log(swiper.activeIndex)
          this.active = swiper.activeIndex + 1
        })
          //   console.log(this)
          //   console.log(swiper)
            // })
        //   console.log(this.$refs.mySwiper)
        //   // you can use current swiper instance object to do something(swiper methods)
        //   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
        //   console.log('this is current swiper instance object', this.swiper.activeIndex)
      }, 100)
      // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style>
  .slide-content {
    background-size: cover;
    padding: 20px;
    height: 10rem;
  }
</style>


