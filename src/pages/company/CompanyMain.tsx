import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import List from '../../components/mainhome/List';
import StepBox from '../../components/mainhome/StepBox';
import { employSteps } from '../../constants/steps';

const CompanyMain = () => {
  const [step, setStep] = useState('서류지원');

  return (
    <Container>
      <h1>채용현황</h1>
      <div className='grid'>
        {employSteps.map(stepName => (
          <StepBox stepName={stepName} step={step} setStep={setStep} />
        ))}
      </div>

      <div>
        <h4>{step} 리스트</h4>
        {[1, 2, 3].map((applicant, index) => (
          <List index={index}></List>
        ))}
      </div>
    </Container>
  );
};

export default CompanyMain;

const Container = styled.div`
  margin: 100px 60px 50px;
  box-sizing: border-box;
  width: 90%;
  h1 {
    position: relative;
  }
  h1::after {
    position: absolute;
    left: 125px;
    top: -10px;
    content: '';
    background-color: var(--color-yellow);
    width: 10px;
    height: 10px;
    border-radius: 100%;
  }
  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    margin-bottom: 60px;
    .box {
      margin-top: 30px;
      height: 150px;
      box-shadow: 0px 0px 20px rgba(67, 87, 172, 0.19);
      border-radius: 20px;
      padding: 25px;
      position: relative;
      h3 {
        font-size: 22px;
        font-weight: bold;
        width: 40px;
        line-height: 27px;
      }
      p {
        font-size: 22px;
        font-weight: bold;
        position: absolute;
        bottom: 25px;
        right: 30px;
      }
    }
    .active::after {
      position: absolute;
      content: '';
      bottom: -15px;
      left: 5%;
      width: 90%;
      height: 7px;
      background-color: var(--color-yellow);
      border-radius: 4px;
    }
  }
  h4 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 27px;
  }
`;
