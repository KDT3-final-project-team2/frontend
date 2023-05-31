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

  // 모든 등록된 달력 일정 중, 선택 된 날짜에 등록된 일정이 있는지 찾습니다.
  const filterSchedule = schedule?.filter(
    (selectDate: GetCalendarData) => selectDate.calendarDate === dateToString(value),
  );

  const scheduleArr: number[][] = [];

  if (schedule) {
    for (const data of schedule) {
      const arr = [];
      // ex) "calendarDate": "2023-04-09"
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
        value={value} // 현재 선택된 날짜
        showNeighboringMonth={false} // false : 현재 달력에 표시된 달의 이전 달과 다음 달의 날짜는 표시되지 않는다.
        navigationLabel={({ date }: { date: Date }) => `${date.getFullYear()}. ${date.getMonth() + 1}`} // 달력 네비게이션 옆에 년, 월이 표시되는데 어떤 방식으로 표시할 지 커스터마이징
        onChange={onChangeDate}
        tileClassName={tileClassName} // 해당 날짜가 특정 조건을 만족하면 해당 날짜에 css 클래스 이름을 붙여줍니다.('highlighted', 'selected') .highlighted, .selected를 사용해 css코드를 작성해두었습니다.
        formatDay={formatDay} // 원래는 달력에 날짜에 '1일', '2일' 이렇게 적혀있었는데 그냥 숫자만 적히게 하기 위해서
      />
      <DayWrapper>
        {/* 날짜에 그냥 +1, -1을 해주면 1일을 클릭 시 옆에 -1, -2, -3이라고 나와서 이렇게 getPreviousDayString, getAfterDayString 함수를 만들어 처리했습니다. */}
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
