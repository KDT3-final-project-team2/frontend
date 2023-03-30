import React from 'react';
import { IStepBoxProps } from '../../@types/props';

const StepBox = ({ stepName, step, setStep }: IStepBoxProps) => {
  return (
    <div
      className={stepName === step ? `box active` : `box`}
      key={stepName}
      style={{ backgroundColor: stepName === step ? '#FFC847' : '', color: stepName === step ? 'white' : '' }}
      onClick={() => setStep(stepName)}
    >
      <h3>{stepName}</h3>
      <p>10</p>
    </div>
  );
};

export default StepBox;
