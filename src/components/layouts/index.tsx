import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { navigations } from '../../constants/navigation';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const Layout = () => {
  const path = useLocation().pathname;
  const isSignUpPage = path.includes('signup');

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <LeftBar isSignUpPage={isSignUpPage} />
      <MainSection isSignUpPage={isSignUpPage}>
        <Outlet />
      </MainSection>
      {!isSignUpPage ? <RightBar>{}</RightBar> : null}
    </div>
  );
};

export default Layout;

const MainSection = styled.main`
  position: absolute;
  left: 280px;
  right: ${({ isSignUpPage }: { isSignUpPage: boolean }) => (isSignUpPage ? '0' : '450px')};
  min-height: 100vh;
  border-top-left-radius: 50px;
  overflow: hidden;
  background-color: white;
  padding-left: 50px;
  box-sizing: border-box;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  z-index: 10;
  @media (max-width: 1000px) {
    left: 0;
  }
  @media (max-width: 1500px) {
    right: 0;
  }
`;
