<template>
  <div id="page">
    <header-page></header-page>
    <router-view></router-view>
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
      console.log(this)
    }
  }
</script>

<style lang="scss">
  @import '~assets/scss/vars.scss';
  @import '~assets/scss/overridebootstrap';

  body {
    overflow-x: initial;
    color: $text-color;
    font-family: $font-primary;
    background: $color-gray100;
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
</style>
