import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import WebEditor from '@components/common/WebEditor';
import ReactQuill from 'react-quill';
import { getMailSample } from '@/constants/mailSample';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EditApplication, SendEmailApi } from '@/api/companyApi';
import AlertModal from '../common/AlertModal';
import { getHtmlToText } from '@/utils/getHtmlToText';
import { postSchedule } from '@/api/commonApi';
import { dateToString } from '@/utils/dateToSTring';

const EmailModal = ({
  setEmailModal,
  email,
  applicantName,
  mailType,
  jobpostTitle = '',
  applicationId,
}: {
  setEmailModal: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  applicantName: string;
  mailType: mailTypeCase;
  jobpostTitle?: string;
  applicationId: number;
}) => {
  const QuillRef = useRef<ReactQuill>();
  const [content, setContent] = useState(getMailSample({ applicantName, mailType, jobpostTitle }));
  const [receiver, setReceiver] = useState('');
  const [title, setTitle] = useState('');
  const [interviewDate, setInterviewDate] = useState('');

  const queryClient = useQueryClient();
  const { mutate: PostApplication } = useMutation(EditApplication, {
    onSuccess: () => {
      queryClient.invalidateQueries(['applications']);
    },
  });
  const { mutate: schedulePostMutate } = useMutation(postSchedule, {
    onSuccess: () => {
      queryClient.invalidateQueries(['schedule']);
    },
  });
  const textContent = getHtmlToText(content)!;
  const sendEmail = async () => {
    switch (mailType) {
      case '서류합격':
        if (!interviewDate) {
          AlertModal({ message: '면접일시를 선택해주세요.' });
          return;
        }
        const res1 = await SendEmailApi({ email, title, content: textContent });
        if (res1) {
          PostApplication({ applicationId, interviewDate, status: 'INTERVIEW' });
          schedulePostMutate({
            calendarTitle: applicantName,
            calendarContent: '면접예정',
            calendarDate: dateToString(interviewDate),
          });
          setEmailModal(false);
        }
        break;
      case '면접합격':
        const res2 = await SendEmailApi({ email, title, content: textContent });
        if (res2) {
          PostApplication({ applicationId, passDate: new Date().toISOString(), status: 'PASS' });
          setEmailModal(false);
        }
        break;
      case '서류불합격' || '면접불합격':
        const res3 = await SendEmailApi({ email, title, content: textContent });
        if (res3) {
          PostApplication({ applicationId, status: 'FAIL' });
          setEmailModal(false);
        }
        break;
      case '기본':
        const res4 = await SendEmailApi({ email, title, content: textContent });
        if (res4) {
          setEmailModal(false);
        }
        break;
    }
  };

  useEffect(() => {
    setReceiver(`${applicantName}, ${email}`);
    if (jobpostTitle) {
      setTitle(`${jobpostTitle} 관련 안내`);
    } else {
      setTitle('');
    }
    // setContents(getMailSample({ applicantName, mailType, jobpostTitle }));
  });

  return (
    <ModalBackground>
      <div id='container'>
        <header>
          <h3>{mailType} 이메일 전송</h3>
          <img src='/icons/close.png' alt='닫기' onClick={() => setEmailModal(false)} />
        </header>
        <div id='content'>
          <form>
            <div className='space-between'>
              <label htmlFor='emailAddress'>받는 사람</label>
              <input
                type='text'
                id='emailAddress'
                value={receiver}
                onChange={event => setReceiver(event.target.value)}
              />
            </div>
            <div className='space-between'>
              <label htmlFor='title'>제목</label>
              <input type='text' id='title' value={title} onChange={event => setTitle(event.target.value)} />
            </div>
            {mailType === '서류합격' ? (
              <div className='space-between flex-start'>
                <label htmlFor='interviewDate'>면접일시</label>
                <input
                  type='datetime-local'
                  id='interviewDate'
                  value={interviewDate}
                  onChange={event => setInterviewDate(event.target.value)}
                />
              </div>
            ) : null}
            <WebEditor QuillRef={QuillRef} content={content} setContent={setContent}></WebEditor>
          </form>
        </div>
        <div id='buttons'>
          <button onClick={() => setEmailModal(false)}>취소</button>
          <button onClick={sendEmail}>전송</button>
        </div>
      </div>
    </ModalBackground>
  );
};

export default EmailModal;

export const ModalBackground = styled.section`
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0000006b;
  padding-left: 20px;
  padding-right: 20px;
  #container {
    width: 1056px;
    height: fit-content;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(67, 87, 172, 0.19);
    border-radius: 19px;
    padding-bottom: 50px;
    position: relative;
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 63px;
      padding: 5px 40px 0;
      border-bottom: 1px solid #ececec;
      h3 {
        font-weight: 700;
        font-size: 16px;
      }
      img {
        cursor: pointer;
      }
    }
    #content {
      padding: 20px 40px;
      form {
        display: flex;
        flex-direction: column;
        gap: 9px;

        .space-between {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &.flex-start {
            justify-content: flex-start;
            input {
              width: 30%;
              padding-right: 10px;
            }
          }
          label {
            width: 90px;
            font-size: 16px;
            color: #374151;
          }
          input {
            width: 90%;
            height: 30px;
            border: 1px solid #7b7b7b;
            border-radius: 20px;
          }
        }
      }
    }
    #buttons {
      position: absolute;
      right: 40px;
      bottom: 40px;
      display: flex;
      gap: 16px;
      button {
        width: 140px;
        height: 40px;
        font-size: 18px;
        font-weight: bold;
        color: #8294cd;
        background-color: white;
        border: 1px solid #8294cd;
        border-radius: 20px;
        &:last-child {
          background: #4357ac;
          color: white;
        }
      }
    }
  }
`;
