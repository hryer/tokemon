import React from 'react';
import { Nav, NavItem } from './styles';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { usePokemonState } from '@/hooks/PokemonContext';
import pokeIcon from '@/public/pokeIcon.svg'

const Navbar = ({ type, ...props }) => {
  const ctx = usePokemonState();
  const { Title } = Typography;

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
          <NavItem><Title level={3}>{props?.title}</Title></NavItem>
          <NavItem> 
          </NavItem>
        </Nav>
      );
    default:
      return (
        <Nav>
          <NavItem></NavItem>
          <NavItem><img src={pokeIcon} alt="tokemon" height="40px" width="40px" /></NavItem>
          <NavItem>
            <a onClick={() => props.handleInventory()}>
              <Title level={5} underline >My Pokemon: {ctx.pokemons.length}</Title> 
            </a>
          </NavItem>
        </Nav>
      );
  }
};

export default Navbar;
