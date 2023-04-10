import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/useDispatchHooks';
import { showLoading, hideLoading } from '../../store/loadingSlice';
import ResumeList from '@/components/applicantResume/ResumeList';
import ResumeModal from '@/components/applicantResume/ResumeModal';
import { getApplicantResume } from '@/api/applicantApi';
import AlertModal from '@/components/common/AlertModal';
import { Inner, NoList } from '@/components/companyApplicant/ApplicantsInfo';

// export const res = [
//   {
//     applicant_file_path: '/path/to/resume4.pdf',
//   },
//   {
//     applicant_file_path: '/path/to/resume4.pdf',
//   },
// ];

const ApplicantResume = () => {
  const dispatch = useAppDispatch();
  const [resume, setResume] = useState({});
  const [resumeModal, setResumeModal] = useState(false);

  const getResume = async () => {
    try {
      dispatch(showLoading());
      const res = await getApplicantResume();
      console.log(res);
      setResume(res);
    } catch (error) {
      AlertModal({
        message: '에러가 발생했습니다. 다시 시도해주세요.',
      });
    } finally {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getResume();
  }, []);

  return (
    <ContainerInner>
      <Title>이력서</Title>
      <button
        className='button'
        onClick={() => {
          setResumeModal(true);
        }}
      >
        등록하기
      </button>
      <Inner>
        {Array.isArray(resume) ? (
          resume.map((item: any, idx: number) => {
            return <ResumeList item={item} key={idx} />;
          })
        ) : (
          <NoList>등록한 이력서가 없습니다.</NoList>
        )}
      </Inner>
      {resumeModal ? <ResumeModal setResumeModal={setResumeModal} /> : null}
    </ContainerInner>
  );
};

export const ContainerInner = styled.div`
  padding: 30px 70px 0;
  .button {
    width: 120px;
    height: 40px;
    font-size: 16px;
    border-radius: 20px;
    margin-left: auto;
    background-color: var(--color-primary-100);
    color: #fff;
    font-weight: bold;
    padding-top: 2px;
  }
`;

export const Title = styled.h1`
  font-size: 34px;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;
`;

export default ApplicantResume;
