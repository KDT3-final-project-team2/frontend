import { useState } from 'react';
import styled from 'styled-components';
import { getCookie, removeCookie } from '@/utils/cookie';
import AlertModal from '../common/AlertModal';
import { ReactComponent as BookmarkFill } from '/public/icons/bookmarkFill.svg';
import { ReactComponent as Logout } from '/public/icons/logout.svg';
import { useAppDispatch } from '@/hooks/useDispatchHooks';
import { showLoading, hideLoading } from '@/store/loadingSlice';
import { userLogout } from '@/api/commonApi';
import { useEffect, useCallback } from 'react';
import { applicantUserInfo, applicantUserInit } from '@/store/applicantUserSlice';
import { companyUserInfo, companyUserInit } from '@/store/companyUserSlice';
import { useLocation } from 'react-router-dom';
import { applicantInfo } from '@/api/applicantApi';
import { companyInfo } from '@/api/companyApi';
import { AuthVerify } from '@/utils/jwtCheck';

const Header = ({ isAdminPage }: { isAdminPage: boolean }) => {
  const token = getCookie('accessToken');
  const dispatch = useAppDispatch();
  const [searchTitle, setSearchTitle] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    setSearchTitle(value);
  };
  const location = useLocation();
  const path = useLocation().pathname;
  const isCompanyPage = path.includes('company');
  const isApplicantPage = path.includes('applicant');

  const companyIsLogin = useCallback(async () => {
    const res = await companyInfo();
    console.log(res);
    if (res) {
      dispatch(
        companyUserInfo({
          companyId: res.companyId,
          email: res.email,
          companyNm: res.companyNm,
          contact: res.contact,
          regNum: res.regNum,
          companyAddr: res.companyAddr,
          ceoName: res.ceoName,
          url: res.url,
        }),
      );
    }
  }, [location]);

  const applicantIsLogin = useCallback(async () => {
    const res = await applicantInfo();
    if (res.data) {
      dispatch(
        applicantUserInfo({
          applicantId: res.data.applicantId,
          applicantEmail: res.data.applicantEmail,
          applicantName: res.data.applicantName,
          applicantBirthDate: res.data.applicantBirthDate,
          applicantGender: res.data.applicantGender,
          applicantContact: res.data.applicantContact,
          applicantEducation: res.data.applicantEducation,
          applicantWorkExperience: res.data.applicantWorkExperience,
          applicantSector: res.data.applicantSector,
          applicant_file_path: res.data.applicant_file_path,
        }),
      );
    }
  }, [location]);

  useEffect(() => {
    if (isCompanyPage && token) {
      dispatch(applicantUserInit());
      companyIsLogin();
    }
    if (isApplicantPage && token) {
      dispatch(companyUserInit());
      applicantIsLogin();
    }
  }, [companyIsLogin, applicantIsLogin]);

  // useEffect(() => {
  // }, []);

  const handleLogout = async () => {
    try {
      dispatch(showLoading());
      await userLogout();
      removeCookie('accessToken');
      removeCookie('refreshToken');
      //location.pathname = '/';
      console.log(token);
    } catch (error) {
      AlertModal({
        message: '로그아웃이 정상적으로 처리되지 않았습니다. 다시 시도해주세요.',
      });
    } finally {
      dispatch(hideLoading());
    }
  };

  return (
    <HeaderInner isAdminPage={isAdminPage}>
      <SearchBar
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input type='text' value={searchTitle} placeholder='검색어를 입력해 주세요' onChange={e => handleChange(e)} />
        <button
          aria-label='submit'
          onClick={() => {
            console.log('검색어 입력!');
          }}
        >
          <img src='/icons/search.png' width='18px' height='20px' />
        </button>
      </SearchBar>
      <Icons>
        {isAdminPage ? null : (
          <span
            onClick={() => {
              AlertModal({
                message: '준비중입니다.',
              });
            }}
          >
            <BookmarkFill width='16px' height='20px' fill='#4357AC' />
          </span>
        )}
        <span
          onClick={() => {
            AlertModal({
              message: '준비중입니다.',
            });
          }}
        >
          <img src='/icons/notification.svg' width='20px' height='20px' />
        </span>
        {token ? (
          <span
            onClick={() => {
              handleLogout();
            }}
          >
            <Logout width='20px' height='20px' fill='#4357AC' />
          </span>
        ) : null}
      </Icons>
    </HeaderInner>
  );
};

const HeaderInner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 35px;
  padding: ${({ isAdminPage }: { isAdminPage: boolean }) => (isAdminPage ? '50px 100px 0' : '50px 70px 0')};
`;

const SearchBar = styled.form`
  width: 30%;
  min-width: 460px;
  height: 50px;
  display: flex;
  position: relative;
  input {
    width: 100%;
    padding: 0 30px 0 70px;
    border: 3px solid var(--color-primary-020);
    font-size: 14px;
    color: var(--color-gray-600);
    font-weight: bold;
    ::placeholder {
      color: var(--color-primary-020);
    }
  }
  button {
    position: absolute;
    background-color: transparent;
    top: 14px;
    left: 25px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 25px;
  span {
    cursor: pointer;
  }
`;

export default Header;
