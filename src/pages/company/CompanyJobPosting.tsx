import styled from 'styled-components';
import JobPostingList from '../../components/companyjobposting/JobPostingList';

const CompanyJobPosting = () => {
  return (
    <>
      <RecruitmentNotice>채용 공고</RecruitmentNotice>
      <RecruitmentManagement>공고 등록 관리</RecruitmentManagement>
      <RegistrationButton>등록하기</RegistrationButton>
      <JobPostingList />
      {/* {[1, 2, 3].map(data => (
      <JobPostingList />
      ))} */}
    </>
  );
};

export default CompanyJobPosting;

const Main = styled.div`
  /* width: 1496px;
  height: 554px; */
`;

const RecruitmentNotice = styled.h1`
  margin-top: 122px;
  margin-left: 62px;
`;

const RecruitmentManagement = styled.h2`
  width: 120px;
  padding: 0 15px 15px 15px;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-primary-100);
  margin-top: 50px;
  margin-left: 62px;
  border-bottom: 5px solid;
  border-radius: 2px;
`;

const RegistrationButton = styled.button`
  margin-top: 9px;
  background: var(--color-primary-100);
  border-radius: 20px;
  width: 140px;
  height: 40px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  margin-left: auto;
  margin-right: 52px;
  margin-bottom: 26px;
`;
