import { useState } from 'react';
import Avvvatars from 'avvvatars-react';
import styled from 'styled-components';
import EmailModal from '../mainhome/EmailModal';

const ApplicantsList = ({ item }: { item: any }) => {
  const [open, setOpen] = useState(false);
  const [emailModal, setEmailModal] = useState(false);

  return (
    <List open={open}>
      <Inner onClick={() => setOpen(!open)} open={open}>
        <Avvvatars value={item.name} style='character' size={32} />
        <p className='name'>{item.name}</p>
        <div className='tag'>
          <span>{item.sector}</span>
          <span>{item.workExperience}</span>
          <span>{item.education}</span>
        </div>
        <div className='last'>
          <span className='state'>{item.applicationStatus}</span>
          <button
            onClick={event => {
              event.stopPropagation();
              setEmailModal(true);
            }}
          >
            <img src='/icons/mail.svg' alt='메일' width='20px' height='16px' />
          </button>
          <button>
            <img src='/icons/bookmark.svg' alt='북마크' width='14px' height='18px' />
          </button>
        </div>
      </Inner>
      {emailModal ? (
        <EmailModal
          setEmailModal={setEmailModal}
          email={'email@email.com'}
          applicantName={'이름'}
          mailType={'기본'}
          applicationId={0}
        />
      ) : null}
      {open ? (
        <HideContent>
          <Resume>이력서</Resume>
          <Memo>
            <h2>메모</h2>
            <div>{item.memo}</div>
          </Memo>
        </HideContent>
      ) : null}
    </List>
  );
};

const List = styled.div`
  box-sizing: border-box;
  box-shadow: 2px 2px 10px 2px rgba(67, 87, 172, 0.15);
  border-radius: 20px;
  align-items: center;
  margin-bottom: 18px;
  gap: 30px;
  height: ${({ open }: { open: boolean }) => (open ? '460px' : '')};
  div {
    .last {
      display: flex;
      margin-left: auto;
      gap: 20px;
    }
    button {
      padding: 0;
      background-color: transparent;
    }
  }
  .name {
    color: var(--color-gray-600);
    font-size: 16px;
    font-weight: bold;
    padding-top: 3px;
  }
  .tag {
    display: flex;
    gap: 10px;
    position: ${({ open }: { open: boolean }) => (open ? 'absolute' : 'relative')};
    top: ${({ open }: { open: boolean }) => (open ? '102px' : '0')};
    left: ${({ open }: { open: boolean }) => (open ? '310px' : '0')};
    span {
      border-radius: 50px;
      background-color: var(--color-gray-200);
      padding: 10px 15px 8px;
      font-size: 13px;
      font-weight: bold;
      color: var(--color-gray-400);
      :first-child {
        background-color: var(--color-blue);
        color: #fff;
      }
    }
  }
  .state {
    border-radius: 50px;
    background-color: var(--color-gray-600);
    color: #fff;
    margin-right: 10px;
    padding: 10px 15px 8px;
    font-size: 13px;
    font-weight: bold;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  height: ${({ open }: { open: boolean }) => (open ? '72px' : '')};
  position: relative;
  gap: 20px;
  padding: 20px 30px;
  box-sizing: border-box;
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 60px);
    height: ${({ open }: { open: boolean }) => (open ? '2px' : '0')};
    background-color: var(--color-gray-200);
  }
`;

const HideContent = styled.div`
  height: 388px;
  padding: 30px 30px 50px;
  display: flex;
  gap: 50px;
`;

const Resume = styled.div`
  width: 230px;
  min-width: 230px;
  height: 100%;
  background-color: var(--color-gray-200);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Memo = styled.div`
  padding-top: 60px;
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 15px;
  width: 100%;
  h2 {
    font-size: 18px;
    font-weight: bold;
    color: var(--color-primary-050);
  }
  div {
    width: 100%;
    height: 100%;
    font-size: 15px;
    line-height: 20px;
    color: var(--color-primary-050);
    border-radius: 10px;
    border: 1px solid var(--color-primary-050);
    padding: 25px;
    overflow: auto;
  }
`;

export default ApplicantsList;
