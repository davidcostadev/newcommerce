<template>
  <footer id="footer-page">
    <div class="sitemaps">
      <div class="container">
        <div class="row">

          <div class="col-md-3">
            <div class="sitemap">
              <h3 class="sitemap-title">Informações</h3>
              <ul class="sitemap-menu menu menu-vertical">
                <li class="menu-item"><a href="#">Sobre Nós</a></li>
                <li class="menu-item"><a href="#">Serviço ao Cliente</a></li>
                <li class="menu-item"><a href="#">Política de Privacidade</a></li>
                <li class="menu-item"><a href="#">Pedidos e Retornos</a></li>
                <li class="menu-item"><a href="#">Fale conosco</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="sitemap">
              <h3 class="sitemap-title">Porque Comprar Conosco?</h3>
              <ul class="sitemap-menu menu menu-vertical">
                <li class="menu-item"><a href="#">Entrega e Delivery</a></li>
                <li class="menu-item"><a href="#">Compra Segura</a></li>
                <li class="menu-item"><a href="#">Afiliados</a></li>
                <li class="menu-item"><a href="#">Atacado</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="sitemap">
              <h3 class="sitemap-title">Minha Conta</h3>
              <ul class="sitemap-menu menu menu-vertical">
                <li class="menu-item"><a href="#">Entrar</a></li>
                <li class="menu-item"><a href="#">Ver Carrinho</a></li>
                <li class="menu-item"><a href="#">Lista de Desejo</a></li>
                <li class="menu-item"><a href="#">Rastrear Entrega</a></li>
                <li class="menu-item"><a href="#">Meus Pedidos</a></li>
                <li class="menu-item"><a href="#">Ajuda</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="sitemap">
              <h3 class="sitemap-title">Newsletter e Social</h3>
              <div class="sitemap-body">
                <form action="#" class="form">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="email@dominio.com.br">
                    <div class="input-group-btn"><button class="btn btn-primary"><i class="ion-ios-search"></i></button></div>
                  </div>
                </form>

                <div class="social">
                  <a href="#" class="social-icon social-facebook"><i class="ion-social-facebook-outline"></i></a>
                  <a href="#" class="social-icon social-facebook"><i class="ion-social-instagram-outline"></i></a>
                  <a href="#" class="social-icon social-facebook"><i class="ion-social-googleplus-outline"></i></a>
                  <a href="#" class="social-icon social-facebook"><i class="ion-social-youtube-outline"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="copy">
      <div class="container">
        <div class="copy-col">
          2017 Todos os Direitos Reservados
        </div>
        <div class="copy-col">
          <a href="#">newCommerce</a> Os produtos que você curte e o melhor serviço da internet.
        </div>
        <div class="copy-col">
          Desenvolvidor por<a href="#"> davidcosta.com.br</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  @import '~assets/scss/vars.scss';

  #footer-page {
    background-color: $color-gray900;
    color: $color-gray50;
    padding-top: 40px;
  }

  .sitemaps {
    .sitemap {

    }
  }

  .sitemap {
    .sitemap-title {
      font-size: 18px;
      margin-bottom: 10px;
      padding-bottom: 20px;
      border-bottom: 1px solid $color-gray700;

    }
    .sitemap-body {

    }
    .sitemap-menu {

      a {
        color: $color-indigo;
        &:hover {
          color: lighten($color-indigo, 15%)
        }
        &:active {
          color: lighten($color-indigo, 30%)
        }
      }

    }
  }

  .menu {
    display: flex;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;

    &.menu-vertical {
      flex-direction: column;
    }

    .menu-item {
      a {
        &:hover {

        }
        &:active {

        }
      }
    }
  }

  .social {
    display: flex;
    margin-top: 20px;
    margin-bottom: 30px;

    .social-icon {
      color: $color-gray100;
      border: 1px solid $color-gray100;
      border-radius: 50%;
      width: 50px;
      text-align: center;

      &:hover {
        border-color: $primary-color;
        background-color: $primary-color;
        color: $color-gray900;
      }
      &:active {
        border-color: darken($primary-color, 10%);
        background-color: darken($primary-color, 10%);
        color: $color-gray900;
      }

      i {
        font-size: 32px;
      }
    }
    .social-icon+.social-icon {
      margin-left: 20px;
    }
  }

  .copy {
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid $color-gray700;
    font-size: 14px;

    .container {
      display: flex;
      justify-content: space-between;
    }
    .copy-col {

    }
  }
</style>
