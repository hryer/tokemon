import React from 'react';
import { Nav, NavItem } from './styles';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Navbar = ({ type, ...props }) => {
  switch (type) {
    case 'detail':
      return (
        <Nav>
          <NavItem>
            <ArrowLeftOutlined style={{ fontSize: '36px' }} onClick={() => props.handleBack()} />
          </NavItem>
          <NavItem>Logo</NavItem>
          <NavItem></NavItem>
        </Nav>
      );
    default:
      return <Nav>Navbar</Nav>;
  }
};

export default Navbar;
