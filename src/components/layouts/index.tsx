import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { navigations } from '../../constants/navigation';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const Layout = () => {
  const path = useLocation().pathname;
  const isSignUpPage = path.includes('signup');
  const isAdminPage = path.includes('admin');
  const isAdminLogin = useLocation().pathname === '/admin/login';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      {isAdminLogin ? null : <LeftBar isSignUpPage={isSignUpPage} />}
      <MainSection isSignUpPage={isSignUpPage} isAdminLogin={isAdminLogin}>
        <Outlet />
        <ScrollTop onClick={() => scrollToTop()} isSignUpPage={isSignUpPage} isAdminPage={isAdminPage}>
          <img src='/images/scroll_top.png' alt='스크롤' />
        </ScrollTop>
      </MainSection>
      {isAdminLogin || isAdminPage ? null : !isSignUpPage ? <RightBar>{}</RightBar> : null}
    </div>
  );
};

export default Layout;

const MainSection = styled.main`
  position: absolute;
  left: ${({ isAdminLogin }: { isAdminLogin: boolean }) => (isAdminLogin ? '0' : '280px')};
  right: ${({ isSignUpPage, isAdminLogin }: { isSignUpPage: boolean; isAdminLogin: boolean }) =>
    isSignUpPage ? '0' : isAdminLogin ? '0' : '450px'};
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

interface IScrollTopProps {
  isAdminPage: boolean;
  isSignUpPage: boolean;
}

const ScrollTop = styled.div<IScrollTopProps>`
  width: 67px;
  height: 67px;
  border-radius: 100%;
  position: fixed;
  right: ${props => (props.isAdminPage ? '30px' : '480px')};
  bottom: 34px;
  background-color: white;
  display: ${props => (props.isSignUpPage ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  @media (max-width: 1500px) {
    right: 30px;
  }
`;
