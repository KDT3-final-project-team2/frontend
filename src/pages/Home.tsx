import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import RightBar from '../components/layouts/RightBar';

const Home = () => {
  const isLoginPage = useLocation().pathname === '/login';

  return (
    <HomeComponent isLoginPage={isLoginPage}>
      <div>
        임시링크 : <Link to='/company'>병원 메인 대시보드 / </Link>
        <Link to='/applicant'>지원자 메인 대시보드 / </Link>
        <Link to='/admin'>슈퍼관리자 메인 대시보드</Link>
      </div>
      <div style={{ display: 'flex', gap: '35px' }}>
        <img src='./src/assets/logo.svg' alt='로고' width='200' />
        <h1 style={{ fontSize: '71px', fontWeight: '700' }}>
          medi <br /> match
        </h1>
      </div>
      <strong style={{ fontSize: '50px', fontWeight: '700' }}>병원 채용 진행을 한눈에!</strong>
      <div
        style={{
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '34px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <p>메디매치를 통해 병원 채용 관리자도! 입사지원자도! </p>
        <p>채용 진행 과정을 한눈에 한번에 확인하세요</p>
      </div>
      {!isLoginPage ? (
        <Link to='login' style={{ color: '#4357AC', fontWeight: 700 }}>
          <Btn>로그인</Btn>
        </Link>
      ) : null}

      <p style={{ color: '#C6C6C6', margin: '25px 0 5px' }}>메디매치가 처음이라면?</p>
      <div style={{ display: 'flex', gap: '30px' }}>
        <Link to='applicant/signup' style={{ color: 'white' }}>
          개인 회원가입
        </Link>
        |
        <Link to='company/signup' style={{ color: 'white' }}>
          병원 회원가입
        </Link>
      </div>
      {isLoginPage ? (
        <RightBar>
          <Outlet />
        </RightBar>
      ) : null}
    </HomeComponent>
  );
};

export default Home;

const HomeComponent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-primary-100);
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: var(--color-light-gray);
  padding-right: ${({ isLoginPage }: { isLoginPage: boolean }) => (isLoginPage ? '450px' : '0')};
`;

const Btn = styled.button`
  padding: 8px 50px;
  border-radius: 5px;
  background-color: var(--color-primary-020);
  color: var(--color-primary-100);
  font-size: 18px;
  font-weight: 700;
  border-radius: 28px;
`;
