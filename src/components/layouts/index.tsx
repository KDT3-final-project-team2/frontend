import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const Layout = () => {
  return (
    <div style={{ position: 'relative' }}>
      <LeftBar />
      <MainSection>
        <Outlet />
      </MainSection>
      <RightBar />
    </div>
  );
};

export default Layout;

const MainSection = styled.main`
  min-height: 100vh;
  border-top-left-radius: 50px;
  margin-left: 280px;
  overflow: hidden;
  background-color: white;
  padding-left: 50px;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;
