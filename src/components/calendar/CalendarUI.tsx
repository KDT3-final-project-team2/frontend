import { days } from '@/constants/dayOfWeek';
import { useState } from 'react';
import { StyledCalendar, DayBox, DayGrayBox, DayWrapper, InputWrapper, AddSchedule } from './CalendarUI.styles';
import 'react-calendar/dist/Calendar.css';
import ScheduleElement from './ScheduleElement';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ScheduleSchema } from '@/utils/validationSchema';
import { ICalendarUIProps } from '@/@types/props';
import { dateToString } from '@/utils/dateToSTring';

const CalendarUI = ({ schedule, schedulePostMutate, scheduleDeleteMutate, schedulePutMutate }: ICalendarUIProps) => {
  const [addSchedule, setAddSchedule] = useState(false);
  const [value, setValue] = useState(new Date());

  const { register, handleSubmit, formState, reset } = useForm<IScheduleData>({
    resolver: yupResolver(ScheduleSchema),
    mode: 'onChange',
  });

  const onChangeDate = (value: Date) => {
    setValue(value);
  };

  const filterSchedule = schedule?.filter(
    (selectDate: GetCalendarData) => selectDate.calendarDate === dateToString(value),
  );

  const scheduleArr: number[][] = [];

  if (schedule) {
    for (const data of schedule) {
      const arr = [];
      const selectyear = parseInt(data.calendarDate.substring(0, 4));
      arr.push(selectyear);
      const selectmonth = parseInt(data.calendarDate.substring(5, 7));
      arr.push(selectmonth);
      const selectday = parseInt(data.calendarDate.substring(8, 10));
      arr.push(selectday);
      scheduleArr.push(arr);
    }
  }

  const tileClassName = ({ date }: { date: Date }) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let isHighlighted = false;
    for (const scheduleDate of scheduleArr) {
      if (year === scheduleDate[0] && month === scheduleDate[1] && day === scheduleDate[2]) {
        isHighlighted = true;
        break;
      }
    }
    if (isHighlighted) {
      return 'highlighted';
    }
    if (date.getTime() === value.getTime()) {
      return 'selected';
    }
    return null;
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
    schedulePostMutate({
      calendarTitle: data.name,
      calendarContent: data.content,
      calendarDate: dateToString(value),
    });
    setAddSchedule(false);
    reset();
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
        {filterSchedule?.map((data: GetCalendarData) => (
          <ScheduleElement
            key={data.calendarId}
            schedule={data}
            scheduleDeleteMutate={scheduleDeleteMutate}
            schedulePutMutate={schedulePutMutate}
          />
        ))}
        {addSchedule && (
          <form onSubmit={handleSubmit(onSubmitSchedule)}>
            <AddSchedule>
              <span>제목</span> <input type='text' className='nameInput' {...register('name')} />
              <span>내용</span> <input type='text' className='contentInput' {...register('content')} />
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
