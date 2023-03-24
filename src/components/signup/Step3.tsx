import { IStepProps } from '../../@types/props';
import styled from 'styled-components';
import SignUpPaginationButton from './SignUpPaginationButton';
import StepCheck from './StepCheck';
import SignUpTitle from './SignUpTitle';

const Step3 = ({ onClickNext, onClickBack, member }: IStepProps) => {
  return (
    <>
      <SignUpTitle member={member} />
      <MainContainer>
        <StepCheck />
        <div style={{ fontSize: '30px' }}>아이디/비밀번호</div>
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

export default Step3;
