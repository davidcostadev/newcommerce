<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="#">Informática</a>
    </li>
    <li class="breadcrumb-item">
      <a href="#">Gabinetes</a>
    </li>
    <li class="breadcrumb-item active">Gabinete Raidmax Gamer EXO Pto/verde S/fonte 108bg</li>
  </ol>
</template>

<style lang="scss">
  @import '~assets/scss/vars.scss';

  .breadcrumb {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0.5rem 0;
    font-size: 12px;
    background-color: $body-bg;



  }
  .breadcrumb-item+.breadcrumb-item::before {
    content: ">"
  }
</style>
