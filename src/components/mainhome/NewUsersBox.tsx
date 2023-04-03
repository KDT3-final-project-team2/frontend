import { useState } from 'react';
import styled from 'styled-components';

const NewUsersBox = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <Column>
      <div className='box'>
        <h5>신규회원</h5>
        <div className='year'>
          <img src='/icons/arrow_left.png' alt='작년' onClick={() => setYear(year - 1)} />
          <span>{year}</span>
          <img src='/icons/arrow_right.png' alt='내년' onClick={() => setYear(year + 1)} />
        </div>
        <div className='flex' style={{ height: '180px' }}>
          <div className='stick'>{}</div>
          <div className='stick'>{}</div>
          <div className='stick'>{}</div>
          <div className='stick'>{}</div>
          <div className='stick'>{}</div>
          <div className='stick'>{}</div>
          <div className='stick'>{}</div>
          <div className='stick'>{}</div>
          <div className='stick'>{}</div>
          <div className='stick'>{}</div>
          <div className='stick'>{}</div>
          <div className='stick'>{}</div>
        </div>
        <div className='flex' style={{ height: '30px' }}>
          {Array.from(Array(12).keys()).map((val, index) => (
            <div className='flex_month'>{index + 1}월</div>
          ))}
        </div>
      </div>
    </Column>
  );
};

export default NewUsersBox;

const Column = styled.div`
  .year {
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    color: #374151;
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: 19px;
  }
  .box {
    width: 836px;
    height: 309px;
    box-shadow: 0px 0px 20px rgba(67, 87, 172, 0.19);
    border-radius: 20px;
    padding: 20px 30px;
    position: relative;
    h5 {
      color: #374151;
      font-weight: 700;
      font-size: 26px;
      line-height: 32px;
      margin-bottom: 20px;
    }
    .year {
      display: flex;
      align-items: center;
      font-size: 22px;
      line-height: 16px;
      color: #7b7b7b;
      position: absolute;
      right: 30px;
      top: 28px;
      height: 22px;
      img {
        height: 22px;
        padding-bottom: 5px;
      }
    }
    .flex {
      display: flex;
      gap: 30px;
      justify-content: space-between;
      align-items: flex-end;
      padding: 10px;
      .stick {
        width: 132px;
        background: #8294cd;
        opacity: 0.2;
        border-radius: 20px;
        height: 100%;
      }
      .flex_month {
        width: 132px;
        display: flex;
        justify-content: center;
        font-size: 14px;
      }
    }
  }
`;
