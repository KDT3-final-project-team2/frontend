import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1 from '../components/signup/Step1';
import Step2 from './../components/signup/Step2';
import Step3 from './../components/signup/Step3';

const ApplicantSignUp = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const onClickBack = () => {
    if (step === 1) {
      return navigate('/');
    }
    setStep(prev => prev - 1);
  };

  const onClickNext = () => {
    setStep(prev => prev + 1);
  };

  switch (step) {
    case 1:
      return <Step1 onClickNext={onClickNext} onClickBack={onClickBack} member='개인' step={step} />;
    case 2:
      return <Step2 onClickNext={onClickNext} onClickBack={onClickBack} member='개인' step={step} />;
    // case 3:
    // return <Step3 onClickNext={onClickNext} onClickBack={onClickBack} member='개인' />;
    case 3:
      return <Step3 onClickNext={onClickNext} onClickBack={onClickBack} member='개인' step={step} />;
    default:
      return null;
  }
};

export default ApplicantSignUp;
