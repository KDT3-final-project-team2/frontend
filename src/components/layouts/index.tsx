import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Nav from './Nav';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Sidebar />
      <MainSection>
        <Outlet />
      </MainSection>
    </>
  );
};

export default Layout;

const MainSection = styled.main`
  margin-top: 100px;
`;
