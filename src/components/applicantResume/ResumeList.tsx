import { useState } from 'react';
import styled from 'styled-components';

const ResumeList = ({ item }: { item: any }) => {
  const [open, setOpen] = useState(false);

  const onClickDropDwon = () => {
    setOpen(!open);
  };

  const handleEditResume = () => {};

  const handleDeleteResume = () => {};

  return (
    <List>
      <Inner>
        <p className='name'>{item.applicant_file_path.replace('/path/to/', '').replace('.pdf', '')}</p>
        <div className='last'>
          <button onClick={() => {}}>미리보기</button>
          <button onClick={onClickDropDwon}>
            <img src='/icons/more_vertical.png' />
          </button>
          {open && (
            <DropDownBox>
              <div onClick={handleEditResume}>수정</div>
              <div onClick={handleDeleteResume}>삭제</div>
            </DropDownBox>
          )}
        </div>
      </Inner>
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
  div {
    .last {
      display: flex;
      margin-left: auto;
      gap: 20px;
      position: relative;
    }
    button {
      padding: 0;
      background-color: transparent;
      :first-child {
        font-size: 13px;
        font-weight: bold;
        background-color: var(--color-gray-400);
        color: rgb(255, 255, 255);
        border-radius: 20px;
        line-height: 29px;
        height: 28px;
        padding: 3px 12px 0px;
      }
    }
  }
  .name {
    color: var(--color-gray-600);
    font-size: 16px;
    font-weight: bold;
    padding-top: 3px;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 20px;
  padding: 20px 30px;
  box-sizing: border-box;
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 60px);
    background-color: var(--color-gray-200);
  }
`;

const DropDownBox = styled.div`
  position: absolute;
  width: 140px;
  height: 99px;
  right: -12px;
  top: 40px;
  background-color: #fff;
  box-shadow: 2px 2px 10px 2px rgba(67, 87, 172, 0.15);
  border-radius: 10px;
  padding: 16px 0;
  z-index: 1;
  div {
    width: 140px;
    height: 34px;
    &:hover {
      background: #b3c2e7;
      color: #fff;
      cursor: pointer;
    }
    display: flex;
    align-items: center;
    padding: 9px 20px 8px 20px;
  }
`;

export default ResumeList;
