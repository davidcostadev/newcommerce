<template>
  <div class="page-home">
    <banner-mosaico></banner-mosaico>
    <div class="container">
      <products-carrocel title="Informática"></products-carrocel>
      <products-carrocel title="Celulares"></products-carrocel>
      <banner-separate></banner-separate>
      <products-carrocel title="Redes e Internet"></products-carrocel>
      <products-carrocel title="Perfumes e Cosméticos"></products-carrocel>
      <products-carrocel title="Material Elétrico"></products-carrocel>
      <info-block></info-block>

    </div>
  </div>
</template>

<script>
  import Banner1 from '~layout/banner'
  import productsCarrocel from '~components/productsCarrocel'
  import BannerSeparate from '~components/banner-separate'
  import BannerMosaico from '~components/banner-mosaico'
  import InfoBlock from '~components/infoBlock'

  export default {
    name: 'Home',
    components: { Banner1, productsCarrocel, BannerMosaico, BannerSeparate, InfoBlock },
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
