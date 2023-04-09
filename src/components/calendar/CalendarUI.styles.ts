import styled from 'styled-components';
import Calendar from 'react-calendar';

export const StyledCalendar = styled(Calendar)`
  background: #ffffff;
  border-radius: 20px;
  border: none;
  padding: 21px 15px;
  margin: 76px 0px 48px 36px;
  width: 385px;
  .selected {
    background: #4357ac;
    border-radius: 10px;
  }

  .highlighted {
    font-weight: bold;
    border-bottom: 3px solid var(--color-primary-100);
  }

  .react-calendar__tile {
    &abbr {
      text-decoration: none;
    }
    &abbr:before {
      content: none;
    }
  }
  .react-calendar__navigation {
    position: relative;
  }
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
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }
  .react-calendar__navigation__arrow {
    color: #4357ac;
    font-size: 45px;
  }
  .react-calendar__navigation__prev-button {
    position: absolute;
    right: 25px;
    top: -16px;
    padding: 0;
  }
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
    &:hover {
      border-radius: 10px;
    }
    &:focus {
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
  .react-calendar__tile--now {
    border-radius: 10px;
  }
`;

export const DayBox = styled.div`
  background: #ffffff;
  border: 2px solid var(--color-primary-100);
  border-bottom: 7px solid var(--color-primary-100);
  border-radius: 6px;
  padding-top: 13px;
  width: 80px;
  height: 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  .day {
    font-weight: 700;
    font-size: 26px;
    color: var(--color-primary-100);
  }
  .dayOfWeek {
    color: #1f2937;
    font-weight: 400;
    font-size: 12px;
  }
`;

export const DayGrayBox = styled.div`
  width: 49px;
  height: 82px;
  border-radius: 6px;
  background: #ffffff;
  border: 0.5px solid #d2d5da;
  box-shadow: 0px 0px 2px rgba(34, 63, 83, 0.1);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  :nth-child(1),
  :nth-child(7) {
    opacity: 0.6;
    border-left: none;
  }
  :nth-child(2),
  :nth-child(6) {
    opacity: 0.8;
  }
  p {
    color: #7b7b7b;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.019em;
  }
`;

export const DayWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 28px;
`;

export const InputWrapper = styled.div`
  margin-left: 36px;
  .schedule {
    height: 56px;
    width: 384px;
    border-radius: 10px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 10px;
    padding: 0 20px;
    p {
      padding-top: 3px;
    }
    .name {
      width: 80px;
      text-align: center;
      font-weight: 700;
      font-size: 15px;
      color: #1f2937;
    }
    .content {
      width: 240px;
      text-align: center;
      font-weight: 400;
      font-size: 15px;
      letter-spacing: -0.03em;
      color: #1f2937;
    }
    img {
      cursor: pointer;
    }
  }
  .add {
    height: 56px;
    width: 384px;
    border-radius: 10px;
    background: #ffffff;
    opacity: 0.7;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 50px;
  }
`;

export const AddSchedule = styled.div`
  height: 56px;
  width: 384px;
  border-radius: 10px;
  background: #ffffff;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  span {
    font-weight: 700;
    font-size: 15px;
    color: #1f2937;
    padding-top: 3px;
  }
  input {
    padding-left: 3px;
    border: none;
    border-bottom: 3px solid var(--color-primary-100);
    height: 28px;
    border-radius: 0px;
  }
  .nameInput {
    width: 45px;
  }
  .contentInput {
    width: 120px;
  }
  button {
    border-radius: 20px;
    padding: 3px 12px;
    color: #fff;
    font-weight: 700;
    margin-left: 10px;
  }
  .close {
    margin-left: 3px;
    cursor: pointer;
  }
`;
