import { MainContainer, RecruitmentNotice, RegistrationButton } from '../company/CompanyJobPosting';
import styled from 'styled-components';
import TermList from '../../components/term.tsx/TermList';
import TermPostEditModal from '../../components/term.tsx/TermPostEditModal';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAdminTermList } from '@/api/adminApi';

export const AdminTerm = () => {
  const [termModalOpen, setTermModalOpen] = useState(false);
  const [saveBtnText, setSaveBtnText] = useState('저장');

  const onClickTermPost = () => {
    setTermModalOpen(true);
    setSaveBtnText('저장');
  };

  const { data: adminTerm } = useQuery(['adminTerm'], getAdminTermList);

  return (
    <MainContainer>
      <div className='headerBox'>
        <RecruitmentNotice>약관 관리</RecruitmentNotice>
        <ViewTerms>약관 조회</ViewTerms>
        <RegistrationButton onClick={onClickTermPost}>작성하기</RegistrationButton>
      </div>
      {adminTerm?.map((data: adminTermData, index: number) => (
        <TermList
          adminTerm={data}
          key={data?.termId}
          index={index}
          setTermModalOpen={setTermModalOpen}
          setSaveBtnText={setSaveBtnText}
          saveBtnText={saveBtnText}
        />
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
