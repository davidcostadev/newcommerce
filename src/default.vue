<template>
  <div id="page">
    <header-page></header-page>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderPage from '~layout/header'

  export default {
    components: { HeaderPage },
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
