<template>
  <div id="header-page-one">
    <header id="header-super" :class="navbarClass">
      <div class="container">
        <div class="row align-items-center">
          <div class="col col-md-4 brand">
            <a class="brand-link" href="/">
              <img v-if="!detect.isMobile && !detect.isTable" src="~assets/img/newcommerce-h.svg" alt="newcommerce">
              <img v-else src="~assets/img/newcommerce-h-inverse.svg" alt="newcommerce">
            </a>
          </div>
          <div v-if="detect.isDesktop" class="col">
            <search-top></search-top>
          </div>
          <div class="col col-md-8 col-lg-3 menu menu-right">
            <div  v-if="detect.isDesktop" class="menu-item">
              <a class="menu-link" href="#">Meus Pedidos</a>
            </div>
            <div v-if="!detect.isDesktop && detect.width > 440" class="menu-item">
              <button class="menu-button" href="#"><i class="ion-ios-search"></i></button>
            </div>
            <div class="menu-item cart-item">
              <a class="menu-link" href="#"><i class="ion-ios-cart-outline"></i> <span class="badge">1</span></a>
            </div>
            <div v-if="!detect.isDesktop" class="menu-item">
              <button class="menu-link" @click="openMenu"><i class="ion-navicon"></i></button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <menu-mobile></menu-mobile>
    <navbar v-if="detect.isDesktop"></navbar>
  </div>
</template>

<script>
  import SearchTop from '~layout/search-top'
  import MenuMobile from '~layout/menu-mobile'
  import Navbar from '~layout/navbar'

  export default {
    components: { SearchTop, MenuMobile, Navbar },
    created () {
      console.log(this.$detect.width)
    },
    computed: {
      detect () {
        return this.$detect
      },
      navbarClass () {
        let change = this.$detect.isMobile || this.$detect.isTable
        return {
          'navbar-top': 1,
          'navbar-inverse': change,
          'navbar-spaced': !change
        }
      }
    },
    data () {
      return {
      }
    },
    methods: {
      openMenu () {
        this.$store.dispatch('overMenu')
      }
    }
  }
</script>

<style lang="scss">
  @import '~assets/scss/vars.scss';

  .brand {
    flex-grow: 2;
    a {
      display: inline-flex;
      &:hover {
        opacity: 0.7
      }
    }
    img {
      max-width: 100%;
      max-height: 24px
    }
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    &.menu-right {
      justify-content: flex-end;
    }
    .menu-item {
      display: flex;
      align-items: stretch;
      margin-top: 4px;
      margin-bottom: 4px;
    }
    &.menu-right {
      .menu-item+.menu-item {
        margin-left: 4px;
      }
    }
    .menu-button,
    .menu-link {
      display: flex;
      align-items: center;
      color: $color-primary;
      background-color: white;
      border-radius: 3px;
      border-width: 0;
      padding: 0 10px;
      cursor: pointer;

      &:focus,
      &:hover {
        background-color: $button-default;
        color: saturate($color-primary, 10%);
      }
      &:active {
        background-color: $button-default-hover;
      }
      i {
        font-size: 32px;
        vertical-align: middle;
      }
    }

  }


  .cart-item {

    .badge {
      display: inline-block;
      width: 22px;
      height: 22px;
      padding: 5px 0px;
      background: $color-second;
      border-radius: 50%;
      font-size: 12px;
      vertical-align: super;
      color: white;
      transform: translate(4px, -8px);
    }
  }

  .navbar-top {

  }
  .navbar-spaced {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .navbar-inverse {
    background-color: $navbar-inverse;
    transition: background-color 0.4s ease;

    .menu {
      .menu-button,
      .menu-link {
        background-color: transparent;
        color: text-color-background($navbar-inverse);
        transition: background-color 0.4s ease;


        &:focus,
        &:hover {
          background-color: $button-default-inverse-hover;
        }

        &:active {
          background-color: $button-default-inverse-active;
        }
      }
    }
  }

  // @media (max-width: 991px) {
  //   .navbar-top {

  //   }
  // }
</style>

