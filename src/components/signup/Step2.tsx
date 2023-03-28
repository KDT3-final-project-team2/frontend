import { IStepProps } from '../../@types/props';
import styled from 'styled-components';
import SignUpPaginationButton from './SignUpPaginationButton';
import StepCheck from './SignUpStepCheck';
import SignUpTitle from './SignUpTitle';
import ApplicantSignUpForm from './ApplicantSignUpForm';
import CompanySignUpForm from './CompanySignUpForm';

const Step2 = ({ onClickNext, onClickBack, member, step, register, handleSubmit, formState, setValue }: IStepProps) => {
  return (
    <>
      <SignUpTitle member={member} />
      <MainContainer>
        <StepCheck step={step} />
        {member === '개인' ? (
          <ApplicantSignUpForm />
        ) : (
          <CompanySignUpForm
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            setValue={setValue}
          />
        )}
        <SignUpPaginationButton onClickNext={onClickNext} onClickBack={onClickBack} />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  width: 1000px;
  margin: auto;
`;

export default Step2;
