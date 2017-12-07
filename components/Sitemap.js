import React from 'react'

import {
  Menu,
  MenuItem,
  Container,
} from '../layout/Header'
import {
  SiteMap,
  SiteMapTitle,
  Social,
  SocialIcon,
} from '../layout/SiteMap'

const Sitemap = () => (
  <SiteMap>
    <Container>
      <div className="row">
        <div className="col-md-3">
          <SiteMapTitle>Informações</SiteMapTitle>
          <Menu vertical>
            <MenuItem><a>Sobre Nós</a></MenuItem>
            <MenuItem><a>Serviço ao Cliente</a></MenuItem>
            <MenuItem><a>Política de Privacidade</a></MenuItem>
            <MenuItem><a>Pedidos e Retornos</a></MenuItem>
            <MenuItem><a>Fale conosco</a></MenuItem>
          </Menu>
        </div>
        <div className="col-md-3">
          <SiteMapTitle>Porque Comprar Conosco?</SiteMapTitle>
          <Menu vertical>
            <MenuItem><a>Entrega e Delivery</a></MenuItem>
            <MenuItem><a>Compra Segura</a></MenuItem>
            <MenuItem><a>Afiliados</a></MenuItem>
            <MenuItem><a>Atacado</a></MenuItem>
          </Menu>
        </div>
        <div className="col-md-3">
          <SiteMapTitle>Minha Conta</SiteMapTitle>
          <Menu vertical>
            <MenuItem><a>Entrar</a></MenuItem>
            <MenuItem><a>Ver Carrinho</a></MenuItem>
            <MenuItem><a>Lista de Desejo</a></MenuItem>
            <MenuItem><a>Rastrear Entrega</a></MenuItem>
            <MenuItem><a>Meus Pedidos</a></MenuItem>
            <MenuItem><a>Ajuda</a></MenuItem>
          </Menu>
        </div>
        <div className="col-md-3">
          <SiteMapTitle>Newsletter e Social</SiteMapTitle>
          <form action="#" className="form">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="email@dominio.com.br" />
              <div className="input-group-btn"><button className="btn btn-primary"><i className="ion-ios-search" /></button></div>
            </div>
          </form>

          <Social>
            <SocialIcon><i className="ion-social-facebook-outline" /></SocialIcon>
            <SocialIcon><i className="ion-social-instagram-outline" /></SocialIcon>
            <SocialIcon><i className="ion-social-googleplus-outline" /></SocialIcon>
            <SocialIcon><i className="ion-social-youtube-outline" /></SocialIcon>
          </Social>
        </div>

      </div>
    </Container>
  </SiteMap>
)

export default Sitemap
