<template>
  <div class="category-page container">
    <div class="row">
      <div class="col-md-3">
        <div class="widget widget-category">
          <h3 class="widget-title">Categorias</h3>
          <ul class="product-categories">
            <li v-for="(menu, index) in categories" :key="index" class="product-category">
              <router-link :to="menu.path">{{menu.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-9">
        <div class="products-section">
          <div class="products-section-row products columns-3">
            <product-box v-for="n in 21" :key="n"></product-box>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductBox from '../components/product-box'

  export default {
    props: ['title'],
    components: { ProductBox },
    data () {
      return {
        categories: [
          {
            title: 'Cabo',
            path: 'category/informatica/name'
          },
          {
            title: 'Fone de Ouvido',
            path: 'category/informatica/name'
          },
          {
            title: 'Gabinete & Kit',
            path: 'category/informatica/name'
          },
          {
            title: 'Hard Disk',
            path: 'category/informatica/name'
          },
          {
            title: 'Memória',
            path: 'category/informatica/name'
          },
          {
            title: 'Mouse',
            path: 'category/informatica/name'
          },
          {
            title: 'Placa Mãe',
            path: 'category/informatica/name'
          },
          {
            title: 'Teclado',
            path: 'category/informatica/name'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import '~assets/scss/vars.scss';

  .category-page {
    padding-top: 15px;
    padding-bottom: 30px;
  }

  .widget {
    .widget-title {
      font-size: 14px;
      text-align: center;
      padding: 5px 0;
      margin-bottom: 0;
      background: $color-gray300;
      color: $color-gray500
    }

    &+& {
      margin-bottom: 30px;
    }
  }

  .product-categories {
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;

    li {
      display: flex;
    }
    a {
      flex: 1;
      padding: 8px 16px;
      background-color: white;

      &:hover {
        background-color: $color-deeppurple;
        color: text-color-background($color-deeppurple);
      }

      &:active {
        background-color: darken($color-deeppurple, 5%);
        color: darken(text-color-background($color-deeppurple), 5%);
      }
    }
  }
</style>
