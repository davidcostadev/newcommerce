import React from 'react'
import { RouterLink } from '../layout/Html'
import { Link } from '../routes'
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
            <MenuItem>
              <Link route="/"><RouterLink href="/">Sobre Nós</RouterLink></Link>
            </MenuItem>
            <MenuItem>
              <Link route="/"><RouterLink href="/">Serviço ao Cliente</RouterLink></Link>
            </MenuItem>
            <MenuItem>
              <Link route="/"><RouterLink href="/">Política de Privacidade</RouterLink></Link>
            </MenuItem>
            <MenuItem>
              <Link route="/"><RouterLink href="/">Pedidos e Retornos</RouterLink></Link>
            </MenuItem>
            <MenuItem>
              <Link route="/contact"><RouterLink href="/contact">Fale conosco</RouterLink></Link>
            </MenuItem>
          </Menu>
        </div>
        <div className="col-md-3">
          <SiteMapTitle>Porque Comprar Conosco?</SiteMapTitle>
          <Menu vertical>
            <MenuItem>
              <Link route="/"><RouterLink href="/">Entrega e Delivery</RouterLink></Link>
            </MenuItem>
            <MenuItem>
              <Link route="/"><RouterLink href="/">Compra Segura</RouterLink></Link>
            </MenuItem>
            <MenuItem>
              <Link route="/"><RouterLink href="/">Afiliados</RouterLink></Link>
            </MenuItem>
            <MenuItem>
              <Link route="/"><RouterLink href="/">Atacado</RouterLink></Link>
            </MenuItem>
          </Menu>
        </div>
        <div className="col-md-3">
          <SiteMapTitle>Minha Conta</SiteMapTitle>
          <Menu vertical>
            <ShowToGuest>
              <MenuItem>
                <Link route="login"><RouterLink href="/login">Entrar</RouterLink></Link>
              </MenuItem>
            </ShowToGuest>
            <ShowToUser>
              <MenuItem>
                <Link route="dashboard">
                  <RouterLink href="/dashboard">Minha Conta</RouterLink>
                </Link>
              </MenuItem>
            </ShowToUser>
            <MenuItem>
              <Link route="cart"><RouterLink href="/cart">Ver Carrinho</RouterLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link route="/"><RouterLink href="/">Lista de Desejo</RouterLink></Link>
            </MenuItem>
            <MenuItem>
              <Link route="/"><RouterLink href="/">Rastrear Entrega</RouterLink></Link>
            </MenuItem>
            <MenuItem>
              <Link route="/"><RouterLink href="/">Meus Pedidos</RouterLink></Link>
            </MenuItem>
            <MenuItem>
              <Link route="/"><RouterLink href="/">Ajuda</RouterLink></Link>
            </MenuItem>
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
