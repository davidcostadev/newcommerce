<template>
  <nav class="navbar navbar-light navbar-toggleable-md bg-faded navbar-expand-lg">
    <div class="container">
      <ul class="navbar-nav">
        <li class="nav-item"><router-link to="/category/name-of-category" class="nav-link">Telefonia</router-link></li>
        <li class="nav-item"><router-link to="/category/name-of-category" class="nav-link">Informática</router-link></li>
        <li class="nav-item"><router-link to="/category/name-of-category" class="nav-link">Eletrodomésticos</router-link></li>
        <li class="nav-item"><router-link to="/category/name-of-category" class="nav-link">Móveis</router-link></li>
        <li class="nav-item"><router-link to="/category/name-of-category" class="nav-link">Importados</router-link></li>
        <li class="nav-item"><router-link to="/category/name-of-category" class="nav-link">Alimentos</router-link></li>
        <li class="nav-item"><router-link to="/category/name-of-category" class="nav-link">Serviços</router-link></li>
      </ul>
      <ul v-if="detect.isXl" class="navbar-nav ml-auto">
        <li class="nav-item"><a href="/" class="nav-link">Minha Conta</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      detect () {
        return this.$detect
      }
    }
  }
</script>

.navbar-toggleable-md .navbar-nav .nav-link
<style lang="scss" >
  @import '~assets/scss/vars';
  .bg-faded {
    background-color: $color-gray200;
  }
  .navbar-spaced {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }

  .navbar {
    padding: 0;

    .nav-link {
      font-size: 18px;
      text-transform: capitalize;
      transition: all .4s cubic-bezier(0.39, 0.575, 0.565, 1);

      &:hover,
      &:focus {
        background-color: $color-primary;
        color: text-color-background($color-primary);
      }
    }
  }
  .navbar-toggleable-md .navbar-nav .nav-link {
      padding: .5rem 1.5rem;
  }


</style>
