<template>
  <div class="products-section">
    <h2 class="products-section-title">{{title}}</h2>
    <div :class="['products-section-row', 'products', `columns-${columns}`]">
      <product-box v-for="n in 4" :key="n"></product-box>
    </div>
  </div>
</template>

<script>
  import ProductBox from './product-box'

  export default {
    props: {
      title: String,
      columns: {
        type: Number,
        default: 4
      }
    },
    components: { ProductBox }
  }
</script>


<style lang="scss">

</style>

