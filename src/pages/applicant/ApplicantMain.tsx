import JobList from '@/components/mainhome/JobList';
import StepBox from '@/components/mainhome/StepBox';
import { applySteps } from '@/constants/steps';
import React, { useState } from 'react';
import styled from 'styled-components';

const ApplicantMain = () => {
  const [step, setStep] = useState('서류지원');

  return (
    <Container>
      <h1 id='h1'>지원 현황</h1>
      <div className='grid'>
        {applySteps.map(stepName => (
          <StepBox key={stepName} stepName={stepName} step={step} setStep={setStep} />
        ))}
      </div>
      {step === '서류통과' ? (
        <Banner>
          <div style={{ width: '65%', backgroundColor: '#4357AC' }}>
            <img src='/images/resume_pass.png' alt='서류통과축하' />
            <p>
              {'조지원님'}
              <br />
              서류통과를 축하드립니다!
            </p>
          </div>
          <div style={{ width: '35%', backgroundColor: '#5A98E1' }}>
            <p>
              면접관을 사로잡는
              <br />
              면접 성공 전략
            </p>
            <img src='/images/trophy.png' alt='면접성공전략' />
          </div>
        </Banner>
      ) : null}

      <div>
        <h4>지원 공고 리스트</h4>
        {[1, 2, 3].map((job, index) => (
          <JobList key={job} index={index} step={step} />
        ))}
      </div>
    </Container>
  );
};

export default ApplicantMain;

const Container = styled.div`
  margin: 100px 60px 50px;
  box-sizing: border-box;
  width: 90%;
  #h1 {
    position: relative;
  }
  #h1::after {
    position: absolute;
    left: 132px;
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
    cursor: pointer;

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

const Banner = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 170px;
  margin: 50px 0;
  overflow: hidden;

  div {
    height: 100%;
    border-radius: 19px;
    color: white;
    position: relative;

    img {
      position: absolute;
      right: 20px;
      &:last-child {
        bottom: 28px;
        right: 30px;
      }
    }
    p {
      font-size: 18px;
      font-weight: bold;
      line-height: 22px;
      position: absolute;
      left: 42px;
      top: 24px;
    }
  }
`;
