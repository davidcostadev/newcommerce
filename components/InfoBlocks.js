import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../layout/theme'

const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 40px;
`
const InfoIcon = styled.div`
  font-size: 60px;
  color: ${theme.colorPrimary};
  margin-right: 20px;
`
const InfoTitle = styled.div`
  color: ${theme.colorPrimary};
  font-size: 28px;
`
const InfoContent = styled.div`
  flex-grow: 2;
`


const Block = props => (
  <InfoBlock>
    <InfoIcon><i className={props.icon} /></InfoIcon>
    <InfoTitle>{props.title}</InfoTitle>
    <InfoContent>{props.description}</InfoContent>
  </InfoBlock>
)

Block.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}


const InfoBlocks = () => {
  const textDelivery = `Estamos dedicados a entregar sua compra o mais rápido e acessível possível.
   Nós oferecemos uma gama de opções de entrega e pickup, para que você possa escolher o método de
   envio que melhor atenda às suas necessidades.`
  const textPayment = `Todo país e comprador têm seu método preferido para pagar on-line. Oferecer
  aos seus compradores escolhas de pagamento seguras e convenientes pode ajudar sua venda a
  funcionar sem problemas, obter feedback positivo e trazê-los de volta para mais.`
  const textContact = `Deixe-nos uma linha ou nos dê um toque. Nós adoramos saber sobre sua
  experiência e estamos felizes em responder qualquer dúvida. Suas perguntas e comentários são
  importantes para nós.`

  return (
    <div className="row">
      <div className="col-md-4">
        <Block
          icon="ion-ios-cart-outline"
          title="Entrega e Delivery"
          description={textDelivery}
        />
      </div>
      <div className="col-md-4">
        <Block
          icon="ion-social-usd-outline"
          title="Meios de Pagamento"
          description={textPayment}
        />
      </div>
      <div className="col-md-4">
        <Block
          icon="ion-ios-email-outline"
          title="Fale Conosco"
          description={textContact}
        />
      </div>
    </div>
  )
}

export default InfoBlocks
