import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const CalendarUI = () => {
  const [value, setValue] = useState(new Date());
  console.log('날짜', value);

  const onChangeDate = (value: Date) => {
    setValue(value);
  };

  // tileClassName 콜백 함수 설정
  const tileClassName = ({ date }: { date: Date }) => {
    console.log(date);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (
      (year === 2023 && month === 3 && day === 1) ||
      (year === 2023 && month === 3 && day === 10) ||
      (year === 2023 && month === 3 && day === 17) ||
      (year === 2023 && month === 3 && day === 11)
    ) {
      return 'highlighted';
    }

    if (date.getTime() === value.getTime()) {
      return 'selected';
    }

    return null;
  };

  const formatDay = (locale, date) =>
    new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date).replace('일', '');

  return (
    <div>
      <StyledCalendar
        value={value}
        showNeighboringMonth={false}
        onChange={onChangeDate}
        tileClassName={tileClassName}
        formatDay={formatDay}
        navigationLabel={({ date, label }) => `${date.getFullYear()}. ${date.getMonth() + 1}`}
      />
      <div className='contents'>
        {value.getFullYear()}년 {value.getMonth() + 1}월 {value.getDate()}일
        {value.getFullYear() === 2023 && value.getMonth() + 1 === 3 && [1, 10, 17].includes(value.getDate()) && (
          <div>박지원 면접</div>
        )}
      </div>
    </div>
  );
};

export default CalendarUI;

const StyledCalendar = styled(Calendar)`
  background: #ffffff;
  border-radius: 20px;
  border: none;
  padding: 21px 15px;
  .selected {
    background: #4357ac;
    border-radius: 10px;
  }

  .highlighted {
    font-weight: bold;
    border-bottom: 3px solid var(--color-primary-100);
  }

  .react-calendar__tile {
    & abbr {
      text-decoration: none;
    }

    & abbr:before {
      content: none;
    }
  }

  // 캘린더 header
  .react-calendar__navigation {
    position: relative;
  }
  // 날짜
  .react-calendar__navigation__label {
    position: absolute;
    padding: 0;
    margin-left: 9px;
    margin-top: 4px;
    :hover {
      background-color: #fff;
    }
    span: hover {
      background-color: #fff;
    }
  }
  .react-calendar__navigation__label__labelText {
    font-weight: 700;
    font-size: 26px;
    color: #4357ac;
  }
  // arrow 두개인거 사라지게
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }
  // arrow
  .react-calendar__navigation__arrow {
    color: #4357ac;
    font-size: 45px;
  }
  // 앞에 arrow
  .react-calendar__navigation__prev-button {
    position: absolute;
    right: 25px;
    top: -16px;
    padding: 0;
  }
  // 뒤에 arrow
  .react-calendar__navigation__next-button {
    position: absolute;
    right: 1px;
    top: -16px;
    padding: 0;
  }
  .react-calendar__month-view__weekdays__weekday {
    font-weight: 400;
    font-size: 12px;
    color: #374151;
    abbr {
      text-decoration: none;
    }
  }
  .react-calendar__tile {
    margin-top: 16px;
    padding: 14px 10px;
    &: hover {
      border-radius: 10px;
    }
    &: focus {
      background-color: var(--color-primary-100);
    }
    abbr {
      font-weight: 400;
      font-size: 15px;
    }
  }
  .react-calendar__tile--active:enabled:focus {
    background: var(--color-primary-100);
    border-radius: 10px;
  }
  .react-calendar__navigation button:enabled:focus,
  .react-calendar__navigation button:enabled:hover {
    background-color: transparent;
    border-radius: 10px;
  }
`;
