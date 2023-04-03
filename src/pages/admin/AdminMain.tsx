import NewUsersBox from '@/components/mainhome/NewUsersBox';
import UserSector from '@/components/mainhome/UserSector';
import UserStaticsBox from '@/components/mainhome/UserStaticsBox';
import { userStatics } from '@/constants/steps';
import { useState } from 'react';
import styled from 'styled-components';

const AdminMain = () => {
  const [tap, setTap] = useState('사용자 현황');

  return (
    <Container>
      <div className='header'>
        {userStatics.map(menuName => (
          <Tap key={menuName} onClick={() => setTap(menuName)} isActive={tap === menuName}>
            {menuName}
          </Tap>
        ))}
      </div>
      <div className='body'>
        <h3>{tap}</h3>
        <div className='first-row'>
          <UserStaticsBox user={'병원'} total={15000} year={2300} month={200} day={33} />
          <UserStaticsBox user={'지원자'} total={15000} year={2300} month={200} day={33} />
        </div>

        <div className='second-row'>
          <NewUsersBox />
          <UserSector />
        </div>
      </div>
    </Container>
  );
};

export default AdminMain;

const Container = styled.div`
  margin: 100px 100px 50px;
  box-sizing: border-box;

  .header {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
  }
  .body {
    padding: 40px;
    h3 {
      font-weight: 700;
      font-size: 34px;
      line-height: 40px;
      color: #374151;
      margin-bottom: 50px;
    }
    .first-row {
      display: flex;
      gap: 33px;
      margin-bottom: 60px;
    }
    .second-row {
      display: flex;
      gap: 24px;
    }
  }
`;

const Tap = styled.h2<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  width: 151px;
  color: ${({ isActive }) => (isActive ? '#4357AC' : '#6d7280')};
  font-weight: 700;
  font-size: 20px;
  line-height: 16px;
  cursor: pointer;
  position: relative;

  &::after {
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
    content: '';
    width: 151px;
    height: 5px;
    background-color: #4357ac;
    border-radius: 2.5px;
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
  }
`;
