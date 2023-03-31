import { MainContainer, RecruitmentNotice, RegistrationButton } from '../company/CompanyJobPosting';
import styled from 'styled-components';
import TermList from '../../components/term.tsx/TermList';
import TermPostEditModal from '../../components/term.tsx/TermPostEditModal';
import { MouseEvent, useState } from 'react';

export const AdminTerm = () => {
  const [termModalOpen, setTermModalOpen] = useState(false);
  const [saveBtnText, setSaveBtnText] = useState('저장');

  const onClickTermPost = () => {
    setTermModalOpen(true);
    setSaveBtnText('저장');
  };

  const onClickTermEdit = (event: MouseEvent<HTMLImageElement>) => {
    event?.stopPropagation();
    setTermModalOpen(true);
    setSaveBtnText('수정완료');
  };

  return (
    <MainContainer>
      <div className='headerBox'>
        <RecruitmentNotice>약관 관리</RecruitmentNotice>
        <ViewTerms>약관 조회</ViewTerms>
        <RegistrationButton onClick={onClickTermPost}>작성하기</RegistrationButton>
      </div>
      {[1, 2, 3].map((data, index) => (
        <TermList key={data} index={index} setTermModalOpen={setTermModalOpen} onClickTermEdit={onClickTermEdit} />
      ))}
      {termModalOpen && <TermPostEditModal setTermModalOpen={setTermModalOpen} saveBtnText={saveBtnText} />}
    </MainContainer>
  );
};

export default AdminTerm;

const ViewTerms = styled.h2`
  padding: 0 15px 15px 15px;
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary-100);
  margin-top: 50px;
  width: 100px;
  border-bottom: 5px solid;
`;
