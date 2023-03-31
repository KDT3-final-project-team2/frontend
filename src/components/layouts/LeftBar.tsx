import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { navigations } from '../../constants/navigation';
import AlertModal from '../common/AlertModal';

const LeftBar = ({ isSignUpPage }: { isSignUpPage: boolean }) => {
  const path = useLocation().pathname;
  const [, presentMainPath, presentSubPath] = path.split('/');
  const menus = navigations[presentMainPath];

  return (
    <LeftBarComponent>
      <div style={{ display: 'flex', gap: '11px', margin: '35px 44px' }}>
        <img src='/logo.svg' alt='로고' width='140' />
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
                    <img src={`/icons/${menu}.png`} alt={menu} width='20px' />
                    <p>{menus[menu]}</p>
                  </div>
                </Link>
              );
            })}
          </ul>
        </NavigateComponent>
      )}

      {isSignUpPage || path.includes('admin') ? null : (
        <button className='qna' onClick={() => AlertModal({ message: '준비중인 서비스입니다.' })}>
          문의하기
        </button>
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

  .qna {
    width: 228px;
    height: 46px;
    color: #4357ac;
    font-weight: 700;
    font-size: 20px;
    background: #b3c2e7;
    border-radius: 10px;
    position: absolute;
    bottom: 32px;
    left: 27px;
  }
`;

const NavigateComponent = styled.div`
  ul {
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    p {
      padding-top: 2px;
    }
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
