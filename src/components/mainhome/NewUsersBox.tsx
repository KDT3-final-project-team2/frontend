import { getToday } from '@/utils/getToday';
import { useState } from 'react';
import styled from 'styled-components';
import { VerticalBarChart } from 'amazing-react-charts';

const NewUsersBox = (data: AdminStaticsData) => {
  // const [year, setYear] = useState(new Date().getFullYear());

  return (
    <Column>
      <div className='box'>
        <h5>신규회원</h5>

        <p>기준 : {getToday()}</p>

        <div className='flex' style={{ height: '180px' }}>
          {/* <div className='stick'>{}</div>
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
          <div className='stick'>{}</div> */}
          <VerticalBarChart
            xType='time'
            data={[
              {
                label: '1',
                result: data?.['1월가입인원'],
                itemId: '1월',
              },
              {
                label: '1',
                result: data?.['1월가입인원'],
                itemId: '1월',
              },
              {
                label: '1',
                result: data?.['1월가입인원'],
                itemId: '1월',
              },
              {
                label: '1',
                result: data?.['1월가입인원'],
                itemId: '1월',
              },
              {
                label: '1',
                result: data?.['1월가입인원'],
                itemId: '1월',
              },
              {
                label: '1',
                result: data?.['1월가입인원'],
                itemId: '1월',
              },
              {
                label: '1',
                result: data?.['1월가입인원'],
                itemId: '1월',
              },
              {
                label: '1',
                result: data?.['1월가입인원'],
                itemId: '1월',
              },
              {
                label: '1',
                result: data?.['1월가입인원'],
                itemId: '1월',
              },
              {
                label: '1',
                result: data?.['1월가입인원'],
                itemId: '1월',
              },
              {
                label: '1',
                result: data?.['1월가입인원'],
                itemId: '1월',
              },
              z,
            ]}
          />
        </div>
        <div className='flex' style={{ height: '30px', width: '100%' }}>
          {Array.from(Array(12).keys()).map((val, index) => (
            <div key={val} className='flex_month'>
              {index + 1}월
            </div>
          ))}
        </div>
      </div>
    </Column>
  );
};

export default NewUsersBox;

const Column = styled.div`
  width: 65%;
  position: relative;
  /* .year {
    font-weight: 700;
    font-size: 22px;
    line-height: 1;
    color: #374151;
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: 19px;
  } */
  p {
    font-size: 12px;
    line-height: 16px;
    color: #7b7b7b;
    position: absolute;
    right: 30px;
    top: 18px;
    /* width: 50px; */
  }
  .box {
    width: 100%;
    height: 309px;
    box-shadow: 0px 0px 20px rgba(67, 87, 172, 0.19);
    border-radius: 20px;
    padding: 20px 30px 23px;
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
      @media (max-width: 1600px) {
        gap: 10px;
      }
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
        display: flex;
        width: 132px;
        justify-content: center;
      }
    }
  }
`;
