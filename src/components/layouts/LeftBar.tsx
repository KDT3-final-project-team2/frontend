import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { navigations } from '../../constants/navigation';

const LeftBar = ({ isSignUpPage }: { isSignUpPage: boolean }) => {
  const path = useLocation().pathname;
  const [, presentMainPath, presentSubPath] = path.split('/');
  const menus = navigations[presentMainPath];

  return (
    <LeftBarComponent>
      <div style={{ display: 'flex', gap: '11px', margin: '35px 44px' }}>
        <img src='../../src/assets/logo.svg' alt='로고' width='50' />
        <h1 style={{ fontSize: '22px', fontWeight: '700', color: 'white' }}>
          medi <br /> match
        </h1>
      </div>

      {isSignUpPage ? (
        <div style={{ display: 'flex', gap: '25px', marginTop: '150px' }}>
          <Box isActive={true} />
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            {presentMainPath === 'applicant' ? '개인 회원' : '병원 회원'}
          </div>
        </div>
      ) : (
        <NavigateComponent>
          <ul>
            {Object.keys(menus).map(menu => {
              return (
                <Link to={menu === 'home' ? `${presentMainPath}` : `${presentMainPath}/${menu}`} key={menu}>
                  <Box isActive={menu === presentSubPath || (presentSubPath === undefined && menu === 'home')} />
                  <div style={{ display: 'flex', gap: '25px', alignItems: 'center', height: '20px' }}>
                    <img src={`../../src/assets/icons/${menu}.png`} alt={menu} width='20px' />
                    <p>{menus[menu]}</p>
                  </div>
                </Link>
              );
            })}
          </ul>
        </NavigateComponent>
      )}
    </LeftBarComponent>
  );
};

export default LeftBar;

const LeftBarComponent = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 330px;
  background-color: var(--color-primary-100);
  color: #f2f9fe;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const NavigateComponent = styled.div`
  ul {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
  }
  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 45px;
    color: #f2f9fe;
    font-size: 20px;
  }
`;

const Box = styled.div`
  height: 74px;
  width: 15px;
  border-radius: 0px 12px 12px 0;
  background-color: ${({ isActive }: { isActive: boolean }) => (isActive ? '#f2f9fe' : 'transparent')};
`;
