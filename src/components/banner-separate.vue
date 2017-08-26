<template>
  <div class="banner-separate-grid">
    <div class="banner-separate-col">
      <div class="banner-separate-row">
        <div class="banner-separate banner-separate-right" style="background-image: url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=')">
          <span class="banner-text1"> 5 Din/3 Nema Tramontina </span>
          <span class="banner-text2">R$ 17,90</span>
          <button type="button" class="banner-btn">Ver Detalhes</button>
        </div>
      </div>
    </div>
    <div class="banner-separate-col">
      <div class="banner-separate-row">
        <div class="banner-separate banner-separate-right" style="background-image: url('https://images.unsplash.com/photo-1496878632226-93afc36151ab?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=')">
          <span class="banner-text1">Quadros De Distribuição Embutir</span>
          <span class="banner-text2">R$ 227,90</span>
          <button type="button" class="banner-btn">Ver Detalhes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '~assets/scss/vars.scss';

.banner-separate-grid {
  display: flex;
  .banner-separate-col {
    flex: 1 1 auto;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    flex-direction: column;
  }
  .banner-separate-row {
    flex: 1 1 auto;
    display: flex;
    width: 100%;
    overflow: hidden;
  }
}

.banner-separate {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  padding: 40px 60px;
  transition: transform 0.4s ease;

  .banner-text1,
  .banner-text2,
  .banner-btn {
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: scale(1.1);

    .banner-text1,
    .banner-text2,
    .banner-btn {
      transform: scale(1.05)
    }
  }

  .banner-text1 {
    flex-basis: auto;
    color: $color-deeppurple;
    font-size: 18px;
    margin-bottom: 20px;
  }
  .banner-text2 {
    flex-basis: auto;
    color: $black;
    font-size: 35px;
    margin-bottom: 20px;
  }
  .banner-btn {
    flex-basis: auto;
    background-color: $color-deeppurple;
    padding: 8px 12px;
    font-size: 18px;
    color: $white;
    margin-bottom: 20px;
    border-width: 0;
    transition: background-color 0.4s ease;

    &:hover {
      background-color: darken($color-deeppurple, 10%)
    }
  }

  &.banner-separate-center {
    align-items: center;
    justify-content: center;
    .banner-text1,
    .banner-text2,
    .banner-btn {
      text-align: center;
    }
  }
  &.banner-separate-right {
    align-items: flex-end;
    .banner-text1,
    .banner-text2,
    .banner-btn {
      text-align: right;
    }
  }
  &.banner-separate-left {
    align-items: flex-start;
    .banner-text1,
    .banner-text2,
    .banner-btn {
      text-align: left;
    }
  }
}
</style>
