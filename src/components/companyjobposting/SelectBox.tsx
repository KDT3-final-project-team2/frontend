import { ISelectBoxProps } from '@/@types/props';
import { Label, PostingTitleBox } from './PostEditModal';
import styled from 'styled-components';
import { ChangeEvent } from 'react';
import { optionChangeToEnglish } from '../../utils/optionChangeToEnglish';

export const SelectBox = ({ label, options, setValue, trigger, property, defaultValue }: ISelectBoxProps) => {
  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(property, event.target.value);
    trigger(property);
  };

  let optionValue = optionChangeToEnglish(defaultValue);

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
      {!defaultValue && (
        <PostingTitleBox>
          <Label htmlFor='sector'>{label}</Label>
          <SelectWrapper onChange={handleOptionChange}>
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
