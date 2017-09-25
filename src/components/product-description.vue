<template>
  <section class="block-info">
    <header class="block-info-header">
      <h2>Informações do Produto</h2>
    </header>
    <div class="block-info-content">

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos veniam id, sunt dicta reiciendis, optio repellendus reprehenderit, at deserunt beatae et expedita? Similique unde harum totam quas, facilis dolorem atque?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos veniam id, sunt dicta reiciendis, optio repellendus reprehenderit, at deserunt beatae et expedita? Similique unde harum totam quas, facilis dolorem atque?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos veniam id, sunt dicta reiciendis, optio repellendus reprehenderit, at deserunt beatae et expedita? Similique unde harum totam quas, facilis dolorem atque?</p>

    </div>
  </section>
</template>

<style lang="scss">
  @import '~assets/scss/vars.scss';

  .block-info {
    background-color: $white;
    margin-top: 20px;

    .block-info-header {
      border-bottom: 1px solid $color-gray200;

      h2 {
        color: $color-gray600;
        font-size: 22px;
        padding: 10px 60px;
        margin-bottom: 0;

      }
    }
    .block-info-content {
      padding: 20px 60px;
    }

    p {
      font-size: 18px;
    }
  }
</style>
