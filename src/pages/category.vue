<template>
  <div class="category-page container">
    <div class="row">
      <div class="sidebar col-md-3">
        <affix class="sidebar-menu" relative-element-selector="#example-content" scroll-affix>
          <div class="widget widget-filter">
            <h3 class="widget-title">Filtrar</h3>
            <form action="" class="widget-content">
              <label>Preço</label>
              <div class="form-row align-items-center">
                <div class="col-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Min.">
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Máx.">
                  </div>
                </div>
              </div>
              <label>Fabricantes</label>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input"> Galaxy
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input"> Xperia
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input"> Iphone
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="checkbox" class="form-check-input"> Zemfone
                </label>
              </div>

            </form>
          </div>

          <div class="widget widget-category">
            <h3 class="widget-title">Categorias</h3>
            <ul class="product-categories">
              <li v-for="(menu, index) in categories" :key="index" class="product-category">
                <router-link :to="menu.path">{{menu.title}}</router-link>
              </li>
            </ul>
          </div>
        </affix>
      </div>
      <div class="col col-lg-9" id="example-content">
        <div class="title-section">
          <h1>Informática</h1>
        </div>
        <div class="row">
          <div class="col">
            1066 Produtos
          </div>
          <div class="col">
            <form class="form-inline">
              <select class="form-control">
                <option>Mais Vendidos</option>
                <option>Mais Visitados</option>
                <option>Maior Preço</option>
                <option>Menor Preço</option>
                <option>Nome A-Z</option>
                <option>Nome Z-A</option>
              </select>
            </form>
          </div>
        </div>
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

  .sidebar {
    display: none;
  }
  @include min-md {
    .sidebar {
      display: flex;
    }

    .sidebar-menu {
      width: 210px;
    }
  }

  @include min-lg {


    .sidebar-menu {
      width: 255px;
    }
  }

  @include min-gg {
    .sidebar-menu {
      width: 293px;
    }
  }


  .title-section {
    background-image: url('https://images.unsplash.com/photo-1497171156029-51dfc973e5f9?dpr=1&auto=format&fit=crop&w=1500&q=60&cs=tinysrgb');
    background-size: cover;
    background-position: center;
    padding: 30px 60px;
    margin-bottom: 20px;

    h1 {
      color: rgb(0, 255, 255);
      mix-blend-mode: difference;
    }
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

    .widget-content {
      background: $white;
      padding: 15px;
    }

    &+& {
      margin-top: 30px;
    }
  }

  .widget-category {
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
  }

  .widget-filter {
    label {
      font-size: 14px;
    }
  }
</style>
