<template>
    <transition name="overlay">
      <div v-if="show" class="overlay" @click="click"></div>
    </transition>
</template>

<script>
  export default {
    computed: {
      show () {
        return this.$store.state.layout.overlay
      }
    },
    methods: {
      click () {
        this.$store.dispatch('closeMenu')
      }
    }
  }
</script>

<style lang="scss">
  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.4;
    z-index: 1000;
    transition: opacity 0.5s;
  }
  // .overlay-enter-active {
  //   background: red;
  // }
  // .overlay-leave-active {
  //   background: gren;
  // }
  // .overlay-enter {
  //   background: yellow;
  // }
  .overlay-enter-active,
  .overlay-leave-active {
    // opacity: 0;
    transition: opacity .5 cubic-bezier(0.23, 1, 0.32, 1);
  }
  .overlay-enter,
  .overlay-leave-active {
    opacity: 0;
  }
</style>

