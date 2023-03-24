import { IStepProps } from '../../@types/props';
import styled from 'styled-components';
import SignUpPaginationButton from './SignUpPaginationButton';
import StepCheck from './SignUpStepCheck';
import SignUpTitle from './SignUpTitle';

const Step3 = ({ onClickNext, onClickBack, member }: IStepProps) => {
  const onClickSignUp = (data: IApplicantSignUpData) => {
    console.log(data);
    // const name = data.lastName + data.firstName;
    // axios.post('URL', {
    //   applicantEmail: data.email,
    //   applicantPassword: data.password,
    //   applicantName: name,
    //   applicantBirthDate: data.birth,
    //   applicantContact: data.phoneNumber,
    // });
  };

  return (
    <>
      <SignUpTitle member={member} />
      <MainContainer>
        <StepCheck checkStep={[false, false, true, false]} />
        <div style={{ fontSize: '30px' }}>아이디/비밀번호</div>
        <SignUpPaginationButton onClickNext={onClickNext} onClickBack={onClickBack} />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  width: 1000px;
  margin: auto;
`;

export default Step3;
