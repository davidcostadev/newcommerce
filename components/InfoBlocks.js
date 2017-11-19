import React from 'react'
import PropTypes from 'prop-types'

import styles from '../assets/scss/App.scss'


const Block = props => (
  <div className={styles.infoBlock}>
    <div className={styles.infoIcon}><i className={props.icon} /></div>
    <div className={styles.infoTitle}>{props.title}</div>
    <div className={styles.infoContent}>{props.description}</div>
  </div>
)

Block.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}


const InfoBlocks = () => (
  <div className={styles.infoBlock}>
    <div className="row">
      <div className="col-md-4">
        <Block
          icon="ion-ios-cart-outline"
          title="Entrega e Delivery"
          description="Estamos dedicados a entregar sua compra o mais rápido e acessível possível. Nós oferecemos uma gama de opções de entrega e pickup, para que você possa escolher o método de envio que melhor atenda às suas necessidades."
        />
      </div>
      <div className="col-md-4">
        <Block
          icon="ion-social-usd-outline"
          title="Meios de Pagamento"
          description="Todo país e comprador têm seu método preferido para pagar on-line. Oferecer aos seus compradores escolhas de pagamento seguras e convenientes pode ajudar sua venda a funcionar sem problemas, obter feedback positivo e trazê-los de volta para mais."
        />
      </div>
      <div className="col-md-4">
        <Block
          icon="ion-ios-email-outline"
          title="Fale Conosco"
          description="Deixe-nos uma linha ou nos dê um toque. Nós adoramos saber sobre sua experiência e estamos felizes em responder qualquer dúvida. Suas perguntas e comentários são importantes para nós."
        />
      </div>
    </div>
  </div>
)

export default InfoBlocks
