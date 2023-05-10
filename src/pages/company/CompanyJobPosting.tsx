import { useState } from 'react';
import styled from 'styled-components';
import JobPostingList from '../../components/companyjobposting/JobPostingList';
import PostEditModal from '../../components/companyjobposting/PostEditModal';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteJobPost, getCompanyJobposts } from '@/api/companyApi';
import { useAppDispatch } from '@/hooks/useDispatchHooks';
import { hideLoading, showLoading } from '@/store/loadingSlice';

const CompanyJobPosting = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saveBtnText, setSaveBtnText] = useState('저장');

  const showRegistrationModal = () => {
    setIsModalOpen(true);
    setSaveBtnText('등록하기');
  };

  const { data: jobPosts, isLoading } = useQuery(['jobPosts'], getCompanyJobposts);
  const queryClient = useQueryClient();
  const { mutate: JobDeleteMutate } = useMutation(deleteJobPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['jobPosts']);
    },
  });
  console.log(jobPosts);
  return (
    <MainContainer>
      <HeaderBox>
        <RecruitmentNotice>채용 공고</RecruitmentNotice>
        <RecruitmentManagement>공고 등록 관리</RecruitmentManagement>
      </HeaderBox>
      <RegistrationButton onClick={showRegistrationModal}>등록하기</RegistrationButton>
      {jobPosts?.data.map((data: IGetCompanyJobPosts) => (
        <JobPostingList
          key={data.postId}
          jobPosts={data}
          setSaveBtnText={setSaveBtnText}
          saveBtnText={saveBtnText}
          JobDeleteMutate={JobDeleteMutate}
        />
      ))}
      {jobPosts?.data.length === 0 && <EmptyBox>채용공고를 등록해주세요</EmptyBox>}
      {isModalOpen && <PostEditModal setIsModalOpen={setIsModalOpen} saveBtnText={saveBtnText} />}
    </MainContainer>
  );
};

export default CompanyJobPosting;

const EmptyBox = styled.div`
  width: 400px;
  font-size: 30px;
  font-weight: 700;
  color: gray;
  margin: 60px auto 0;
`;

export const MainContainer = styled.div`
  margin: 0 auto;
  margin-top: 36px;
`;

export const HeaderBox = styled.div`
  width: 93%;
  padding: 0 70px;
`;

export const RecruitmentNotice = styled.h1``;

const RecruitmentManagement = styled.h2`
  width: 120px;
  padding: 0 15px 15px 15px;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-primary-100);
  margin-top: 50px;
  border-bottom: 5px solid;
  border-radius: 2px;
`;

export const RegistrationButton = styled.button`
  margin-top: 9px;
  background: var(--color-primary-100);
  border-radius: 20px;
  width: 140px;
  height: 40px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  margin-left: auto;
  margin-bottom: 26px;
  margin-right: 4%;
`;
