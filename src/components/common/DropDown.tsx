import { applicationInputToKorean } from '@/constants/signupInput';
import React, { useState } from 'react';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

const DropDown = ({
  width,
  title,
  selections,
  register,
  setValue,
  value,
}: {
  width: string;
  title: string;
  selections: string[];
  register: UseFormRegister<FieldValues> | any;
  setValue: UseFormSetValue<FieldValues> | any;
  value?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <input
        id={title}
        type='text'
        placeholder={applicationInputToKorean[`${title}`]}
        {...register(`${title}`)}
        onClick={event => {
          event.preventDefault();
          setOpen(!open);
        }}
        defaultValue={value}
      />
      {open ? (
        <img src='/icons/toggleArrowUp.png' alt='닫기' onClick={() => setOpen(false)} />
      ) : (
        <img src='/icons/toggleArrowDown.png' alt='열기' onClick={() => setOpen(true)} />
      )}
      {open ? (
        <ul>
          {selections.map(selection => (
            <li
              key={selection}
              onClick={event => {
                event.preventDefault();
                setValue(title, selection, { shouldValidate: true });
                setOpen(false);
              }}
            >
              {selection}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default DropDown;
