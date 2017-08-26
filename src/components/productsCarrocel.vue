<template>
  <div class="products-section">
    <h2 class="products-section-title">{{title}}</h2>
    <div class="products-section-row">
      <div v-for="n in 5" class="product">
        <picture class="product-image">
          <img :src="getImg()" alt="">
        </picture>
        <div class="product-title">Quadros De Distribuição Embutir 5 Din/3 Nema Tramontina 56300/001</div>
        <div class="product-price">
          <span class="currency">R$</span> <span class="amount">16,80</span>
        </div>
        <div class="product-buttons">
          <button type="button" class="btn btn-detail">Ver Detalhes</button>
          <button type="button" class="btn btn-buy">Comprar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title'],
    data () {
      return {
        img: [
          'https://www.raicrom.com.br/wp-content/uploads/2017/05/quadros-de-distribuicao-embutir-5-din-3-nema-tramontina-56300-001-11310-2000-15293-1-300x300.jpg',
          'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13722-1-300x300.jpg',
          'https://www.raicrom.com.br/wp-content/uploads/2016/12/fibra-patch-cord-sc-upc-sc-upc-single-mode-30mm-10m-5822-10886-2000-13599-1-300x271.jpg',
          'https://www.raicrom.com.br/wp-content/uploads/2016/12/perfume-st-dupont-intense-edp-fem-50ml-2506-2000-12741-1-300x300.jpg',
          'https://www.raicrom.com.br/wp-content/uploads/2016/12/perfume-paco-rabanne-1-million-masculino-100ml-2488-2000-12722-1-300x300.jpg',
          'https://www.raicrom.com.br/wp-content/uploads/2016/12/perfume-chanel-chance-feminino-100ml-10810-2000-13426-1-300x300.jpg',
          'https://www.raicrom.com.br/wp-content/uploads/2017/05/quadros-de-distribuicao-sobrepor-5-din-3-nema-tramontina-56300-021-11314-2000-15297-1-300x300.jpg',
          'https://www.raicrom.com.br/wp-content/uploads/2017/08/caixa-de-som-hardline-6w-rms-preta-gt-sp20-11564-2000-16136-1-300x300.jpg',
          'https://www.raicrom.com.br/wp-content/uploads/2017/08/caixa-de-som-mymax-6w-rms-preta-azul-spk-sp120-bl-11516-2000-16017-1-300x300.jpg',
          'https://www.raicrom.com.br/wp-content/uploads/2016/12/processador-intel-1151-core-i5-6400-270ghz-6mb-10697-2000-14930.jpg',
          'https://www.raicrom.com.br/wp-content/uploads/2017/04/processador-intel-1151-celeron-g3900-28ghz-2mb-11242-2000-15029-1-300x300.jpg',
          'https://www.raicrom.com.br/wp-content/uploads/2016/12/sensor-3d-microondas-duplo-infra-digital-externo-f180014-ecp-4090-2000-12357-1-300x300.jpg',
          'https://www.raicrom.com.br/wp-content/uploads/2016/12/discadora-conect-cxn-f105620-ecp-3678-2000-12348-1-300x300.jpg',
          'https://www.raicrom.com.br/wp-content/uploads/2016/12/camera-cftv-sony-36-leds-480l-ir-1-3-36mm-720-2000-14849.jpg'

        ]
      }
    },
    methods: {
      getImg () {
        const index = Math.floor(Math.random() * 14)

        console.log(index)

        return this.img[index]
      }
    }
  }
</script>


<style lang="scss">
  @import '~assets/scss/vars.scss';

  .products-section {
    padding-top: 20px;
    padding-bottom: 40px;

    .products-section-title {
      color: #543C95;
      font-size: 2.2rem;
      margin-top: 0;
      padding-top: 20px;
      padding-bottom: 20px;
      margin-bottom: 20px;
    }
  }
  .product {
    background-color: white;
    transition: background-color 0.4s ease-in-out;

    display: flex;
    flex-direction: column;

    &:hover {
      background-color: darken(white, 6%);

      img {
        opacity: 0.9;
      }
    }
    .product-image,
    .product-title
    .product-buttons {
      flex: 1 1 auto;
    }

    .product-image {
      display: flex;
      align-items: center;
      // display: inline-block;
      border-bottom: 3px solid $primary-color;
      overflow: hidden;

      img {
        width: 100%;
        transition: opacity 0.4s ease-in-out;
      }
    }
    .product-title {
      padding: 8px 12px;
      font-size: 14px;
    }
    .product-price {
      display: flex;
      justify-content: center;
      padding: 8px 12px;
      color: $color-indigo;
      align-items: baseline;

      .currency {
        font-size: 16px;
        margin-right: 5px;
      }
      .amount {
        font-size: 30px;
      }
    }
    .product-buttons {
      display: flex;
      .btn {
        flex: 1 1 auto;
        border-radius: 0;
      }
      .btn-detail {
        background-color: $color-gray300;
        color: $black;
        &:hover {
          background-color: $color-gray400;
        }
        &:active {
          background-color: $color-gray600;
          color: $white;
        }
      }
      .btn-buy {
        background-color: $color-gray300;
        color: $primary-color;

        &:hover {
          background-color: darken($primary-color, 20%);
          color: $white;
        }
        &:active {
          background-color: darken($primary-color, 50%);
          color: $white;
        }
      }
    }
  }

  .products-section-row {
    display: flex;
    margin-left: -5px;
    margin-right: -5px;


    .product {
      flex: 1 1 20%;
      max-width: 20%;
      margin-left: 5px;
      margin-right: 5px;
      margin-bottom: 30px;
    }
  }

  .products-section+.products-section {
    border-top: 1px solid $color-gray300;
    padding-top: 20px;
    margin-top: 20px;
  }
</style>

