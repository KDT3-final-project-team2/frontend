import { IStep2Props } from '../../@types/props';
import styled from 'styled-components';
import SignUpPaginationButton from './SignUpPaginationButton';
import StepCheck from './SignUpStepCheck';
import SignUpTitle from './SignUpTitle';
import ApplicantSignUpForm from './ApplicantSignUpForm';
import CompanySignUpForm from './CompanySignUpForm';

const Step2 = ({
  onClickNext,
  onClickBack,
  member,
  step,
  register,
  handleSubmit,
  formState,
  setValue,
}: IStep2Props) => {
  return (
    <>
      <SignUpTitle member={member} />
      <MainContainer>
        <StepCheck step={step} />
        {member === '개인' ? (
          <ApplicantSignUpForm
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            setValue={setValue}
          />
        ) : (
          <CompanySignUpForm
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            setValue={setValue}
          />
        )}
        <SignUpPaginationButton onClickNext={() => handleSubmit()} onClickBack={onClickBack} step={step} />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  width: 1000px;
  margin: auto;
`;

export default Step2;
