import React from 'react';
import styles from '../assets/scss/App.scss';

const BannerMosaico = () => (
  <div className={styles.bannerMosaicoGrid}>
    <div className={styles.bannerMosaicoCol}>
      <div className={styles.bannerMosaicoRow}>
        <div className={`${styles.bannerMosaico} ${styles.bannerMosaicoCenter}`} style={{ backgroundImage: 'url(\'/img/phone.jpg\')' }}>
          <span className={styles.bannerText1}>Dummy text</span>
          <span className={styles.bannerText2}>Lorem Ipsum is simply</span>
          <button type="button" className={styles.bannerBtn}>Comprar Agora</button>
        </div>
      </div>
    </div>
    <div className={styles.bannerMosaicoCol}>
      <div className={styles.bannerMosaicoRow}>
        <div className={`${styles.bannerMosaico} ${styles.bannerMosaicoLeft}`} style={{ backgroundImage: 'url(\'/img/notebook.jpg\')' }}>
          <span className={styles.bannerText1}>Industry standard</span>
          <span className={styles.bannerText2}>Printing and typesetting </span>
          <button type="button" className={styles.bannerBtn}>Comprar Agora</button>
        </div>
      </div>
      <div className={styles.bannerMosaicoRow}>
        <div className={`${styles.bannerMosaico} ${styles.bannerMosaicoRight}`} style={{ backgroundImage: 'url(\'/img/perfume.jpg\')' }}>
          <span className={styles.bannerText1}>Printer took</span>
          <span className={styles.bannerText2}>Specimen Book</span>
          <button type="button" className={styles.bannerBtn}>Comprar Agora</button>
        </div>
      </div>
    </div>
  </div>
);

export default BannerMosaico;
