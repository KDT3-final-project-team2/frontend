import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return <SidebarComponent>Sidebar</SidebarComponent>;
};

export default Sidebar;

const SidebarComponent = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background-color: tomato;
`;
