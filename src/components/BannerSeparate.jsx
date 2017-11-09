import React from 'react';
import styles from '../assets/scss/App.scss';

const BannerSeparate = () => (
  <div className={styles.bannerSeparateGrid}>
    <div className={styles.bannerSeparateCol}>
      <div className={styles.bannerSeparateRow}>
        <div className={`${styles.bannerSeparate} ${styles.bannerSeparateRight}`} style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=\')' }}>
          <span className={styles.bannerText1}> 5 Din/3 Nema Tramontina </span>
          <span className={styles.bannerText2}>R$ 17,90</span>
          <button type="button" className={styles.bannerBtn}>Ver Detalhes</button>
        </div>
      </div>
    </div>
    <div className={styles.bannerSeparateCol}>
      <div className={styles.bannerSeparateRow}>
        <div className={`${styles.bannerSeparate} ${styles.bannerSeparateRight}`} style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1496878632226-93afc36151ab?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=\')' }}>
          <span className={styles.bannerText1}>Quadros De Distribuição Embutir</span>
          <span className={styles.bannerText2}>R$ 227,90</span>
          <button type="button" className={styles.bannerBtn}>Ver Detalhes</button>
        </div>
      </div>
    </div>
  </div>
);

export default BannerSeparate;
