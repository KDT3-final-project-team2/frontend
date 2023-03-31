import { userStatics } from '@/constants/steps';
import { useState } from 'react';
import styled from 'styled-components';

const AdminMain = () => {
  const [tap, setTap] = useState('사용자 현황');

  return (
    <Container>
      <div className='header'>
        {userStatics.map(menuName => (
          <Tap onClick={() => setTap(menuName)} isActive={tap === menuName}>
            {menuName}
          </Tap>
        ))}
      </div>
      <div className='body'>
        <h3>{tap}</h3>
      </div>
    </Container>
  );
};

export default AdminMain;

const Container = styled.div`
  margin: 100px 100px 50px;
  box-sizing: border-box;
  width: 90%;

  .header {
    display: flex;
    gap: 70px;
    margin-bottom: 50px;
  }
  .body {
    padding: 40px;
    h3 {
      font-weight: 700;
      font-size: 34px;
      line-height: 40px;
      color: #374151;
    }
  }
`;

const Tap = styled.h2`
  color: ${({ isActive }: { isActive: boolean }) => (isActive ? '#4357AC' : '#6d7280')};
  font-weight: 700;
  font-size: 20px;
  line-height: 16px;
  cursor: pointer;
`;
