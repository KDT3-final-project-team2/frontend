import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return <NavComponent>Nav</NavComponent>;
};

export default Nav;

const NavComponent = styled.nav`
  position: fixed;
  left: 0;
  top: 80px;
  width: 300px;
  height: 100vh;
  background-color: gray;
`;
