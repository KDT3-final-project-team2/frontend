import { IStepProps } from '../../@types/props';
import styled from 'styled-components';
import SignUpPaginationButton from './SignUpPaginationButton';
import StepCheck from './StepCheck';
import SignUpTitle from './SignUpTitle';

const Step2 = ({ onClickNext, onClickBack, member }: IStepProps) => {
  return (
    <>
      <SignUpTitle member={member} />
      <MainContainer>
        <StepCheck />
        <div style={{ fontSize: '30px' }}>회원가입</div>
        <SignUpPaginationButton onClickNext={onClickNext} onClickBack={onClickBack} />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  width: 500px;
  margin: auto;
  text-align: center;
`;

export default Step2;
