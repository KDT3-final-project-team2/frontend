import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ICheckBoxProps } from '../../@types/props';

const CheckBox = ({ title, checkedItems, setCheckedItems, index, text }: ICheckBoxProps) => {
  const [toggle, setToggle] = useState(index === 0 ? true : false);
  const handleOneCheck = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      setCheckedItems([...checkedItems, target.id]);
    } else {
      setCheckedItems(checkedItems.filter(value => value !== target.id));
    }
  };
  function createMarkup() {
    return { __html: text };
  }

  return (
    <CheckBoxList style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
        <input
          type='checkbox'
          checked={checkedItems.includes(title) ? true : false}
          id={title}
          onChange={handleOneCheck}
        />
        <label htmlFor={title}>
          <img src='/icons/check.png' alt='체크' className='check' />
          <div>[필수] {title}</div>
        </label>
        {toggle ? (
          <img src='/icons/toggleArrowUp.png' alt='닫기' onClick={() => setToggle(false)} />
        ) : (
          <img src='/icons/toggleArrowDown.png' alt='열기' onClick={() => setToggle(true)} />
        )}
      </div>

      {toggle ? (
        <TermContainer>
          <div className='border'>
            <div dangerouslySetInnerHTML={createMarkup()}></div>
          </div>
        </TermContainer>
      ) : null}
    </CheckBoxList>
  );
};

export default CheckBox;

const CheckBoxList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  div {
    div {
      padding-top: 3px;
    }
    img {
      position: absolute;
      right: 0;
    }
  }

  div::-webkit-scrollbar-thumb {
    width: 8px;
    height: 31px;
    background-color: black;
  }
  div::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const TermContainer = styled.div`
  .border {
    height: 200px;
    width: 700px;
    overflow-y: scroll;
    border: 1px solid #c0c0c0;
    border-radius: 5px;
    margin: 25px;
    position: relative;
    padding: 5px;
    p {
      font-size: 13px;
      line-height: 15px;
      word-spacing: 1px;
    }
  }
  .border::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  .border::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    background-clip: padding-box;
    border: 1px solid transparent;
  }

  .border::-webkit-scrollbar-track {
    background: transparent;
  }
`;
