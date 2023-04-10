import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import ApplicantList from '@components/mainhome/ApplicantList';
import CompanyStepBox from '@components/mainhome/CompanyStepBox';
import { CompanySteps, companyStepType } from '../../constants/steps';
import { useQuery } from '@tanstack/react-query';
import { getApplications } from '@/api/companyApi';
import Loading from '@components/common/Loading';

const CompanyMain = () => {
  const [step, setStep] = useState<companyStepType>('서류지원');

  const { data: applications, isLoading } = useQuery(['applications'], getApplications, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  const dataBySteps: { [key: string]: ApplicationData[] } = { apply: [], interview: [], pass: [] };

  applications?.map((application: ApplicationData) => {
    switch (application.applicationStatus) {
      case '서류지원':
        dataBySteps.apply.push(application);
        break;
      case '실무면접':
        dataBySteps.interview.push(application);
        break;
      case '최종합격':
        dataBySteps.pass.push(application);
        break;
    }
  });
  const tabs = {
    서류지원: { index: 1, content: dataBySteps.apply, num: dataBySteps.apply?.length },
    실무면접: { index: 2, content: dataBySteps.interview, num: dataBySteps.interview?.length },
    최종합격: { index: 3, content: dataBySteps.pass, num: dataBySteps.pass?.length },
    전체: { index: 4, content: applications || [], num: applications?.length || 0 },
  };
  console.log(tabs[step]);
  return (
    <Container>
      <h1 id='h1'>채용 현황</h1>
      <div className='grid'>
        {CompanySteps.map((stepName, index) => (
          <CompanyStepBox key={stepName} stepName={stepName} step={step} setStep={setStep} num={tabs[stepName]?.num} />
        ))}
      </div>

      <div>
        <h4>{step} 리스트</h4>
        {tabs[step].num === 0 ? (
          <p className='nothing'>리스트가 없습니다.</p>
        ) : (
          tabs[step].content.map((applicant: ApplicationData, index: number) => {
            return <ApplicantList key={applicant.applicationId} index={index} step={step} applicant={applicant} />;
          })
        )}
      </div>
    </Container>
  );
};

export default CompanyMain;

const Container = styled.div`
  padding: 30px 70px 0;
  box-sizing: border-box;
  width: 100%;
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
  .nothing {
    margin: auto;
    width: fit-content;
    margin-top: 50px;
    font-size: 18px;
    font-weight: bold;
  }
`;
