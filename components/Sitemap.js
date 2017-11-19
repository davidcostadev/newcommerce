import React from 'react'
// import PropTypes from 'prop-types';

import styles from '../assets/scss/App.scss'

const Sitemap = () => (
  <div className={styles.sitemaps}>
    <div className={`container ${styles.container}`}>
      <div className="row">

        <div className="col-md-3">
          <div className={styles.sitemap}>
            <h3 className={styles.sitemapTitle}>Informações</h3>
            <ul className={`${styles.sitemapMenu} ${styles.menu} ${styles.menuVertical}`}>
              <li className={styles.menuItem}><a href="#">Sobre Nós</a></li>
              <li className={styles.menuItem}><a href="#">Serviço ao Cliente</a></li>
              <li className={styles.menuItem}><a href="#">Política de Privacidade</a></li>
              <li className={styles.menuItem}><a href="#">Pedidos e Retornos</a></li>
              <li className={styles.menuItem}><a href="#">Fale conosco</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className={styles.sitemap}>
            <h3 className={styles.sitemapTitle}>Porque Comprar Conosco?</h3>
            <ul className={`${styles.sitemapMenu} ${styles.menu} ${styles.menuVertical}`}>
              <li className={styles.menuItem}><a href="#">Entrega e Delivery</a></li>
              <li className={styles.menuItem}><a href="#">Compra Segura</a></li>
              <li className={styles.menuItem}><a href="#">Afiliados</a></li>
              <li className={styles.menuItem}><a href="#">Atacado</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className={styles.sitemap}>
            <h3 className={styles.sitemapTitle}>Minha Conta</h3>
            <ul className={`${styles.sitemapMenu} ${styles.menu} ${styles.menuVertical}`}>
              <li className={styles.menuItem}><a href="#">Entrar</a></li>
              <li className={styles.menuItem}><a href="#">Ver Carrinho</a></li>
              <li className={styles.menuItem}><a href="#">Lista de Desejo</a></li>
              <li className={styles.menuItem}><a href="#">Rastrear Entrega</a></li>
              <li className={styles.menuItem}><a href="#">Meus Pedidos</a></li>
              <li className={styles.menuItem}><a href="#">Ajuda</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          <div className={styles.sitemap}>
            <h3 className={styles.sitemapTitle}>Newsletter e Social</h3>
            <div className={styles.sitemapBody}>
              <form action="#" className="form">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="email@dominio.com.br" />
                  <div className="input-group-btn"><button className="btn btn-primary"><i className="ion-ios-search" /></button></div>
                </div>
              </form>

              <div className={styles.social}>
                <a href="#" className={`${styles.socialIcon} ${styles.socialFacebook}`}><i className="ion-social-facebook-outline" /></a>
                <a href="#" className={`${styles.socialIcon} ${styles.socialFacebook}`}><i className="ion-social-instagram-outline" /></a>
                <a href="#" className={`${styles.socialIcon} ${styles.socialFacebook}`}><i className="ion-social-googleplus-outline" /></a>
                <a href="#" className={`${styles.socialIcon} ${styles.socialFacebook}`}><i className="ion-social-youtube-outline" /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default Sitemap
