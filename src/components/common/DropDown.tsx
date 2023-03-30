import React, { useState } from 'react';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

const DropDown = ({
  width,
  title,
  selections,
  register,
  setValue,
}: {
  width: string;
  title: string;
  selections: string[];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <input
        id={title}
        type='text'
        placeholder={title}
        {...register(`${title}`)}
        onClick={event => {
          event.preventDefault();
          setOpen(!open);
        }}
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
