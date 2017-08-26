<template>
  <div class="info-blocks">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="info-block">
            <div class="info-icon"><i class="ion-ios-cart-outline"></i></div>
            <div class="info-title">Entrega e Delivery</div>
            <div class="info-content">Estamos dedicados a entregar sua compra o mais rápido e acessível possível. Nós oferecemos uma gama de opções de entrega e pickup, para que você possa escolher o método de envio que melhor atenda às suas necessidades.</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="info-block">
            <div class="info-icon"><i class="ion-social-usd-outline"></i></div>
            <div class="info-title">Meios de Pagamento</div>
            <div class="info-content">Todo país e comprador têm seu método preferido para pagar on-line. Oferecer aos seus compradores escolhas de pagamento seguras e convenientes pode ajudar sua venda a funcionar sem problemas, obter feedback positivo e trazê-los de volta para mais.</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="info-block">
            <div class="info-icon"><i class="ion-ios-email-outline"></i></div>
            <div class="info-title">Fale Conosco</div>
            <div class="info-content">Deixe-nos uma linha ou nos dê um toque. Nós adoramos saber sobre sua experiência e estamos felizes em responder qualquer dúvida. Suas perguntas e comentários são importantes para nós.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '~assets/scss/vars.scss';

  .info-blocks {
    .info-block {

    }
  }

  .info-block {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 40px;

    .info-icon {
      font-size: 60px;
      color: $primary-color;
      margin-right: 20px;
    }
    .info-title {
      color: $primary-color;
      font-size: 28px;
    }
    .info-content {
      flex-grow: 2;
    }
  }
</style>
