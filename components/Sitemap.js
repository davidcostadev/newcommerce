import React from 'react'
import { Link } from '../layout/Html'
import { Container } from '../layout/Pages'
import ShowToGuest from './permissions/ShowToGuest'
import ShowToUser from './permissions/ShowToUser'

import {
  Menu,
  MenuItem,
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
            <MenuItem><Link route="/"><a>Sobre Nós</a></Link></MenuItem>
            <MenuItem><Link route="/"><a>Serviço ao Cliente</a></Link></MenuItem>
            <MenuItem><Link route="/"><a>Política de Privacidade</a></Link></MenuItem>
            <MenuItem><Link route="/"><a>Pedidos e Retornos</a></Link></MenuItem>
            <MenuItem><Link route="/"><a>Fale conosco</a></Link></MenuItem>
          </Menu>
        </div>
        <div className="col-md-3">
          <SiteMapTitle>Porque Comprar Conosco?</SiteMapTitle>
          <Menu vertical>

            <MenuItem><Link route="/"><a>Entrega e Delivery</a></Link></MenuItem>
            <MenuItem><Link route="/"><a>Compra Segura</a></Link></MenuItem>
            <MenuItem><Link route="/"><a>Afiliados</a></Link></MenuItem>
            <MenuItem><Link route="/"><a>Atacado</a></Link></MenuItem>
          </Menu>
        </div>
        <div className="col-md-3">
          <SiteMapTitle>Minha Conta</SiteMapTitle>
          <Menu vertical>
            <ShowToGuest>
              <MenuItem><Link route="login"><a>Entrar</a></Link></MenuItem>
            </ShowToGuest>
            <ShowToUser>
              <MenuItem><Link route="dashboard"><a>Minha Conta</a></Link></MenuItem>
            </ShowToUser>
            <MenuItem><Link route="cart"><a>Ver Carrinho</a></Link></MenuItem>
            <MenuItem><Link route="/"><a>Lista de Desejo</a></Link></MenuItem>
            <MenuItem><Link route="/"><a>Rastrear Entrega</a></Link></MenuItem>
            <MenuItem><Link route="/"><a>Meus Pedidos</a></Link></MenuItem>
            <MenuItem><Link route="/"><a>Ajuda</a></Link></MenuItem>
          </Menu>
        </div>
        <div className="col-md-3">
          <SiteMapTitle>Newsletter e Social</SiteMapTitle>
          <form action="#" className="form">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="email@dominio.com.br" />
              <div className="input-group-btn">
                <button className="btn btn-primary">
                  <i className="ion-ios-search" />
                </button>
              </div>
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
