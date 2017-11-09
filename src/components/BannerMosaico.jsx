import React from 'react';
import styles from '../assets/scss/App.scss';

const BannerMosaico = () => (
  <div className={styles.bannerMosaicoGrid}>
    <div className={styles.bannerMosaicoCol}>
      <div className={styles.bannerMosaicoRow}>
        <div className={`${styles.bannerMosaico} ${styles.bannerMosaicoCenter}`} style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1487243528516-7fa712e910f4?dpr=1&auto=format&fit=crop&w=1500&h=998&q=80&cs=tinysrgb&crop=\')' }}>
          <span className={styles.bannerText1}>Dummy text</span>
          <span className={styles.bannerText2}>Lorem Ipsum is simply</span>
          <button type="button" className={styles.bannerBtn}>Comprar Agora</button>
        </div>
      </div>
    </div>
    <div className={styles.bannerMosaicoCol}>
      <div className={styles.bannerMosaicoRow}>
        <div className={`${styles.bannerMosaico} ${styles.bannerMosaicoLeft}`} style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1491472253230-a044054ca35f?dpr=1&auto=format&fit=crop&w=1500&h=984&q=80&cs=tinysrgb&crop=\')' }}>
          <span className={styles.bannerText1}>Industry standard</span>
          <span className={styles.bannerText2}>Printing and typesetting </span>
          <button type="button" className={styles.bannerBtn}>Comprar Agora</button>
        </div>
      </div>
      <div className={styles.bannerMosaicoRow}>
        <div className={`${styles.bannerMosaico} ${styles.bannerMosaicoRight}`} style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1458538977777-0549b2370168?dpr=1&auto=format&fit=crop&w=1500&h=996&q=80&cs=tinysrgb&crop=\')' }}>
          <span className={styles.bannerText1}>Printer took</span>
          <span className={styles.bannerText2}>Specimen Book</span>
          <button type="button" className={styles.bannerBtn}>Comprar Agora</button>
        </div>
      </div>
    </div>
  </div>
);

export default BannerMosaico;
