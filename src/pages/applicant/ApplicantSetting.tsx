import { useState } from 'react';
import styled from 'styled-components';
import { ContainerInner, TabContent } from '../company/CompanyApplicant';
import Info from '@/components/setting/applicant/Info';
import Withdrawal from '@/components/setting/applicant/Withdrawal';
import { useForm } from 'react-hook-form';
import { applicantSignUpSchema } from '@/utils/validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

const ApplicantSetting = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      index: 1,
      name: '정보 수정',
      content: <Info />,
    },
    { index: 3, name: '회원탈퇴', content: <Withdrawal /> },
  ];

  return (
    <ContainerInner>
      <Title>설정</Title>
      <TabContent>
        <ul>
          {tabs.map((item, idx) => (
            <li
              key={item.index}
              className={activeTab === idx ? 'active' : ''}
              onClick={() => {
                setActiveTab(idx);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </TabContent>
      <div>{tabs[activeTab].content}</div>
    </ContainerInner>
  );
};

const Title = styled.h1`
  font-size: 34px;
  margin-bottom: 30px;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;
`;

export default ApplicantSetting;
