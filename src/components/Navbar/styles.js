import styled from '@emotion/styled';

export const Nav = styled.div`
  display: grid;
  grid-template-columns: 25% 45% 30%;
  grid-template-rows: 100%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 75px;
  background-color: #20204f;
`;

export const NavItem = styled.div`
  padding: 5px;
`;

export const NavTitle = styled.h2`
  color:#f8fbfd;
  margin: 0;
`;

export const NavInformation = styled.h3`
  color: #f8fbfd;
  text-decoration: underline;
`;
