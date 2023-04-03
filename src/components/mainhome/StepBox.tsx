import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IStepBoxProps } from '../../@types/props';

const StepBox = ({ stepName, step, setStep }: IStepBoxProps) => {
  const type = useLocation().pathname.split('/')[1];

  return (
    <div
      className={stepName === step ? `box active` : `box`}
      style={{ backgroundColor: stepName === step ? '#FFC847' : '', color: stepName === step ? 'white' : '' }}
      onClick={() => setStep(stepName)}
    >
      <h3>{stepName}</h3>
      <p>10</p>
    </div>
  );
};

export default StepBox;
