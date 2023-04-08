import { days } from '@/constants/dayOfWeek';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { StyledCalendar, DayBox, DayGrayBox, DayWrapper, InputWrapper, AddSchedule } from './CalendarUI.styles';
import 'react-calendar/dist/Calendar.css';
import ScheduleElement from './ScheduleElement';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ScheduleSchema } from '@/utils/validationSchema';
import { postSchedule } from '@/api/commonApi';
import { useDateToString } from '@/hooks/useDateToString';

// type 나중에
const CalendarUI = ({ schedule, schedulePostMutate, scheduleDeleteMutate }: any) => {
  const [addSchedule, setAddSchedule] = useState(false);
  const [value, setValue] = useState(new Date());
  const nameInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, formState } = useForm<IScheduleData>({
    resolver: yupResolver(ScheduleSchema),
    mode: 'onChange',
  });

  const onChangeDate = (value: Date) => {
    setValue(value);
  };

  const filterSchedule = schedule?.filter((selectDate: any) => selectDate.title === useDateToString(value));

  const tileClassName = ({ date }: { date: Date }) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (
      (year === 2023 && month === 4 && day === 1) ||
      (year === 2023 && month === 4 && day === 11) ||
      (year === 2023 && month === 4 && day === 17) ||
      (year === 2023 && month === 4 && day === 12)
    ) {
      return 'highlighted';
    }

    if (date.getTime() === value.getTime()) {
      return 'selected';
    }

    return null;

    // const highlightDates = res
    //   .filter(
    //     data =>
    //       year === data.calendarDateTime.getFullYear() &&
    //       month === data.calendarDateTime.getMonth() + 1 &&
    //       day === data.calendarDateTime.getDate(),
    //   )
    //   .map(_ => 'highlighted');

    // const selectedDate = date.getTime() === value.getTime() ? 'selected' : '';

    // return [highlightDates.join(' '), selectedDate].join(' ');
  };

  const formatDay = (locale: any, date: Date) =>
    new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date).replace('일', '');

  const getPreviousDayString = (numDays: number) => {
    const previousDay = new Date(value);
    previousDay.setDate(value.getDate() - numDays);
    return previousDay.getDate();
  };

  const getAfterDayString = (numDays: number) => {
    const previousDay = new Date(value);
    previousDay.setDate(value.getDate() + numDays);
    return previousDay.getDate();
  };

  const onClickAddSchedule = () => {
    setAddSchedule(!addSchedule);
  };

  const onSubmitSchedule = (data: IScheduleData) => {
    console.log(data);
    schedulePostMutate({ title: useDateToString(value) });
    setAddSchedule(false);
    if (nameInputRef.current) {
      nameInputRef.current.value = '';
    }
    if (contentInputRef.current) {
      contentInputRef.current.value = '';
    }
  };

  return (
    <div>
      <StyledCalendar
        value={value}
        showNeighboringMonth={false}
        navigationLabel={({ date }: { date: Date }) => `${date.getFullYear()}. ${date.getMonth() + 1}`}
        onChange={onChangeDate}
        tileClassName={tileClassName}
        formatDay={formatDay}
      />

      <DayWrapper>
        {[3, 2, 1].map(numDays => (
          <DayGrayBox key={numDays}>
            <p>{getPreviousDayString(numDays)}</p>
          </DayGrayBox>
        ))}
        <DayBox>
          <p className='day'>{value.getDate()}</p>
          <p className='dayOfWeek'>{days[value.getDay()]}</p>
        </DayBox>
        {[1, 2, 3].map(numDays => (
          <DayGrayBox key={numDays}>
            <p>{getAfterDayString(numDays)}</p>
          </DayGrayBox>
        ))}
      </DayWrapper>
      <InputWrapper>
        {filterSchedule?.map((data, index) => (
          <ScheduleElement key={index} index={index} schedule={data} scheduleDeleteMutate={scheduleDeleteMutate} />
        ))}
        {addSchedule && (
          <form onSubmit={handleSubmit(onSubmitSchedule)}>
            <AddSchedule>
              <span>제목</span> <input type='text' className='nameInput' {...register('name')} ref={nameInputRef} />
              <span>내용</span>{' '}
              <input type='text' className='contentInput' {...register('content')} ref={contentInputRef} />
              <button style={{ backgroundColor: formState.isValid ? 'var(--color-primary-100)' : '' }}>저장</button>
            </AddSchedule>
          </form>
        )}
        <div className='add' onClick={onClickAddSchedule}>
          {addSchedule ? <img src='/icons/delete.png' /> : <img src='/icons/add.png' />}
        </div>
      </InputWrapper>
    </div>
  );
};

export default CalendarUI;
