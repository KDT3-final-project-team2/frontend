import { ISelectBoxProps } from '@/@types/props';
import { Label, PostingTitleBox } from './PostEditModal';
import styled from 'styled-components';
import { ChangeEvent } from 'react';

export const SelectBox = ({ label, options, setValue, trigger, property, defaultValue }: ISelectBoxProps) => {
  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(property, event.target.value);
    trigger(property);
  };

  let optionValue = '';
  switch (defaultValue) {
    case '의사':
      optionValue = 'DOCTOR';
      break;
    case '간호사':
      optionValue = 'NURSE';
      break;
    case '간호조무사':
      optionValue = 'NURSE_AIDE';
      break;
    case '원무과':
      optionValue = 'MEDICAL_RECORDS_PROFESSIONAL';
      break;
    case '의료기사':
      optionValue = 'MEDICAL_TECHNICIAN';
      break;
    case '신입':
      optionValue = 'NEWCOMER';
      break;
    case '1년차':
      optionValue = 'ONE_YEAR';
      break;
    case '2년차':
      optionValue = 'TWO_YEAR';
      break;
    case '3년차':
      optionValue = 'THREE_YEAR';
      break;
    case '4년차':
      optionValue = 'FOUR_YEAR';
      break;
    case '5년차 이상':
      optionValue = 'FIVE_YEAR_OVER';
      break;
    case '고졸':
      optionValue = 'HIGH_SCHOOL';
      break;
    case '초대졸':
      optionValue = 'JUNIOR_COLLEGE';
      break;
    case '대졸':
      optionValue = 'UNIVERSITY';
      break;
    case '석박사':
      optionValue = 'MASTER_AND_DOCTOR';
      break;
    default:
      optionValue = defaultValue;
  }

  return (
    <>
      {optionValue && (
        <PostingTitleBox>
          <Label htmlFor='sector'>{label}</Label>
          <SelectWrapper onChange={handleOptionChange} defaultValue={optionValue}>
            <option>선택하세요.</option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectWrapper>
        </PostingTitleBox>
      )}
    </>
  );
};

const SelectWrapper = styled.select`
  border-radius: 20px;
  width: 250px;
  height: 30px;
  padding-left: 10px;
`;
