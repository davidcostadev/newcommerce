import React from 'react';
import styles from '../assets/scss/App.scss';

const BannerMosaico = () => (
  <div className={styles.bannerMosaicoGrid}>
    <div className={styles.bannerMosaicoCol}>
      <div className={styles.bannerMosaicoRow}>
        <div className={`${styles.bannerMosaico} ${styles.bannerMosaicoCenter}`} style={{ backgroundImage: 'url(\'/img/phone.jpg\')' }}>
          <span className={styles.bannerText1}>Celulares</span>
          <span className={styles.bannerText2}>Tecnologia de Ponta</span>
          <button type="button" className={styles.bannerBtn}>Ver Ofertas</button>
        </div>
      </div>
    </div>
    <div className={styles.bannerMosaicoCol}>
      <div className={styles.bannerMosaicoRow}>
        <div className={`${styles.bannerMosaico} ${styles.bannerMosaicoLeft}`} style={{ backgroundImage: 'url(\'/img/notebook.jpg\')' }}>
          <span className={styles.bannerText1}>Notebook</span>
          <span className={styles.bannerText2}>Ultima Geração</span>
          <button type="button" className={styles.bannerBtn}>Ver Ofertas</button>
        </div>
      </div>
      <div className={styles.bannerMosaicoRow}>
        <div className={`${styles.bannerMosaico} ${styles.bannerMosaicoRight}`} style={{ backgroundImage: 'url(\'/img/perfume.jpg\')' }}>
          <span className={styles.bannerText1}>Perfumes</span>
          <span className={styles.bannerText2}>Melhores Marcas</span>
          <button type="button" className={styles.bannerBtn}>Ver Ofertas</button>
        </div>
      </div>
    </div>
  </div>
);

export default BannerMosaico;
