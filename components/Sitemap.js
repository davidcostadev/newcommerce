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
            <MenuItem><Link>Sobre Nós</Link></MenuItem>
            <MenuItem><Link>Serviço ao Cliente</Link></MenuItem>
            <MenuItem><Link>Política de Privacidade</Link></MenuItem>
            <MenuItem><Link>Pedidos e Retornos</Link></MenuItem>
            <MenuItem><Link>Fale conosco</Link></MenuItem>
          </Menu>
        </div>
        <div className="col-md-3">
          <SiteMapTitle>Porque Comprar Conosco?</SiteMapTitle>
          <Menu vertical>

            <MenuItem><Link>Entrega e Delivery</Link></MenuItem>
            <MenuItem><Link>Compra Segura</Link></MenuItem>
            <MenuItem><Link>Afiliados</Link></MenuItem>
            <MenuItem><Link>Atacado</Link></MenuItem>
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
            <MenuItem><Link>Lista de Desejo</Link></MenuItem>
            <MenuItem><Link>Rastrear Entrega</Link></MenuItem>
            <MenuItem><Link>Meus Pedidos</Link></MenuItem>
            <MenuItem><Link>Ajuda</Link></MenuItem>
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
