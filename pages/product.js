import React from 'react';
import classNames from 'classnames';

import styles from '../assets/scss/App.scss';
import ProductDetails from '../components/ProductDetails';
import ProductsCarrocel from '../components/ProductsCarrocel';
import ProductDescription from '../components/ProductDescription';
import Breadcrumbs from '../components/Breadcrumbs';

const data = {
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
};

const Product = () => (
  <div>
    <main id="product-page">
      <div className={`container ${styles.container}`}>
        <Breadcrumbs />
        {/* <breadcrumb></breadcrumb> */}
        <div className={styles.productLanding}>
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.gallery}>
                <picture className={classNames([styles.galleryFeature, 'galleryImage'])}><img src={data.images[0].original} alt="name product" /></picture>
                <div className={styles.galleryThumbs}>
                  {/* <tiner> */}
                  {
                    data.images.map(image => (
                      <picture className={styles.galleryThumb}>
                        <img src={image.thumb} alt="product name" />
                      </picture>
                    ))
                  }

                  {/* </tiner> */}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <ProductDetails />
            </div>

          </div>
          {/* <product-description></product-description> */}
          {/* <product-table></product-table> */}
          {/* <products-carrocel title="Relacionados"></products-carrocel> */}
        </div>

        <ProductDescription />
        <ProductsCarrocel title="Relacionados" />
      </div>
    </main>
  </div>
);

export default Product;
