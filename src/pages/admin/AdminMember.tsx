import React from 'react';
import styled from 'styled-components';

const AdminMember = () => {
  return (
    <Container>
      <h1>회원 관리</h1>
      <div className='search'>
        <h4>회원 전체 조회</h4>
        <form>
          <input type='text' placeholder='검색어를 입력해주세요.' />
          <img src='/icons/search.png' alt='검색' />
          <div>
            <button>병원</button>
            <button>지원자</button>
          </div>
        </form>
      </div>
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
  /* #h1::after {
    position: absolute;
    left: 132px;
    top: -10px;
    content: '';
    background-color: var(--color-yellow);
    width: 10px;
    height: 10px;
    border-radius: 100%;
  } */
  .search {
    margin: 50px 0 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
          display: inline-block;
          width: 75px;
          height: 28px;
          background: #4357ac;
          padding: 2px 12px;
          border-radius: 14px;
          color: white;
          font-weight: bold;
          font-size: 12px;
          &:last-child {
            color: #8294cd;
            background-color: white;
            border: 2px solid #8294cd;
          }
        }
      }
    }
  }
`;
