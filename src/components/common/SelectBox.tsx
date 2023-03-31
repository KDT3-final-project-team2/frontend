import { useState } from 'react';
import styled from 'styled-components';

const SelectBox = ({ props, valueText }: { props: any; valueText?: any }) => {
  const [value, setValue] = useState(props[0].value);
  const [showOption, setShowOption] = useState(false);

  const handleSelectValue = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const option: HTMLElement = e.currentTarget;
    setValue(option.innerHTML);
    valueText(option.innerHTML);
  };

  return (
    <Select onClick={() => setShowOption(prev => !prev)}>
      <Label>{value}</Label>
      <SelectOption showOption={showOption}>
        {props &&
          props.map((data: any, idx: number) => (
            <Option key={idx} value={data.value} onClick={e => handleSelectValue(e)}>
              {data.value}
            </Option>
          ))}
      </SelectOption>
    </Select>
  );
};

const Select = styled.div`
  position: relative;
  width: 120px;
  height: 28px;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid var(--color-primary-100);
  cursor: pointer;
  color: var(--color-primary-100);
  display: flex;
  align-items: center;
  font-weight: bold;
  line-height: 27px;
  :first-child {
    margin-left: auto;
  }
  &::before {
    content: '';
    position: absolute;
    top: 12px;
    right: 15px;
    font-size: 20px;
    border-bottom: 4px solid transparent;
    border-top: 4px solid transparent;
    border-left: 5px solid var(--color-primary-100);
    border-right: 5px solid transparent;
    rotate: 90deg;
  }
`;

const Label = styled.label`
  font-size: 13px;
  margin-left: 5px;
`;

const SelectOption = styled.ul`
  position: absolute;
  top: 40px;
  left: 0px;
  width: 100%;
  overflow: hidden;
  max-height: ${({ showOption }: { showOption: boolean }) => (showOption ? 'none' : '0')};
  border-radius: 10px;
  background-color: #fff;
  color: var(--color-gray-900);
  box-shadow: ${({ showOption }: { showOption: boolean }) =>
    showOption ? '2px 2px 10px 2px rgba(67, 87, 172, 0.15)' : 'none'};
  line-height: 34px;
`;

const Option = styled.li`
  font-size: 13px;
  padding: 0 8px;
  :first-child {
    margin-top: 15px;
  }
  :last-child {
    margin-bottom: 15px;
  }
  &:hover {
    background-color: var(--color-primary-020);
    color: #fff;
  }
`;

export default SelectBox;
