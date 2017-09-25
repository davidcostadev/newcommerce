<template>
  <section class="block-info">
    <header class="block-info-header">
      <h2>Informações Técnicas</h2>
    </header>
    <div class="block-info-content">
      <table class="table">
        <tr v-for="n in 10" :key="n">
          <td>Parametro</td>
          <td>Informação</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<style lang="scss">
  @import '~assets/scss/vars.scss';

</style>
