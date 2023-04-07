import { IPlanUserProps } from '@/@types/props';
import styled from 'styled-components';

const PlanUserBox = ({ id, name, price, functions, year, month, today }: IPlanUserProps) => {
  return (
    <Box id={id}>
      <div className='colorBar'></div>
      <div className='head' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='title'>{id} Plan</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '11px' }}>
          <div className='name'>{name}</div>
          <div className='price'>{id === 'Business' ? `${price}` : `₩ ${price.toLocaleString()}/월`}</div>
        </div>
      </div>

      <div className='colorText'>{id}의 모든 기능 +</div>
      {functions.map(func => (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '10px' }}>
          <img src={`/icons/${id}-check.png`} alt='체크' />
          <div>{func}</div>
        </div>
      ))}

      <div className='line'></div>

      <div className='flex'>
        <span>Year</span> <span>{year.toLocaleString()}</span>
      </div>
      <div className='flex'>
        <span>Month</span> <span>{month.toLocaleString()}</span>
      </div>
      <div className='flex'>
        <span>Today</span> <span>{today.toLocaleString()}</span>
      </div>

      <button className='colorBtn'>가입병원보기</button>
    </Box>
  );
};

export default PlanUserBox;

const Box = styled.div<{ id: string }>`
  width: 35%;
  height: 526px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(67, 87, 172, 0.19);
  border-radius: 19px;
  padding: 50px 40px;
  position: relative;
  color: #374151;
  .colorBar {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 22px;
    border-radius: 0px 0px 20px 20px;
    background-color: ${({ id }) => (id === 'Basic' ? '#FFC847' : id === 'Standard' ? '#4357AC' : '#8294CD')};
  }
  .title {
    font-weight: bold;
    font-size: 25px;
    line-height: 16px;
  }
  .name {
    font-size: 15px;
  }
  .price {
    font-size: 16px;
    font-weight: bold;
  }
  .line {
    width: 100%;
    height: 0px;
    border: 1px solid #d2d5da;
    margin-top: 20px;
  }
  .colorText {
    color: ${({ id }) => (id === 'Basic' ? '#FFC847' : id === 'Standard' ? '#4357AC' : '#8294CD')};
    font-weight: 700;
    font-size: 14px;
    margin: 8px 0 20px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    gap: 14px;
    margin: 40px 0;
    font-weight: 700;
    span:first-child {
      font-size: 16px;
    }
    span:last-child {
      font-size: 22px;
    }
  }
  .colorBtn {
    color: white;
    font-weight: 700;
    font-size: 18px;
    background-color: ${({ id }) => (id === 'Basic' ? '#FFC847' : id === 'Standard' ? '#4357AC' : '#8294CD')};
    border-radius: 20px;
    width: 100%;
    height: 62px;
  }
`;
