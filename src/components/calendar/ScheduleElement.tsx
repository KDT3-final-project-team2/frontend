import { useState } from 'react';
import styled from 'styled-components';
import { AddSchedule, InputWrapper } from './CalendarUI';

const ScheduleElement = ({ index }: { index: number }) => {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEditIcon = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      {isEdit ? (
        <form>
          <AddSchedule>
            <span>이름</span> <input type='text' className='nameInput' />
            <span>내용</span> <input type='text' className='contentInput' />
            <button>저장</button>
          </AddSchedule>
        </form>
      ) : (
        <div className='schedule' key={index}>
          <p className='name'>박지원</p>
          <p className='content'>서류 통과 안내 및 면접 일정 보내기</p>
          <img src='/icons/edit.png' onClick={onClickEditIcon}></img>
          <img src='/icons/trashcan.png'></img>
        </div>
      )}
    </>
  );
};

export default ScheduleElement;
