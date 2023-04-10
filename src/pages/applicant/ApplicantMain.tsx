import { getMyApplications } from '@/api/applicantApi';
import AlertModal from '@/components/common/AlertModal';
import ApplicantStepBox from '@/components/mainhome/ApplicantStepBox';
import JobList from '@/components/mainhome/JobList';
import { ApplicantSteps, applicantStepType } from '@/constants/steps';
import { useAppSelector } from '@/hooks/useDispatchHooks';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import styled from 'styled-components';

const ApplicantMain = () => {
  const applicantName = useAppSelector(state => state.applicantUser.applicantName);
  const [step, setStep] = useState<applicantStepType>('서류지원');
  const { data: allApplications, isLoading } = useQuery(['myApplications'], getMyApplications, {
    staleTime: 1000 * 60 * 60 * 5,
  });
  const dataBySteps: { [key: string]: MyApplicationData[] } = { apply: [], resumePass: [], interviewPass: [] };

  allApplications?.map((application: MyApplicationData) => {
    switch (application.applicationStatusType) {
      case '서류지원':
        dataBySteps.apply.push(application);
        break;
      case '서류통과':
        dataBySteps.resumePass.push(application);
        break;
      case '최종합격':
        dataBySteps.interviewPass.push(application);
        break;
    }
  });

  const tabs = {
    서류지원: { index: 1, content: dataBySteps.apply, num: dataBySteps.apply?.length },
    서류통과: { index: 2, content: dataBySteps.resumePass, num: dataBySteps.resumePass?.length },
    최종합격: { index: 3, content: dataBySteps.interviewPass, num: dataBySteps.interviewPass?.length },
    전체: { index: 4, content: allApplications || [], num: allApplications?.length || 0 },
  };

  return (
    <Container>
      <h1 id='h1'>지원 현황</h1>
      <div className='grid'>
        {ApplicantSteps.map((stepName, index) => (
          <ApplicantStepBox key={index} stepName={stepName} step={step} setStep={setStep} num={tabs[stepName].num} />
        ))}
      </div>
      {step === '서류통과' ? (
        <Banner>
          <div style={{ width: '65%', backgroundColor: '#4357AC' }}>
            <img src='/images/resume_pass.png' alt='서류통과축하' />
            <p>
              {applicantName}님
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
        <h4>{step} 리스트</h4>
        {tabs[step].content.length === 0 ? (
          <p className='nothing'>리스트가 없습니다.</p>
        ) : (
          tabs[step].content.map((application: MyApplicationData, index: number) => {
            return <JobList key={index} index={index} application={application} />;
          })
        )}
      </div>
    </Container>
  );
};

export default ApplicantMain;

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
