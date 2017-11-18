import React from 'react';
import Link from 'next/link';
import styles from '../assets/scss/App.scss';

const BannerMosaico = () => (
  <div className={styles.bannerMosaicoGrid}>
    <div className={styles.bannerMosaicoCol}>
      <div className={styles.bannerMosaicoRow}>
        <div className={`${styles.bannerMosaico} ${styles.bannerMosaicoCenter}`} style={{ backgroundImage: 'url(\'/static/img/phone.jpg\')' }}>
          <span className={styles.bannerText1}>Celulares</span>
          <span className={styles.bannerText2}>Tecnologia de Ponta</span>
          <Link href="/product">
            <a className={styles.bannerBtn}>Ver Ofertas</a>
          </Link>
        </div>
      </div>
    </div>
    <div className={styles.bannerMosaicoCol}>
      <div className={styles.bannerMosaicoRow}>
        <div className={`${styles.bannerMosaico} ${styles.bannerMosaicoLeft}`} style={{ backgroundImage: 'url(\'/static/img/notebook.jpg\')' }}>
          <span className={styles.bannerText1}>Notebook</span>
          <span className={styles.bannerText2}>Ultima Geração</span>
          <Link href="/product">
            <a className={styles.bannerBtn}>Ver Ofertas</a>
          </Link>
        </div>
      </div>
      <div className={styles.bannerMosaicoRow}>
        <div className={`${styles.bannerMosaico} ${styles.bannerMosaicoRight}`} style={{ backgroundImage: 'url(\'/static/img/perfume.jpg\')' }}>
          <span className={styles.bannerText1}>Perfumes</span>
          <span className={styles.bannerText2}>Melhores Marcas</span>
          <Link href="/product">
            <a className={styles.bannerBtn}>Ver Ofertas</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default BannerMosaico;
