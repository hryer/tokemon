import React from 'react';
import { Nav, NavItem } from './styles';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { usePokemonState } from '@/hooks/PokemonContext';

const Navbar = ({ type, ...props }) => {
  const ctx = usePokemonState();
  console.log('haha');
  console.log(ctx.pokemons);
  console.log('haha');
  switch (type) {
    case 'detail':
      return (
        <Nav>
          <NavItem>
            <ArrowLeftOutlined
              style={{ fontSize: '36px' }}
              onClick={() => props.handleBack()}
            />
          </NavItem>
          <NavItem>{props?.title}</NavItem>
          <NavItem>
          </NavItem>
        </Nav>
      );
    default:
      return (
        <Nav>
          <NavItem></NavItem>
          <NavItem>Logo</NavItem>
          <NavItem>
            <a onClick={() => props.handleInventory()}>
              My Pokemon: {ctx.pokemons.length}
            </a>
          </NavItem>
        </Nav>
      );
  }
};

export default Navbar;
