import React, { SetStateAction, useRef, useState } from 'react';
import styled from 'styled-components';
import WebEditor from '../../components/common/WebEditor';
import ReactQuill from 'react-quill';

const EmailModal = ({ setEmailModal }: { setEmailModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState('');

  const sendEmail = () => {
    console.log(contents);
  };

  return (
    <ModalBackground>
      <div id='container'>
        <header>
          <h3>안내 이메일 전송</h3>
          <img src='/icons/close.png' alt='닫기' onClick={() => setEmailModal(false)} />
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
