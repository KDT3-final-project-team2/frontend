import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1 from '../components/signup/Step1';
import Step2 from './../components/signup/Step2';
import Step3 from './../components/signup/Step3';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { companySignUpSchema } from '../utils/validationSchema';
import AlertModal from '../components/common/AlertModal';
import { companySignUp } from '@/api/companyApi';

const CompanySignUp = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const { register, handleSubmit, formState, setValue } = useForm<ICompanySignUpData>({
    resolver: yupResolver(companySignUpSchema),
    mode: 'onChange',
  });

  const onValid = (data: ICompanySignUpData) => {
    const {
      companyName,
      companyEmail,
      companyContact,
      companyPassword,
      companyRegNum,
      companyRepresentative,
      companyUrl,
      address,
      zoneCode,
    } = data;
    const companyAddress = `[${zoneCode}] ${address}`;

    companySignUp({
      companyName,
      companyEmail,
      companyAddress,
      companyContact,
      companyPassword,
      companyRegNum,
      companyRepresentative,
      companyUrl,
    }).then(res => {
      if (res.stateCode === 200) {
        setStep(prev => prev + 1);
      } else {
        const message = res.message;
        AlertModal({ message });
      }
    });
  };

  const onClickBack = () => {
    if (step === 1) {
      return navigate('/');
    }
    setStep(prev => prev - 1);
  };

  const onClickNext = () => {
    if (step === 1 && checkedItems.length !== 4) {
      AlertModal({
        message: '약관에 동의해 주세요.',
      });
    } else {
      setStep(prev => prev + 1);
    }
  };

  switch (step) {
    case 1:
      return (
        <Step1
          onClickNext={onClickNext}
          onClickBack={onClickBack}
          member='병원'
          step={step}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
      );
    case 2:
      return (
        <Step2
          onClickNext={handleSubmit(onValid)}
          onClickBack={onClickBack}
          member='병원'
          step={step}
          register={register}
          handleSubmit={handleSubmit(onValid)}
          formState={formState}
          setValue={setValue}
        />
      );
    case 3:
      return <Step3 member='병원' step={step} />;
    default:
      return null;
  }
};

export default CompanySignUp;
