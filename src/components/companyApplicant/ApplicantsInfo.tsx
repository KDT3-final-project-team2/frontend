import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Avvvatars from 'avvvatars-react';
import { useAppDispatch } from '../../hooks/useDispatchHooks';
import { showLoading, hideLoading } from '../../store/loadingSlice';

export const res = [
  {
    applicant_id: 1,
    applicant_name: '박연진',
    applicant_contact: '555-1111',
    applicant_education: '대졸',
    applicant_work_experience: '1년차',
    applicant_sector: '의사',
    applicant_file_path: '/path/to/resume4.pdf',
  },
  {
    applicant_id: 2,
    applicant_name: '문동은',
    applicant_contact: '555-1111',
    applicant_education: '고졸',
    applicant_work_experience: '신입',
    applicant_sector: '간호사',
    applicant_file_path: '/path/to/resume4.pdf',
  },
];

const ApplicantsInfo = () => {
  const dispatch = useAppDispatch();
  const [info, setInfo] = useState({});

  const getApplicantsIfo = async () => {
    try {
      dispatch(showLoading());
      setInfo(res);
    } catch (error) {
    } finally {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getApplicantsIfo();
  }, []);

  return (
    <TabContainer>
      <Inner>
        <ul>
          {Array.isArray(info) ? (
            info.map((item?: any, idx?: number) => {
              return (
                <li key={idx}>
                  <Avvvatars value={item.applicant_name} style='character' size={32} />
                  <p className='name'>{item.applicant_name}</p>
                  <div>
                    <span>{item.applicant_sector}</span>
                    <span>{item.applicant_work_experience}</span>
                    <span>{item.applicant_education}</span>
                  </div>
                  <div>
                    <button>
                      <img src='/icons/mail.svg' alt='메일' width='20px' height='16px' />
                    </button>
                    <button>
                      <img src='/icons/bookmark.svg' alt='북마크' width='14px' height='18px' />
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <NoList>아직 지원한 지원자가 없습니다.</NoList>
          )}
        </ul>
      </Inner>
    </TabContainer>
  );
};

export const TabContainer = styled.div``;

export const Inner = styled.div`
  padding: 40px 0 50px;
  li {
    box-sizing: border-box;
    box-shadow: 2px 2px 10px 0px rgba(156, 163, 175, 0.2);
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 20px 30px;
    margin-bottom: 18px;
    gap: 30px;
    div {
      display: flex;
      gap: 10px;
      :last-child {
        margin-left: auto;
        gap: 20px;
      }
      button {
        padding: 0;
        background-color: transparent;
      }
    }
    .name {
      font-size: 18px;
      font-weight: bold;
      line-height: 25px;
    }
    span {
      border-radius: 50px;
      background-color: var(--color-gray-200);
      padding: 10px 15px 8px;
      font-size: 13px;
      font-weight: bold;
      color: var(--color-gray-400);
      :first-child {
        background-color: var(--color-primary-100);
        color: #fff;
      }
    }
  }
`;

export const NoList = styled.div``;

export default ApplicantsInfo;
