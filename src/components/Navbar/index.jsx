import React from 'react';
import { Nav, NavItem, NavTitle, NavInformation } from './styles';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { usePokemonState } from '@/hooks/PokemonContext';
import pokeIcon from '@/public/pokeIcon.svg';

const Navbar = ({ type, ...props }) => {
  const ctx = usePokemonState();

  switch (type) {
    case 'detail':
      return (
        <Nav>
          <NavItem>
            <ArrowLeftOutlined
              style={{ fontSize: '1.5em' }}
              onClick={() => props.handleBack()}
            />
          </NavItem>
          <NavItem>
            <NavTitle>{props?.title}</NavTitle>
          </NavItem>
          <NavItem></NavItem>
        </Nav>
      );
    default:
      return (
        <Nav>
          <NavItem></NavItem>
          <NavItem>
            <img src={pokeIcon} alt='tokemon' height='40px' width='40px' />
          </NavItem>
          <NavItem>
            <NavInformation onClick={() => props.handleInventory()}>
              My Pokemon: {ctx.pokemons.length}
            </NavInformation>
          </NavItem>
        </Nav>
      );
  }
};

export default Navbar;
