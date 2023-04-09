import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ScheduleSchema } from '@/utils/validationSchema';
import { IScheduleElementProps } from '@/@types/props';
import { AddSchedule, InputWrapper } from './CalendarUI.styles';
import ConfirmModal from '../common/ConfirmModal';

const ScheduleElement = ({ schedule, scheduleDeleteMutate }: IScheduleElementProps) => {
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

  const onClickDeleteSchedule = () => {
    ConfirmModal({
      message: '삭제하시겠습니까?',
      action: () => {
        scheduleDeleteMutate(schedule.calendarId);
      },
    });
  };

  return (
    <>
      {isEdit ? (
        <form onSubmit={handleSubmit(onSubmitEditSchedule)}>
          <AddSchedule>
            <span>제목</span> <input type='text' className='nameInput' {...register('name')} />
            <span>내용</span> <input type='text' className='contentInput' {...register('content')} />
            <button style={{ backgroundColor: formState.isValid ? 'var(--color-primary-100)' : '' }}>수정</button>
            <img src='/icons/close.png' className='close' onClick={onClickEditIcon} />
          </AddSchedule>
        </form>
      ) : (
        <div className='schedule' key={schedule.calendarId}>
          <p className='name'>{schedule?.calendarTitle}</p>
          <p className='content'>{schedule?.calendarContent}</p>
          <img src='/icons/edit.png' onClick={onClickEditIcon}></img>
          <img src='/icons/trashcan.png' onClick={onClickDeleteSchedule}></img>
        </div>
      )}
    </>
  );
};

export default ScheduleElement;
