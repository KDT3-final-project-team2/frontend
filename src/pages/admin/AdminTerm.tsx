import { HeaderBox, MainContainer, RecruitmentNotice, RegistrationButton } from '../company/CompanyJobPosting';
import styled from 'styled-components';
import TermList from '../../components/term.tsx/TermList';
import TermPostEditModal from '../../components/term.tsx/TermPostEditModal';
import { useState } from 'react';
import { getAdminTermList } from '@/api/adminApi';
import { useQuery } from '@tanstack/react-query';
import { getCompanyTermList } from '@/api/companyApi';
import { useLocation } from 'react-router-dom';

export const AdminTerm = () => {
  const [termModalOpen, setTermModalOpen] = useState(false);
  const [saveBtnText, setSaveBtnText] = useState('저장');
  const location = useLocation();

  const onClickTermPost = () => {
    setTermModalOpen(true);
    setSaveBtnText('저장');
  };

  let term;

  if (location.pathname === '/admin/term') {
    const { data } = useQuery(['adminTerm'], getAdminTermList);
    term = data;
  } else {
    const { data } = useQuery(['companyTerm'], getCompanyTermList);
    term = data;
  }

  return (
    <MainContainer>
      <HeaderBox>
        <RecruitmentNotice>약관 관리</RecruitmentNotice>
        <ViewTerms>약관 조회</ViewTerms>
        <RegistBtn onClick={onClickTermPost}>작성하기</RegistBtn>
      </HeaderBox>
      {term?.data.map((data: adminTermSingleData, index: number) => (
        <TermList
          term={data}
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
const RegistBtn = styled(RegistrationButton)`
  margin-right: 0px;
`;
