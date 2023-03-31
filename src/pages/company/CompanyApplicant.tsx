import { useState } from 'react';
import styled from 'styled-components';
import ApplicantsInfo from '../../components/companyApplicant/ApplicantsInfo';
import ApplicantsRecommend from '../../components/companyApplicant/ApplicantsRecommend';
import ApplicantsStats from '../../components/companyApplicant/ApplicantsStats';
import MailTemplate from '../../components/companyApplicant/MailTemplate';

const CompanyApplicant = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { index: 1, name: '지원자 정보 보관함', content: <ApplicantsInfo /> },
    { index: 2, name: '맞춤 지원자 추천', content: <ApplicantsRecommend /> },
    { index: 3, name: '메일 템플릿', content: <MailTemplate /> },
  ];

  return (
    <ContainerInner>
      <Title>지원자 통계</Title>
      <ApplicantsStats />
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

const ContainerInner = styled.div`
  padding: 30px 70px 0;
`;

const Title = styled.h1`
  font-size: 34px;
  margin-bottom: 30px;
  letter-spacing: -0.5px;
`;

const TabContent = styled.div`
  ul {
    display: flex;
    align-items: center;
    gap: 60px;
    li {
      cursor: pointer;
      color: var(--color-gray-500);
      font-size: 20px;
      font-weight: bold;
      letter-spacing: -0.5px;
      line-height: 44px;
      position: relative;
      &.active {
        color: var(--color-primary-100);
        :after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 5px;
          border-radius: 50px;
          background-color: var(--color-primary-100);
        }
      }
    }
  }
`;

export default CompanyApplicant;
