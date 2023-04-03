import React, { SetStateAction, useRef, useState } from 'react';
import { ModalBackground } from '../mainhome/EmailModal';
import WebEditor from '@components/common/WebEditor';
import ReactQuill from 'react-quill';

const MailTemplateModal = ({
  setTemplateModal,
  title,
  buttonTitle,
}: {
  setTemplateModal: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  buttonTitle?: string;
}) => {
  const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState('');

  const sendEmailTemplate = () => {
    console.log(contents);
  };

  return (
    <ModalBackground>
      <div id='container'>
        <header>
          <h3>{title}</h3>
          <img src='/icons/close.png' alt='닫기' onClick={() => setTemplateModal(false)} />
        </header>
        <div id='content'>
          <form>
            <div className='space-between'>
              <label htmlFor='emailAddress'>받는 사람</label>
              <input type='text' id='emailAddress' />
            </div>
            <div className='space-between'>
              <label htmlFor='title'>제목</label>
              <input type='text' id='title' />
            </div>
            <WebEditor QuillRef={QuillRef} contents={contents} setContents={setContents}></WebEditor>
          </form>
        </div>
        <div id='buttons'>
          <button onClick={() => setTemplateModal(false)}>취소</button>
          <button onClick={sendEmailTemplate}>{buttonTitle}</button>
        </div>
      </div>
    </ModalBackground>
  );
};

export default MailTemplateModal;
