import UserList from '@/components/member/UserList';
import React, { useState } from 'react';
import styled from 'styled-components';

const AdminMember = () => {
  const [userType, setUserType] = useState('병원');

  return (
    <Container>
      <h1>회원 관리</h1>
      <div className='search'>
        <h4>회원 전체 조회</h4>
        <form>
          <input type='text' placeholder='검색어를 입력해주세요.' />
          <img src='/icons/search.png' alt='검색' />
          <div>
            {['병원', '지원자'].map(typeName => (
              <TypeButton
                isUserType={typeName === userType}
                onClick={event => {
                  event.preventDefault();
                  setUserType(typeName);
                }}
              >
                {typeName}
              </TypeButton>
            ))}
          </div>
        </form>
      </div>
      {[1, 2, 3].map((user, index) => (
        <UserList key={index} index={index} user={user} userType={userType} />
      ))}
    </Container>
  );
};

export default AdminMember;

const Container = styled.div`
  margin: 100px 60px 50px;
  box-sizing: border-box;
  width: 90%;
  #h1 {
    position: relative;
  }

  .search {
    margin: 50px 0 36px;
    display: flex;
    align-items: center;
    gap: 50px;

    h4 {
      font-size: 22px;
      font-weight: bold;
      color: #4357ac;
    }
    form {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;

      input {
        width: 700px;
        height: 40px;
        border: 3px solid #b3c2e7;
        border-radius: 28px;
        padding-left: 70px;
        box-sizing: border-box;
      }
      img {
        position: absolute;
        left: 30px;
        top: 9px;
      }
      div {
        display: flex;
        gap: 5px;

        button {
        }
      }
    }
  }
`;

const TypeButton = styled.button<{ isUserType: boolean }>`
  display: inline-block;
  width: 75px;
  height: 28px;
  background: ${({ isUserType }) => (isUserType ? '#4357AC' : 'white')};
  color: ${({ isUserType }) => (isUserType ? 'white' : '#8294cd')};
  border: ${({ isUserType }) => (isUserType ? 'none' : '2px solid #8294cd')};
  padding: 2px 12px;
  border-radius: 14px;
  font-weight: bold;
  font-size: 12px;
`;
