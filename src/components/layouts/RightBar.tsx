import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const RightBar = ({ children }: { children: ReactNode }) => {
  const isLoginPage = useLocation().pathname === '/login';
  const isAdminLogin = useLocation().pathname === '/admin/login';
  return (
    <RightBarComponent isLoginPage={isLoginPage} isAdminLogin={isAdminLogin}>
      {children}
    </RightBarComponent>
  );
};

export default RightBar;

const RightBarComponent = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  width: 350px;
  height: 100vh;
  background-color: ${({ isLoginPage, isAdminLogin }: { isLoginPage: boolean; isAdminLogin: boolean }) =>
    isLoginPage ? '#fff' : isAdminLogin ? '#fff' : 'var(--color-primary-010)'};
  border-top-left-radius: 50px;
  padding: 40px;
  box-sizing: border-box;
  @media (max-width: 1500px) {
    display: none;
  }
`;
