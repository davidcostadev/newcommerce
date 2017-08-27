<template>
  <div class="banner-mosaico-grid">
    <div class="banner-mosaico-col">
      <div class="banner-mosaico-row">
        <div class="banner-mosaico banner-mosaico-center" style="background-image: url('https://images.unsplash.com/photo-1487243528516-7fa712e910f4?dpr=1&auto=format&fit=crop&w=1500&h=998&q=80&cs=tinysrgb&crop=')">
          <span class="banner-text1">Dummy text</span>
          <span class="banner-text2">Lorem Ipsum is simply</span>
          <button type="button" class="banner-btn">Comprar Agora</button>
        </div>
      </div>
    </div>
    <div class="banner-mosaico-col">
      <div class="banner-mosaico-row">
        <div class="banner-mosaico banner-mosaico-left" style="background-image: url('https://images.unsplash.com/photo-1491472253230-a044054ca35f?dpr=1&auto=format&fit=crop&w=1500&h=984&q=80&cs=tinysrgb&crop=')">
          <span class="banner-text1">Industry's standard</span>
          <span class="banner-text2">Printing and typesetting </span>
          <button type="button" class="banner-btn">Comprar Agora</button>
        </div>
      </div>
      <div class="banner-mosaico-row">
        <div class="banner-mosaico banner-mosaico-right" style="background-image: url('https://images.unsplash.com/photo-1458538977777-0549b2370168?dpr=1&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=')">
          <span class="banner-text1">Printer took</span>
          <span class="banner-text2">Specimen Book</span>
          <button type="button" class="banner-btn">Comprar Agora</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '~assets/scss/vars.scss';

  .banner-mosaico-grid {
    display: flex;
    flex-wrap: wrap;

    .banner-mosaico-col {
      flex: 1 1 100%;
      display: flex;
      justify-content: stretch;
      align-items: stretch;
      flex-direction: column;

    }
    .banner-mosaico-row {
      flex: 1 1 auto;
      display: flex;
      width: 100%;
      overflow: hidden;
    }
  }

  .banner-mosaico {
    flex: 1 1 50%;
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
      color: $white;
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

    &.banner-mosaico-center {
      align-items: center;
      justify-content: center;
      .banner-text1,
      .banner-text2,
      .banner-btn {
        text-align: center;
      }
    }
    &.banner-mosaico-right {
      align-items: flex-end;
      .banner-text1,
      .banner-text2,
      .banner-btn {
        text-align: right;
      }
    }
    &.banner-mosaico-left {
      align-items: flex-start;
      .banner-text1,
      .banner-text2,
      .banner-btn {
        text-align: left;
      }
    }
  }

  @include min-sm {
    .banner-mosaico-grid {
      .banner-mosaico-col {
        flex: 1 1 50%;
        max-width: 50%;
      }
    }
  }
</style>
