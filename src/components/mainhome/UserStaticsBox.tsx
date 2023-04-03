import { getToday } from '@/utils/getToday';
import React from 'react';
import styled from 'styled-components';

const UserStaticsBox = ({
  user,
  total,
  year,
  month,
  day,
}: {
  user: string;
  total: number;
  year: number;
  month: number;
  day: number;
}) => {
  return (
    <Column user={user}>
      <h5>{user}</h5>
      <p>기준 : {getToday()}</p>
      <div>
        전체 인원수
        <span>{total.toLocaleString()}</span>
      </div>
      <div className='boxs'>
        <div className='box'>
          Year <span>{year}</span>
        </div>
        <div className='box'>
          Month <span>{month}</span>
        </div>
        <div className='box'>
          Today <span>{day}</span>
        </div>
      </div>
    </Column>
  );
};

export default UserStaticsBox;

const Column = styled.div<{ user: string }>`
  width: 50%;
  height: 262px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(67, 87, 172, 0.19);
  border-radius: 20px;
  padding: 20px 30px 23px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;

  h5 {
    color: #374151;
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
  }
  p {
    font-size: 12px;
    line-height: 16px;
    color: #7b7b7b;
    position: absolute;
    right: 30px;
    top: 18px;
  }
  div {
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
    color: #374151;
    align-self: flex-end;
    span {
      font-size: 34px;
      line-height: 40px;
      margin-left: 10px;
    }
  }
  .boxs {
    display: flex;
    gap: 16px;

    .box {
      width: 189px;
      height: 98px;
      padding: 15px 22px;
      color: #ffffff;
      background: ${props => (props.user === '병원' ? '#8294cd' : '#95969A')};
      display: flex;
      justify-content: space-between;
      &:first-child {
        background: ${props => (props.user === '병원' ? '#4357ac' : '#6D7280')};
        border-radius: 20px 0px 0px 20px;
      }
      &:last-child {
        background: ${props => (props.user === '병원' ? '#b3c2e7' : '#D2D5DA')};
        border-radius: 0px 20px 20px 0px;
      }
      span {
        font-size: 30px;
        line-height: 36px;
        align-self: flex-end;
      }
    }
  }
`;
