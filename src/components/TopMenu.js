import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TopMenu = (props) => {
  const { activeItem } = props;
  return (
    <Menu fixed="top" pointing secondary>
      <Menu.Item header>APP_TITLE</Menu.Item>
      <Menu.Item name="Home" as={Link} to="/" active={activeItem === 'home'} />
      <Menu.Item name="About" as={Link} to="/about" active={activeItem === 'about'} />
      <Menu.Menu position="right">
        <Menu.Item name="login" as={Link} to="/login" active={activeItem === 'login'} >
          Login
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

TopMenu.propTypes = {
  activeItem: PropTypes.string.isRequired
};

export default TopMenu;
