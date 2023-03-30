import { RecruitmentNotice, RegistrationButton } from '../company/CompanyJobPosting';
import styled from 'styled-components';
import TermList from '../../components/term.tsx/TermList';
import TermPostEditModal from '../../components/term.tsx/TermPostEditModal';

const AdminTerm = () => {
  return (
    <>
      <RecruitmentNotice>약관 관리</RecruitmentNotice>
      <ViewTerms>약관 조회</ViewTerms>
      <RegistrationButton>작성하기</RegistrationButton>
      {[1, 2, 3].map(data => (
        <TermList key={data} />
      ))}
      <TermPostEditModal />
    </>
  );
};

export default AdminTerm;

const ViewTerms = styled.h2`
  padding: 0 15px 15px 15px;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary-100);
  margin-top: 50px;
  margin-left: 62px;
  width: 100px;
  border-bottom: 5px solid;
`;
