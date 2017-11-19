import React from 'react'
import Link from 'next/link'
import styles from '../assets/scss/App.scss'

const BannerSeparate = () => (
  <div className={styles.bannerSeparateGrid}>
    <div className={styles.bannerSeparateCol}>
      <div className={styles.bannerSeparateRow}>
        <div className={`${styles.bannerSeparate} ${styles.bannerSeparateRight}`} style={{ backgroundImage: 'url(\'/static/img/camera.jpg\')' }}>
          <span className={styles.bannerText1}>Limpador de Tela</span>
          <span className={styles.bannerText2}>R$ 17,90</span>
          <Link href="/product">
            <a className={styles.bannerBtn}>Ver Detalhes</a>
          </Link>
        </div>
      </div>
    </div>
    <div className={styles.bannerSeparateCol}>
      <div className={styles.bannerSeparateRow}>
        <div className={`${styles.bannerSeparate} ${styles.bannerSeparateRight}`} style={{ backgroundImage: 'url(\'/static/img/mouse.jpg\')' }}>
          <span className={styles.bannerText1}>Mouse Mac</span>
          <span className={styles.bannerText2}>R$ 227,90</span>
          <Link href="/product">
            <a className={styles.bannerBtn}>Ver Detalhes</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default BannerSeparate
