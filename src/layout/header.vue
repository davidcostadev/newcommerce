<template>
  <header id="header-page-one">
    <div class="container">
      <div class="row align-items-center">
        <div class="col col-md-4">
          <a class="brand" href="/">
            <img src="~assets/newcommerce-h.png" alt="newcommerce">
          </a>
        </div>
        <div class="col">
          <search-top></search-top>
        </div>
        <div class="col col-md-3 menu menu-right">
          <a class="menu-item" href="#">Meus Pedidos</a>
          <div class="menu-item cart-item">
            <a href="#"><i class="ion-ios-cart-outline"></i> <span class="badge">1</span></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import SearchTop from '~layout/search-top'

  export default {
    components: { SearchTop },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
  @import '~assets/scss/vars.scss';

  .brand {
    img {
      max-width: 100%;
      max-height: 79px
    }
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &.menu-right {
      justify-content: flex-end;
    }
    .menu-item {
      padding: 6px
    }
  }


  .cart-item {
    a {
      border-radius: 3px;
      display: inline-block;
      padding: 0 10px;

      &:focus,
      &:hover {
        background-color: $button-default;
      }
      &:active {
        background-color: $button-default-hover;
      }

    }
    i {
      font-size: 32px;
      vertical-align: middle;

    }
    .badge {
      vertical-align: super;
      background: $color-second;
      color: white;
      padding: 5px 0px;
      border-radius: 50%;
      width: 22px;
      display: inline-block;
      font-size: 12px;
      transform: translate(2px, -1px);
    }
  }

</style>

