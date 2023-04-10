import { useAppSelector } from '@/hooks/useDispatchHooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  const userType = useAppSelector(state => {
    if (state.companyUser) {
      return 'company';
    } else {
      return 'applicant';
    }
  });
  const navigate = useNavigate();
  return (
    <Container>
      <img src='./images/404.png' alt='404' />
      <strong>페이지를 찾을 수 없습니다.</strong>
      <div className='text'>
        <p>원하시는 결과를 찾을 수 없습니다.</p>
        <p>올바른 주소를 입력하였는지 확인하세요. 자세한 내용은 사이트 소유자에게 문의하시기 바랍니다.</p>
      </div>
      <div className='buttons'>
        <button
          onClick={() => {
            navigate(`/${userType}`);
          }}
        >
          메인으로
        </button>
        <button onClick={() => navigate(-1)}>이전 페이지</button>
      </div>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  strong {
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    color: #4357ac;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 18px;
      line-height: 31px;
      text-align: center;
      color: #4b5563;
    }
  }
  .buttons {
    display: flex;
    gap: 60px;
    button {
      font-size: 23px;
      display: flex;
      width: 250px;
      height: 56px;
      border-radius: 34.5px;
      font-weight: 700;
      font-size: 21px;
    }
    button:first-child {
      background: #8294cd;
      line-height: 40px;
      color: white;
    }
    button:last-child {
      border: 2px solid #8294cd;
      color: #4357ac;
      background: white;
    }
  }
`;
