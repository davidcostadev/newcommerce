<template>
  <transition name="menu-mobile">
    <nav v-if="show" class="menu-mobile">
      <div class="menu-title">Menu</div>
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script>
  export default {
    computed: {
      show () {
        return this.$store.state.layout.overlay
      }
    }
  }
</script>


<style lang="scss">
  @import '~assets/scss/vars.scss';

  .menu-mobile {
    position: fixed;
    width: 84%;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1010;
    background: white;
    transition: transform 0.7s;
    transform: translateX(20%);
  }

  .menu-mobile {
    .nav-link:hover {
      background-color: $button-default;
    }
    .nav-link.active,
    .nav-link:active {
      background-color: $button-default-hover;
    }
  }

  .menu-title {
    background-color: $navbar-inverse;
    color: text-color-background($navbar-inverse);
    font-size: 23px;
    font-weight: 600;
    padding: 11px;
  }

  .menu-mobile-enter {
    transform: translateX(130%)
  }

  .menu-mobile-enter-active,
  .menu-mobile-leave-active {
    // opacity: 0;
    // transform: translateX(200%)
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu-mobile-enter,
  .menu-mobile-leave-active {
    transform: translateX(130%)
    // opacity: 0;
  }

</style>

