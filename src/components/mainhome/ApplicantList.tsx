import Avvvatars from 'avvvatars-react';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import EmailModal from './EmailModal';
import ConfirmModal from '../common/ConfirmModal';
import { getDday } from '@/utils/getDday';
import AlertModal from '../common/AlertModal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EditApplication } from '@/api/companyApi';

const ApplicantList = ({ index, step, applicant }: { index: number; step: string; applicant: ApplicationData }) => {
  const [open, setOpen] = useState(index === 0 ? true : false);
  const [emailModal, setEmailModal] = useState(false);
  const [mailType, setMailType] = useState<mailTypeCase>('서류합격');
  const [memoInput, setMemoInput] = useState('');
  const {
    applicantId,
    name,
    email,
    birth,
    gender,
    contact,
    filePath,
    education,
    workExperience,
    sector,
    jobpostId,
    jobpostStatus,
    jobpostTitle,
    jobpostDueDate,
    memo,
    applicationStatus,
    applyDate,
    interviewDate,
    applicationId,
  } = applicant;

  const queryClient = useQueryClient();
  const { mutate: PostApplication } = useMutation(EditApplication, {
    onSuccess: () => {
      queryClient.invalidateQueries(['applications']);
    },
  });

  return (
    <ListComponent>
      <Head onClick={() => setOpen(!open)} open={open}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '32px' }}>
          <Avvvatars value={name} style='shape'></Avvvatars>
          <p className='name'>{name}</p>
          {open ? null : (
            <>
              <div className='sector'>{sector}</div>
              <div className='tag'># {education}</div>
              <div className='tag'># {workExperience}</div>
            </>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <p className='applyDate'>
            지원일{`\u00A0\u00A0\u00A0`}
            {applyDate.split('T')[0]}
          </p>
          <div className='dDay'>
            {interviewDate ? '면접' : '지원'} D
            {interviewDate ? getDday(interviewDate?.split('T')[0]) : `${getDday(applyDate?.split('T')[0])}`}
          </div>
          {step === '전체' ? <div className='status'>{applicationStatus}</div> : null}
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
          email={email}
          applicantName={name}
          mailType={mailType}
          jobpostTitle={jobpostTitle}
          applicationId={applicationId}
        />
      ) : null}
      <Body>
        {open ? (
          <>
            <div className='horizonLine'></div>
            <div className='content'>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minWidth: '210px',
                  height: '297px',
                  backgroundColor: '#ECECEC',
                }}
              >
                <img src='./images/noImage.png' alt='' width={150} height={200} />
              </div>
              <div style={{ width: '100%' }}>
                <div className='jobpostTitle'>[{jobpostTitle} 공고]</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '32px' }}>
                  <div className='sector'>{sector}</div>
                  <div className='tag'># {education}</div>
                  <div className='tag'># {workExperience}</div>
                </div>
                <p>메모</p>
                <textarea
                  name='memo'
                  id='memo'
                  cols={30}
                  rows={10}
                  defaultValue={memo}
                  onChange={event => PostApplication({ applicationId, memo: event.currentTarget.value })}
                ></textarea>
                <div className='buttons'>
                  {step === '최종합격' || step === '전체' ? (
                    ''
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          if (step === '서류지원') {
                            ConfirmModal({
                              message:
                                '서류합격메일 전송화면으로 이동합니다. 메일전송 후 면접대상자로 분류되며 지정한 면접일시가 저장됩니다.',
                              action: () => {
                                setMailType('서류합격');
                                setEmailModal(true);
                              },
                            });
                          } else {
                            ConfirmModal({
                              message: '면접합격메일 전송화면으로 이동합니다. 메일전송 후 최종합격자로 분류됩니다.',
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
                              message: '서류불합격 메일 전송화면으로 이동합니다. 메일전송 후 불합격자로 분류됩니다.',
                              action: () => {
                                setMailType('서류불합격');
                                setEmailModal(true);
                              },
                            });
                          } else {
                            ConfirmModal({
                              message: '면접불합격 메일 전송화면으로 이동합니다. 메일전송 후 불합격자로 분류됩니다.',
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
    margin-right: 10px;
  }
  .email {
    cursor: pointer;
  }
  .status {
    border-radius: 14px;
    padding: 3px 12px 0;
    font-size: 13px;
    line-height: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: white;
    background-color: gray;
    margin-right: 10px;
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
  .jobpostTitle {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
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
    bottom: 5px;
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
