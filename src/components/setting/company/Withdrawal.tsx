import { useState } from 'react';
import styled from 'styled-components';
import { Wrapper } from './Info';
import AlertModal from '@/components/common/AlertModal';

const Withdrawal = () => {
  const [check, setCheck] = useState(false);
  const handleSubmit = () => {};

  return (
    <Wrapper>
      <Inner>
        <h3>탈퇴 안내</h3>
        <p>회원탈퇴를 진행하기 전에 아래 항목을 꼭 확인해주세요.</p>
        <p>1. 탈퇴 후 개인 정보는 모두 삭제됩니다.</p>
        <ul>
          <li>회원이 포함되었던 정보 목록 삭제</li>
          <li>이메일 주소, 이름, 전화번호, 비밀번호 정보 삭제</li>
        </ul>
        <p>2. 탈퇴 후 일부 정보는 남아있습니다.</p>
        <ul>
          <li>회원이 업로드한 지원자 첨부파일, 회원이 남긴 지원자 평가내용</li>
        </ul>
        <div>
          <input id='box1' className='css-checkbox' type='checkbox' />
          <label onClick={() => setCheck(!check)} htmlFor='box1' className='css-label' />
          안내사항 모두 확인, 동의합니다.
        </div>
        <button
          onClick={() =>
            check
              ? handleSubmit
              : AlertModal({
                  message: '안내사항을 동의해주세요.',
                })
          }
        >
          탈퇴하기
        </button>
      </Inner>
    </Wrapper>
  );
};

const Inner = styled.div`
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: var(--color-gray-700);
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 20px;
  }
  ul {
    padding-left: 35px;
    margin-bottom: 20px;
    li {
      list-style: disc;
      line-height: 18px;
    }
  }
  button {
    width: 140px;
    height: 40px;
    font-size: 16px;
    border-radius: 20px;
    margin: 20px 0 0 auto;
    background-color: var(--color-primary-100);
    color: rgb(255, 255, 255);
    font-weight: bold;
  }
  input[type='checkbox'].css-checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0px;
    border: 0;
  }
  input[type='checkbox'].css-checkbox + label.css-label {
    width: 18px;
    height: 18px;
    display: inline-block;
    line-height: 70px;
    background-repeat: no-repeat;
    background-position: 1px 2px;
    vertical-align: middle;
    cursor: pointer;
    border: 2px solid var(--color-primary-100);
    border-radius: 4px;
    box-sizing: border-box;
    margin-right: 7px;
  }
  input[type='checkbox'].css-checkbox:checked + label.css-label {
    background-image: url(../icons/check.svg);
    background-size: 12px;
  }
`;

export default Withdrawal;
