<template>
  <div class="page-home">
    <banner1></banner1>
    <div class="hero is-primary">
      <div class="title">asds</div>
    </div>
  </div>
</template>

<script>
  import Banner1 from '~layout/banner'

  export default {
    name: 'Home',
    components: { Banner1 },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
