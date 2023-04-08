import { getCompanyMembers, getApplicantMembers } from '@/api/adminApi';
import UserList from '@/components/member/UserList';
import { useAppDispatch } from '@/hooks/useDispatchHooks';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import styled from 'styled-components';

const AdminMember = () => {
  const dispatch = useAppDispatch();
  const [userType, setUserType] = useState('병원');

  const { data: companies, isLoading } = useQuery(['admin', 'companies'], getCompanyMembers, {
    staleTime: 1000 * 60 * 60,
  });
  const { data: applicants, isLoading: loading } = useQuery(['admin', 'applicants'], getApplicantMembers, {
    staleTime: 1000 * 60 * 60,
  });

  console.log(companies);
  console.log(applicants);
  if (isLoading || loading) {
    dispatch(showLoading());
    return null;
  } else {
    dispatch(hideLoading());
    return (
      <Container>
        <h1>회원 관리</h1>
        <div className='search'>
          <h4>회원 전체 조회</h4>
          <form>
            <input type='text' placeholder='검색어를 입력해주세요.' />
            <img src='/icons/search.png' alt='검색' />
            <div>
              {['병원', '지원자'].map(typeName => (
                <TypeButton
                  key={typeName}
                  isUserType={typeName === userType}
                  onClick={event => {
                    event.preventDefault();
                    setUserType(typeName);
                  }}
                >
                  {typeName}
                </TypeButton>
              ))}
            </div>
          </form>
        </div>
        {userType === '병원'
          ? companies?.map((company: CompanyMemberData, index: number) => {
              return <UserList key={index} index={index} user={company} userType={userType} />;
            })
          : applicants?.map((applicant: ApplicantMemberData, index: number) => {
              return <UserList key={index} index={index} user={applicant} userType={userType} />;
            })}
      </Container>
    );
  }
};

export default AdminMember;

const Container = styled.div`
  margin: 100px 60px 50px;
  box-sizing: border-box;
  width: 90%;
  #h1 {
    position: relative;
  }

  .search {
    margin: 50px 0 36px;
    display: flex;
    align-items: center;
    gap: 50px;

    h4 {
      font-size: 22px;
      font-weight: bold;
      color: #4357ac;
    }
    form {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;

      input {
        width: 700px;
        height: 40px;
        border: 3px solid #b3c2e7;
        border-radius: 28px;
        padding-left: 70px;
        box-sizing: border-box;
      }
      img {
        position: absolute;
        left: 30px;
        top: 9px;
      }
      div {
        display: flex;
        gap: 5px;

        button {
        }
      }
    }
  }
`;

const TypeButton = styled.button<{ isUserType: boolean }>`
  display: inline-block;
  width: 75px;
  height: 28px;
  background: ${({ isUserType }) => (isUserType ? '#4357AC' : 'white')};
  color: ${({ isUserType }) => (isUserType ? 'white' : '#8294cd')};
  border: ${({ isUserType }) => (isUserType ? 'none' : '2px solid #8294cd')};
  padding: 2px 12px;
  border-radius: 14px;
  font-weight: bold;
  font-size: 12px;
`;
