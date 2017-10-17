<template>
  <div id="page">
    <header-page></header-page>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <footer-page></footer-page>
    <overlay></overlay>
  </div>
</template>

<script>
  import HeaderPage from '~layout/header'
  import Overlay from '~layout/overlay'
  import footerPage from '~layout/footer'

  export default {
    components: { HeaderPage, footerPage, Overlay },
    name: 'page',
    created () {
      // console.log(this)
    }
  }
</script>

<style lang="scss">
  @import '~assets/scss/vars.scss';
  @import '~assets/scss/overridebootstrap';
  @import '~assets/scss/products.scss';


  body {
    overflow-x: initial;
    color: $text-color;
    font-family: $font-primary;
    background: $body-bg;
  }

  a {
    color: $color-primary;

    &:focus,
    &:hover {
      color: darken($color-primary, 10%);
      text-decoration: none;
    }
  }

  input,
  textarea,
  select {
    font-family: $font-primary;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }



</style>
