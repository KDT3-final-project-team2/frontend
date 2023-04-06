import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import ApplicantList from '@components/mainhome/ApplicantList';
import StepBox from '@components/mainhome/StepBox';
import { employSteps, employStepsToEng } from '../../constants/steps';
import { useQuery } from '@tanstack/react-query';
import { getApplications } from '@/api/companyApi';
import Loading from '@components/common/Loading';

const CompanyMain = () => {
  const [step, setStep] = useState('서류지원');
  const status = employStepsToEng[step];
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraW1zQGtpbS5jb20iLCJ1c2VyRW1haWwiOiJraW1zQGtpbS5jb20iLCJyb2xlIjoiQ09NUEFOWSIsImlkIjo1LCJpc3N1ZXIiOiJkbmVmaXQiLCJpYXQiOjE2ODA3NzEyMDAsImV4cCI6MTY4MDc3MTI2MH0.-FdThue5QuueV1GlZ89BbfAUkZaVMGuOl8EV1Hm7tv8';

  const { data, isLoading } = useQuery(['applications', step], () => getApplications({ accessToken, status }));

  const { data, isLoading } = useQuery(['applications', step], getApplications);

  console.log(data);
  // console.log(employStepsToEng[step]);
  // console.log(data[employStepsToEng[step]]);

  if (isLoading) return <Loading />;
  return (
    <Container>
      <h1 id='h1'>채용 현황</h1>
      <div className='grid'>
        {employSteps.map((stepName, index) => (
          <StepBox
            key={stepName}
            stepName={stepName}
            step={step}
            setStep={setStep}
            num={data[employStepsToEng[stepName]]?.length}
          />
        ))}
      </div>

      <div>
        <h4>{step} 리스트</h4>
        {data[employStepsToEng[step]].map((applicant: CompanyMainData, index: number) => (
          <ApplicantList key={applicant.applicationId} index={index} step={step} applicant={applicant}></ApplicantList>
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
