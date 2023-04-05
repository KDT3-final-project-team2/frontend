import { useState } from 'react';
import styled from 'styled-components';
import { ContainerInner, TabContent } from './CompanyApplicant';
import Info from '@/components/setting/company/Info';
import Withdrawal from '@/components/setting/company/Withdrawal';
import PlanPrice from '@/components/setting/company/PlanPrice';

const CompanySetting = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { index: 1, name: '정보 수정', content: <Info /> },
    { index: 2, name: '플랜 및 결제', content: <PlanPrice /> },
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

export default CompanySetting;
