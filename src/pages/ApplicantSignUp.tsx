import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Step1 from '../components/signup/Step1';
import Step2 from './../components/signup/Step2';
import Step3 from './../components/signup/Step3';
import { useForm } from 'react-hook-form';
import { applicantSignUpSchema } from '../utils/validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import AlertModal from '../components/common/AlertModal';
import { applicantSignUp } from '@/api/applicantApi';
import { applicantSignUpData } from '@/constants/signupInput';

const ApplicantSignUp = () => {
  const [step, setStep] = useState(1);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const { register, handleSubmit, formState, setValue } = useForm<IApplicantSignUpData>({
    resolver: yupResolver(applicantSignUpSchema),
    mode: 'onChange',
  });
  const onValid = (data: IApplicantSignUpData) => {
    const { applicantEmail, applicantPassword, applicantName, applicantBirthDate, applicantContact } = data;

    const [applicantGender, applicantEducation, applicantWorkExperience, applicantSector] = [
      applicantSignUpData['applicantGender'][data.applicantGender],
      applicantSignUpData['applicantEducation'][data.applicantEducation],
      applicantSignUpData['applicantWorkExperience'][data.applicantWorkExperience],
      applicantSignUpData['applicantSector'][data.applicantSector],
    ];

    applicantSignUp({
      applicantEmail,
      applicantPassword,
      applicantName,
      applicantBirthDate,
      applicantGender,
      applicantContact,
      applicantEducation,
      applicantWorkExperience,
      applicantSector,
    }).then(res => {
      if (res.stateCode === 200) {
        console.log(res);
        setStep(prev => prev + 1);
      } else {
        const message = res.message;
        AlertModal({ message });
      }
    });
  };

  const navigate = useNavigate();

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
          member='개인'
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
          member='개인'
          step={step}
          register={register}
          handleSubmit={handleSubmit(onValid)}
          formState={formState}
          setValue={setValue}
        />
      );
    case 3:
      return <Step3 member='개인' step={step} />;
    default:
      return null;
  }
};

export default ApplicantSignUp;
