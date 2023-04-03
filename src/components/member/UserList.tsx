import Avvvatars from 'avvvatars-react';
import React, { useState } from 'react';
import styled from 'styled-components';

const UserList = ({ index, user, userType }: { index: number; user: any; userType: string }) => {
  const [open, setOpen] = useState(index === 0 ? true : false);

  return (
    <ListComponent>
      <Head onClick={() => setOpen(!open)} open={open}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '32px' }}>
          <Avvvatars style='shape' value={'메디매치'}></Avvvatars>
          <p className='name'>메디매치</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '32px' }}>
          <img src='/icons/edit.png' alt='수정' />
          <img src='/icons/trashcan.png' alt='삭제' />
        </div>
      </Head>

      <Body>
        {open ? (
          <>
            <div className='horizonLine'></div>
            <div className='content'>
              <h5>{userType} 정보</h5>
              <div className='info'>
                <div>
                  <p>이메일</p>
                  <p className='border'>{'qwer@naver.com'}</p>
                </div>
                <div>
                  <p>대표자명</p>
                  <p className='border'>{'qwer@naver.com'}</p>
                </div>
                <div>
                  <p>사업자</p>
                  <p className='border'>{'qwer@naver.com'}</p>
                </div>
                <div>
                  <p>대표전화</p>
                  <p className='border'>{'qwer@naver.com'}</p>
                </div>
                <div>
                  <p>주소</p>
                  <p className='border'>{'qwer@naver.com'}</p>
                </div>
                <div>
                  <p>가입일</p>
                  <p className='border'>{'qwer@naver.com'}</p>
                </div>
                <div className='buttons'>
                  <button>비밀번호 초기화</button>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </Body>
    </ListComponent>
  );
};

export default UserList;

const ListComponent = styled.div`
  width: 100%;
  position: relative;
`;

const Head = styled.div`
  width: 100%;
  height: ${({ open }: { open: boolean }) => {
    return open ? '700px' : '70px';
  }};
  box-shadow: 2px 2px 10px 2px #4357ac26;
  background: #ffffff;
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  align-items: ${({ open }: { open: boolean }) => {
    return open ? 'flex-start' : 'center';
  }};
  justify-content: space-between;
  padding: ${({ open }: { open: boolean }) => {
    return open ? '15px 40px' : '0 40px';
  }};
  margin-bottom: 20px;
`;

const Body = styled.div`
  position: absolute;
  top: 60px;
  left: 40px;
  right: 40px;
  .horizonLine {
    width: 100%;
    border: 1px solid #ececec;
  }
  .content {
    padding: 35px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    h5 {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: #374151;
    }
    .info {
      margin: 10px 0 21px;
      div {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-bottom: 30px;
        p:first-child {
          width: 80px;
          font-weight: 700;
          font-size: 15px;
          line-height: 20px;
          color: #374151;
        }
        .border {
          display: flex;
          align-items: center;
          padding-left: 30px;
          font-size: 15px;
          font-weight: bold;
          line-height: 20px;
          color: #7b7b7b;
          width: 60%;
          height: 40px;
          border: 1px solid #374151;
          border-radius: 30px;
        }
      }
    }
    .buttons {
      position: absolute;
      right: 20px;
      bottom: 10px;
      display: flex;
      gap: 16px;
      button {
        border-radius: 20px;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: white;
        background-color: #8294cd;
        padding: 8px 20px;
      }
    }
  }
`;
