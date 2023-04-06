import Avvvatars from 'avvvatars-react';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import EmailModal from './EmailModal';
import ConfirmModal from '../common/ConfirmModal';
import { getDday } from '@/utils/getDday';
import AlertModal from '../common/AlertModal';

const ApplicantList = ({ index, step, applicant }: { index: number; step: string; applicant: CompanyMainData }) => {
  const [open, setOpen] = useState(index === 0 ? true : false);
  const [emailModal, setEmailModal] = useState(false);
  const [mailType, setMailType] = useState<keyof mailTypeCase>('서류합격');
  const {
    applicantId,
    applicantName,
    applicantEmail,
    applicantBirthdate,
    applicantGender,
    applicantContact,
    applicantFilePath,
    applicantEducation,
    applicantWorkExperience,
    applicantSector,
    jobpostID,
    jobpostTitle,
    applicationId,
    applicationStatusType,
    applyDate,
    interviewDate,
    memo,
  } = applicant;

  return (
    <ListComponent>
      <Head onClick={() => setOpen(!open)} open={open}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '32px' }}>
          <Avvvatars value={applicantName} style='shape'></Avvvatars>
          <p className='name'>{applicantName}</p>
          {open ? null : (
            <>
              <div className='sector'>{applicantSector}</div>
              <div className='tag'># {applicantEducation}</div>
              <div className='tag'># {applicantWorkExperience}</div>
            </>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <p className='applyDate'>{applyDate}</p>
          <div className='dDay'>
            {step === '서류지원' || step === '서류통과' ? '지원' : '면접'} D
            {step === '서류지원' || step === '서류통과' ? `${getDday(applyDate)}` : getDday(interviewDate)}
          </div>
          <img
            src='/icons/email.png'
            alt='이메일'
            className='email'
            onClick={event => {
              event.stopPropagation();
              setMailType('기본');
              setEmailModal(true);
            }}
          />
        </div>
      </Head>
      {emailModal ? (
        <EmailModal
          setEmailModal={setEmailModal}
          email={applicantEmail}
          applicantName={applicantName}
          mailType={mailType}
          jobpostTitle={jobpostTitle}
        />
      ) : null}
      <Body>
        {open ? (
          <>
            <div className='horizonLine'></div>
            <div className='content'>
              <div style={{ minWidth: '210px', height: '297px', backgroundColor: '#ECECEC' }}>이력서</div>
              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '32px' }}>
                  <div className='sector'>{applicantSector}</div>
                  <div className='tag'># {applicantEducation}</div>
                  <div className='tag'># {applicantWorkExperience}</div>
                </div>
                <p>메모</p>
                <textarea name='memo' id='memo' cols={30} rows={10}>
                  {memo}
                </textarea>
                <div className='buttons'>
                  {step === '서류통과' ? (
                    <button onClick={() => {}}>면접일정확정</button>
                  ) : step === '최종합격' ? (
                    ''
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          if (step === '서류지원') {
                            ConfirmModal({
                              message: '서류합격 메일 전송화면으로 이동합니다.',
                              action: () => {
                                setMailType('서류합격');
                                setEmailModal(true);
                              },
                            });
                          } else {
                            ConfirmModal({
                              message: '면접합격 메일 전송화면으로 이동합니다.',
                              action: () => {
                                setMailType('면접합격');
                                setEmailModal(true);
                              },
                            });
                          }
                        }}
                      >
                        합격
                      </button>
                      <button
                        onClick={() => {
                          if (step === '서류지원') {
                            ConfirmModal({
                              message: '서류불합격 메일 전송화면으로 이동합니다.',
                              action: () => {
                                setMailType('서류불합격');
                                setEmailModal(true);
                              },
                            });
                          } else {
                            ConfirmModal({
                              message: '면접불합격 메일 전송화면으로 이동합니다.',
                              action: () => {
                                setMailType('면접불합격');
                                setEmailModal(true);
                              },
                            });
                          }
                        }}
                      >
                        불합격
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : null}
      </Body>
    </ListComponent>
  );
};

export default ApplicantList;

const ListComponent = styled.div`
  width: 100%;
  position: relative;
  .sector,
  .tag,
  .dDay {
    border-radius: 14px;
    padding: 3px 12px 0;
    font-size: 13px;
    line-height: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .sector {
    background-color: var(--color-blue);
    color: white;
  }
  .tag {
    background-color: #ececec;
    color: #7b7b7b;
  }
`;

const Head = styled.div<{ open: boolean }>`
  width: 100%;
  height: ${({ open }) => {
    return open ? '460px' : '70px';
  }};
  box-shadow: 2px 2px 10px 2px #4357ac26;
  background: #ffffff;
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  align-items: ${({ open }) => {
    return open ? 'flex-start' : 'center';
  }};
  justify-content: space-between;
  padding: ${({ open }) => {
    return open ? '15px 40px' : '0 40px';
  }};
  margin-bottom: 20px;
  .profile {
    width: 32px;
    height: 32px;
    background-color: gray;
    border-radius: 100%;
    margin-right: 10px;
  }
  .name,
  .applyDate {
    color: #4b5563;
    font-size: 16px;
    font-weight: bold;
    line-height: 32px;
    margin-top: 3px;
    margin-right: 10px;
  }

  .dDay {
    background: #4b5563;
    color: white;
    margin-right: 20px;
  }
  .email {
    cursor: pointer;
  }
`;

const Body = styled.div`
  position: absolute;
  top: 60px;
  left: 40px;
  right: 40px;
  .horizonLine {
    width: 100%;
    border: 1px solid #ececec;
  }
  .content {
    padding: 35px;
    display: flex;
    gap: 54px;
  }
  p {
    color: #4b5563;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin: 23px 0 8px;
  }
  textarea {
    width: 100%;
    height: 148px;
    background: #eff6ff;
    border: none;
    border-radius: 10px;
    padding: 12px;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
  .buttons {
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: flex;
    gap: 16px;
    button {
      width: 140px;
      height: 40px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: white;
      background-color: #7b7b7b;
      &:first-child {
        background-color: #5a98e1;
      }
    }
  }
`;
