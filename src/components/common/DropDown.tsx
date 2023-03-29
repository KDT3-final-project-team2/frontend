import React, { useState } from 'react';
import arrowUp from '../../assets/icons/toggleArrowUp.png';
import arrowDown from '../../assets/icons/toggleArrowDown.png';
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
        <img src={arrowUp} alt='' onClick={() => setOpen(false)} />
      ) : (
        <img src={arrowDown} alt='' onClick={() => setOpen(true)} />
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
