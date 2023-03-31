import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import RightBar from '../components/layouts/RightBar';

const Home = () => {
  const isLoginPage = useLocation().pathname === '/login';
  const [userType, setUserType] = useState('');

  return (
    <HomeComponent isLoginPage={isLoginPage}>
      <div style={{ position: 'fixed', left: 0, display: 'flex', flexDirection: 'column' }}>
        임시링크 : <Link to='/company'>병원 메인 대시보드 / </Link>
        <Link to='/applicant'>지원자 메인 대시보드 / </Link>
        <Link to='/admin'>슈퍼관리자 메인 대시보드</Link>
      </div>
      {isLoginPage ? (
        <img src='/logo.svg' width='230px' height='65px' />
      ) : (
        <img src='/logo.svg' width='230px' height='160px' />
      )}
      {isLoginPage ? <img src='/loginContent.png' /> : null}
      <strong>병원 채용 진행을 한눈에!</strong>
      <TextContent isLoginPage={isLoginPage}>
        <p>
          메디매치를 통해 병원 채용 관리자도! 입사지원자도! <br />
          채용 진행 과정을 한눈에 한번에 확인하세요
        </p>
      </TextContent>
      {isLoginPage ? null : (
        <LoginContent>
          <Link to='/login'>
            <Btn onClick={() => setUserType('기업')}>병원 회원 로그인</Btn>
          </Link>
          <Link to='/login'>
            <Btn onClick={() => setUserType('지원자')}>개인 회원 로그인</Btn>
          </Link>
        </LoginContent>
      )}
      {isLoginPage ? (
        <RightBar>
          <Outlet context={{ userType: userType }} />
        </RightBar>
      ) : (
        <SignUpContent>
          <div>
            <p>메디매치가 처음이라면?</p>
            <Link to='company/signup'>병원 회원가입</Link>|<Link to='applicant/signup'>개인 회원가입</Link>
          </div>
        </SignUpContent>
      )}
    </HomeComponent>
  );
};

export default Home;

export const HomeComponent = styled.div`
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
  p {
    text-align: center;
    line-height: 28px;
  }
  strong {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

export const TextContent = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: ${({ isLoginPage }: { isLoginPage: boolean }) => (isLoginPage ? '10px' : '0px')};
    margin-bottom: ${({ isLoginPage }: { isLoginPage: boolean }) => (isLoginPage ? '10px' : '50px')};
  }
`;

const Btn = styled.button`
  padding: 10px 25px;
  border-radius: 5px;
  background-color: #fff;
  color: var(--color-primary-100);
  font-size: 18px;
  font-weight: bold;
  border-radius: 28px;
  letter-spacing: -0.5px;
  color: #4357ac;
`;

const LoginContent = styled.div`
  display: flex;
  gap: 25px;
  a {
    :first-child {
      button {
        background-color: var(--color-yellow);
      }
    }
  }
`;

const SignUpContent = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
    p {
      color: #c6c6c6;
    }
    a {
      color: #fff;
    }
  }
`;
