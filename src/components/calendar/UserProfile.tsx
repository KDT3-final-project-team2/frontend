import { useAppSelector } from '@/hooks/useDispatchHooks';
import Avvvatars from 'avvvatars-react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const UserProfile = () => {
  const onClickToggle = () => {};
  const [company, setCompany] = useState(false);
  const [applicant, setApplicant] = useState(false);

  const companyUser = useAppSelector(state => state.companyUser);
  const applicantUser = useAppSelector(state => state.applicantUser);

  useEffect(() => {
    if (companyUser?.companyId) {
      setCompany(true);
      setApplicant(false);
    }
    if (applicantUser?.applicantId) {
      setApplicant(true);
      setCompany(false);
    }
  }, [companyUser, applicantUser]);

  return (
    <ProfileWrapper>
      <img src='/icons/dubbleArrow.png' onClick={onClickToggle} />
      <div className='profile'>
        {company && (
          <>
            <div className='nameBox'>
              <p className='name'>{companyUser?.ceoName}</p>
              <p className='hospital'>{companyUser?.companyNm}</p>
            </div>
            <Avvvatars value={companyUser?.companyNm || ''} style='character' size={50} />
          </>
        )}
        {applicant && (
          <>
            <div className='nameBox'>
              <p className='name'>{applicantUser?.applicantName}</p>
              <p className='hospital'>{applicantUser?.applicantSector}</p>
            </div>
            <Avvvatars value={applicantUser?.applicantName || ''} style='character' size={50} />
          </>
        )}
      </div>
    </ProfileWrapper>
  );
};

export default UserProfile;

const ProfileWrapper = styled.div`
  margin-top: 54px;
  padding-left: 55px;
  padding-right: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    .nameBox {
      padding-top: 5px;
      .name {
        margin-bottom: 4px;
        font-weight: 700;
        font-size: 18px;
      }
      .hospital {
        color: #7b7b7b;
        font-weight: 700;
        font-size: 14px;
        text-align: right;
      }
    }
  }
`;
