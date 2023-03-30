import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { navigations } from '../../constants/navigation';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const Layout = () => {
  const path = useLocation().pathname;
  const isSignUpPage = path.includes('signup');
  const isAdminLogin = useLocation().pathname === '/admin/login';

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      {isAdminLogin ? null : <LeftBar isSignUpPage={isSignUpPage} />}
      <MainSection isSignUpPage={isSignUpPage} isAdminLogin={isAdminLogin}>
        <Outlet />
      </MainSection>
      {isAdminLogin ? null : !isSignUpPage ? <RightBar>{}</RightBar> : null}
    </div>
  );
};

export default Layout;

const MainSection = styled.main`
  position: absolute;
  left: ${({ isAdminLogin }: { isAdminLogin: boolean }) => (isAdminLogin ? '0' : '280px')};
  right: ${({ isSignUpPage, isAdminLogin }: { isSignUpPage: boolean; isAdminLogin: boolean }) =>
    isSignUpPage ? '0' : isAdminLogin ? '0' : '350px'};
  min-height: 100vh;
  border-top-left-radius: ${({ isAdminLogin }: { isAdminLogin: boolean }) => (isAdminLogin ? '0' : '50px')};
  overflow: hidden;
  background-color: white;
  /* padding-left: 50px; */
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
