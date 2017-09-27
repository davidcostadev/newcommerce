<template>
  <main id="product-page">
    <div class="container">
      <breadcrumb></breadcrumb>
      <div class="product">
        <div class="row">
          <div class="col-lg-4">
            <div class="gallery">
              <picture class="gallery-feature gallery-image"><img :src="gallery_feature" alt="name product"></picture>
              <div class="gallery-thumbs">
                <tiner>
                  <picture v-for="(image, index) in product.images" :key="index" class="gallery-thumb">
                    <img @click="gallerySelect(index)" :src="image.thumb" alt="product name">
                  </picture>
                 </picture>
                </tiner>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <product-details></product-details>
          </div>

        </div>
        <product-description></product-description>
        <product-table></product-table>
        <products-carrocel title="Relacionados"></products-carrocel>
      </div>
    </div>
  </main>
</template>

<script>
  import breadcrumb from '../components/breadcrumb'
  import tiner from '../components/tiner'
  import ProductDetails from '../components/product-details'
  import ProductDescription from '../components/product-description'
  import ProductTable from '../components/product-table'
  import productsCarrocel from '~components/productsCarrocel'

  export default {
    components: {
      tiner,
      breadcrumb,
      ProductDetails,
      ProductDescription,
      ProductTable,
      productsCarrocel
    },
    data () {
      return {
        image_feature: 0,
        pagseguro_parcelas: 6,
        boleto_desconto: 7,
        gallery_feature_index: 0,
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
      gallery_feature () {
        return this.product.images[this.gallery_feature_index].original
      },
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
      gallerySelect (index) {
        // console.log('gallerySelect', index)
        this.gallery_feature_index = index
      },
      price (float) {
        return new Intl.NumberFormat('pt-BR', { style: 'decimal', minimumFractionDigits: 2 }).format(float)
      }
    },
    created () {
      this.$on('tiner_click', (index) => {
        console.log('img', index)
      })
    }
  }
</script>

<style lang="scss">
  @import '~assets/scss/vars.scss';

  .product {
    margin-bottom: 20px;
  }
  .gallery {
    background-color: white;
    margin-bottom: 20px;

    .gallery-feature {
      display: block;
      text-align: center;
    }
    .gallery-thumbs {
      .gallery-thumb {

      }
    }
    img {
      width: 100%;
      max-width: 400px;
    }
  }
</style>

