import React from 'react';
import { ICheckBoxProps } from '../../@types/props';

const CheckBox = ({ text, checkedItems, setCheckedItems }: ICheckBoxProps) => {
  const handleOneCheck = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      setCheckedItems([...checkedItems, target.id]);
    } else {
      setCheckedItems(checkedItems.filter(value => value !== target.id));
    }
  };

  return (
    <li>
      <input type='checkbox' checked={checkedItems.includes(text) ? true : false} id={text} onChange={handleOneCheck} />
      <label htmlFor={text}></label>
      {text}
    </li>
  );
};

export default CheckBox;
