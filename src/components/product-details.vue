<template>
  <div class="product-details">
    <h1 class="product-title">{{product.name}}</h1>
    <p class="product-header">
      <span class="rating">
        <span class="stars">
          <span class="star">
            <i class="ion-ios-star"></i>
          </span>
          <span class="star">
            <i class="ion-ios-star"></i>
          </span>
          <span class="star">
            <i class="ion-ios-star"></i>
          </span>
          <span class="star">
            <i class="ion-ios-ion-ios-star-half"></i>
          </span>
          <span class="star">
            <i class="ion-ios-star-outline"></i>
          </span>
        </span>
        <a href="#" class="rating-link">6 Avaliações</a>
      </span>
      <span class="sku">
        <i class="ion-ios-grid-view-outline"></i>
        <span>1234</span>
      </span>
      <span class="tags">
        <i class="ion-ios-pricetag-outline"></i>
        <a href="#" class="tag">Moderno</a>
        <a href="#" class="tag">Geek</a>
      </span>
    </p>
    <p class="product-description-short">{{product.description_short}}</p>
    <div class="product-block">
      <div class="product-price-col">
        <p class="product-price">
          <span class="text">Por</span>
          <span class="currency">R$</span>
          <span class="amount">{{price(product.price)}}</span>
        </p>
        <p class="product-price-pagseguro">
          <span>ou {{pagseguro_parcelas}}x de</span>
          <span class="currency">R$</span>
          <span class="amount">{{price(pagseguro_price)}}</span>
          <span>sem Juros</span>
          <a href="#">Ver Parcelas</a>
        </p>
      </div>
      <div class="product-price-col">
        <div class="product-buttons">
          <button class="btn btn-lg btn-primary"> Adicionar ao Carrinho</button>
          <button class="btn btn-lg btn-danger">
            <i class="ion-ios-heart"></i>
          </button>
        </div>
      </div>
    </div>
    <p class="product-price-boleto">
      <span class="currency">R$</span>
      <span class="amount">{{price(boleto_price)}}</span>
      <span class="text">{{boleto_desconto}}% de Desconco no Boleto ou Transferencia</span>
    </p>
    <div class="product-correio-calc">
      <i class="ion-ios-location"></i>
      <span>Digite seu CEP para calcular o frete</span>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="00000-000">
        <span class="input-group-btn">
          <button class="btn btn-primary">Calcular</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        pagseguro_parcelas: 6,
        boleto_desconto: 7,
        product: {
          name: 'Gabinete Raidmax Gamer EXO Pto/Verde S/Fonte 108bg',
          price: 170.40,
          description: '<h2>Descrição</h2><p>Características:</p><p>– Marca: Raidmax</p><p>– Modelo: EXO 108BG</p><p>Especificações:</p><p>– Unidades externas (baias): 2x 5.25″</p><p>– Unidades internas (baias): 3x 3.5″ HD / 3x 2.5″ SSD</p><p>– Sistema Board: Micro ATX / ATX / Mini-ITX</p><p>– Slots de expansão: 7 Slots</p><p>– I/O Ports: 1x USB 3.0 + 1x USB 2.0 / 2x HD Áudio</p><p>– Dimensões: 445 x 185 x 420 mm</p><p>Sistema de resfriamento:</p><p>– Frontal: 1x 120mm LED fan</p><p>– Lateral: 2x 120mm fan (não incluso)</p><p>– Traseiro: 1x 80mm (não incluso)</p><p>Conteúdo da embalagem:</p><p>– 01 Gabinete Raidmax</p>',
          description_short: 'Lorem inpur amet doin',
          sky: '10968',
          images: [
            {
              original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13722-1.jpg',
              thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13722-1-150x150.jpg'
            },
            {
              original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13724-1.jpg',
              thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13724-1-150x150.jpg'
            },
            {
              original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13723-1.jpg',
              thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13723-1-150x150.jpg'
            },
            {
              original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13722-1.jpg',
              thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13722-1-150x150.jpg'
            },
            {
              original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13724-1.jpg',
              thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13724-1-150x150.jpg'
            },
            {
              original: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13723-1.jpg',
              thumb: 'https://www.raicrom.com.br/wp-content/uploads/2016/12/gabinete-raidmax-gamer-exo-pto-verde-s-fonte-108bg-10968-2000-13723-1-150x150.jpg'
            }
          ]
        }
      }
    },
    computed: {
      pagseguro_price () {
        const val = Math.floor(this.product.price / this.pagseguro_parcelas)
        return val
      },
      boleto_price () {
        const desc = 1 - (this.boleto_desconto * 0.01)
        const val = Math.floor(this.product.price * desc)
        return val
      }
    },
    methods: {
      price (float) {
        return new Intl.NumberFormat('pt-BR', { style: 'decimal', minimumFractionDigits: 2 }).format(float)
      }
    }
  }
</script>

<style lang="scss">
  @import '~assets/scss/vars.scss';

  .product-details {
    background: white;
    padding: 0 15px 20px;

    .product-title {
      font-size: 28px;
      display: inline-block;
      margin-top: 10px;
      margin-bottom: 30px;
    }
    .product-header {
      border-bottom: 1px solid $color-gray400;
      padding-bottom: 15px;

      &>span+span {
        padding-left: 15px;
      }
    }
    .currency {
      margin-right: 5px;
      color: $color-primary;
      font-weight: 600;
    }
    .amount {
      color: $color-primary;
      font-weight: 600;
    }

    .product-buttons {
      .btn {}
    }
  }

  .product-price {

    .text {
      color: $color-gray700;
      font-size: 22px;
    }
    .currency {
      font-size: 22px;
    }
    .amount {
      font-size: 50px;
    }
  }

  .product-price-pagseguro {
    display: flex;
    align-items: center;
    font-size: 18px;
    span {
      margin-left: 6px

    }

    a {
      font-size: 12px;
      margin-left: 10px
    }
  }

  .product-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    p {
      margin-bottom: 0;
    }
  }

  .product-price-boleto {
    background: $color-gray300;
    margin-bottom: 0;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    margin-bottom: 15px;

    .currency {}
    .amount {
      font-size: 26px;
    }
    .text {
      margin: 10px;
    }
  }

  .rating {
    color: $color-second;

    .rating-link {
      padding-left: 5px;
    }
  }

  .sku {
    i {
      color: $color-second;
    }
  }

  .tags {
    i {
      color: $color-second;
    }
  }

  .product-correio-calc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    margin-bottom: 20px;

    i {
      color: $color-primary;
      font-size: 20px;
      margin-right: 20px;
    }
    span {
      flex: 1;
    }
    .input-group {
      max-width: 290px;
    }
  }
</style>

