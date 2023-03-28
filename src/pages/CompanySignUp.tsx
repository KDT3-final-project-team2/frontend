import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1 from '../components/signup/Step1';
import Step2 from './../components/signup/Step2';
import Step3 from './../components/signup/Step3';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { companySignUpSchema } from '../utils/validationSchema';

const CompanySignUp = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { register, handleSubmit, formState, setValue } = useForm<ICompanySignUpData>({
    resolver: yupResolver(companySignUpSchema),
    mode: 'onChange',
  });

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
      return <Step1 onClickNext={onClickNext} onClickBack={onClickBack} member='병원' step={step} />;
    case 2:
      return (
        <Step2
          onClickNext={onClickNext}
          onClickBack={onClickBack}
          member='병원'
          step={step}
          register={register}
          handleSubmit={handleSubmit}
          formState={formState}
          setValue={setValue}
        />
      );
    // case 3:
    //   return <Step3 onClickNext={onClickNext} onClickBack={onClickBack} member='병원' />;
    case 3:
      return <Step3 onClickNext={onClickNext} onClickBack={onClickBack} member='병원' step={step} />;
    default:
      return null;
  }
};

export default CompanySignUp;
