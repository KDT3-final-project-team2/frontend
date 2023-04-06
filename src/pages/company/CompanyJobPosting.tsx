import { useState } from 'react';
import styled from 'styled-components';
import JobPostingList from '../../components/companyjobposting/JobPostingList';
import PostEditModal from '../../components/companyjobposting/PostEditModal';
import { useQuery } from '@tanstack/react-query';
import { getCompanyJobposts } from '@/api/companyApi';
import axios from 'axios';

const CompanyJobPosting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);

  const showRegistrationModal = () => {
    setIsModalOpen(true);
  };

  const { data: jobPosts } = useQuery(['jobPosts'], getCompanyJobposts);

  const postSignUp = async () => {
    const res = await axios.post(
      'http://13.124.119.131:3100/admin/term',
      {
        content: '테스트',
        type: 'PRIVACY',
        version: '6',
        status: 'USE',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJ1c2VyRW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJyb2xlIjoiQURNSU4iLCJpZCI6MSwiaXNzdWVyIjoiZG5lZml0IiwiaWF0IjoxNjgwNzc2Njc5LCJleHAiOjE2ODA3NzY3Mzl9.g9BlFUlfQvFFvAPFZTu7VFMM1da7UDUOufgD-MC7H24`,
        },
      },
    );
    console.log(res.data);
  };

  const getCartItem = async () => {
    const res = await axios.get('http://13.124.119.131:3100/company/jobposts', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaWtla2VAbmF2ZXIuY29tIiwidXNlckVtYWlsIjoibmlrZWtlQG5hdmVyLmNvbSIsInJvbGUiOiJDT01QQU5ZIiwiaWQiOjQsImlzc3VlciI6ImRuZWZpdCIsImlhdCI6MTY4MDc3NTY3NiwiZXhwIjoxNjgwNzc1NzM2fQ.fYPE1h3-gfcWfffsZz2RgyBz0pfFxDPOrVqiID0A3QA`,
      },
    });
    console.log(res.data);
  };

  return (
    <MainContainer>
      <button
        onClick={() => {
          getCartItem();
        }}
      >
        조회
      </button>
      <button
        onClick={() => {
          postSignUp();
        }}
      >
        회원가입
      </button>
      <div className='headerBox'>
        <RecruitmentNotice>채용 공고</RecruitmentNotice>
        <RecruitmentManagement>공고 등록 관리</RecruitmentManagement>
        <RegistrationButton onClick={showRegistrationModal}>등록하기</RegistrationButton>
      </div>
      {jobPosts?.map((data: IGetCompanyJobPosts) => (
        <JobPostingList key={data.postId} setIsEditModal={setIsEditModal} jobPosts={data} />
      ))}
      {(isModalOpen || isEditModal) && (
        <PostEditModal setIsModalOpen={setIsModalOpen} setIsEditModal={setIsEditModal} isEditModal={isEditModal} />
      )}
    </MainContainer>
  );
};

export default CompanyJobPosting;

export const MainContainer = styled.div`
  margin: 0 auto;
  margin-top: 122px;
  .headerBox {
    width: 93%;
    margin: 0 auto;
    padding-left: 5px;
  }
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
`;
