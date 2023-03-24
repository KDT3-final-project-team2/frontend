import { IStepProps } from '../../@types/props';
import styled from 'styled-components';
import SignUpPaginationButton from './SignUpPaginationButton';
import StepCheck from './SignUpStepCheck';
import SignUpTitle from './SignUpTitle';

const Step1 = ({ onClickNext, onClickBack, member }: IStepProps) => {
  return (
    <>
      <SignUpTitle member={member} />
      <MainContainer>
        <StepCheck checkStep={[true, false, false, false]} />
        <div style={{ fontSize: '30px' }}>이용약관동의</div>
        <SignUpPaginationButton onClickNext={onClickNext} onClickBack={onClickBack} />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  width: 1000px;
  margin: auto;
`;

export default Step1;
