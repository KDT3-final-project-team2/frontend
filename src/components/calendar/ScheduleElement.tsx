import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ScheduleSchema } from '@/utils/validationSchema';
import { IScheduleElementProps } from '@/@types/props';
import { AddSchedule, InputWrapper } from './CalendarUI.styles';

const ScheduleElement = ({ index }: IScheduleElementProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const { register, handleSubmit, formState } = useForm<IScheduleData>({
    resolver: yupResolver(ScheduleSchema),
    mode: 'onChange',
  });

  const onClickEditIcon = () => {
    setIsEdit(!isEdit);
  };

  const onSubmitEditSchedule = (data: IScheduleData) => {
    console.log(data);
    setIsEdit(false);
  };

  return (
    <>
      {isEdit ? (
        <form onSubmit={handleSubmit(onSubmitEditSchedule)}>
          <AddSchedule>
            <span>이름</span> <input type='text' className='nameInput' {...register('name')} />
            <span>내용</span> <input type='text' className='contentInput' {...register('content')} />
            <button style={{ backgroundColor: formState.isValid ? 'var(--color-primary-100)' : '' }}>수정</button>
            <img src='/icons/close.png' className='close' onClick={onClickEditIcon} />
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
