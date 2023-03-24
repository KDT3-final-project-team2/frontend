import { IStepProps } from '../../@types/props';
import styled from 'styled-components';
import StepCheck from './SignUpStepCheck';
import SignUpTitle from './SignUpTitle';
import { Link } from 'react-router-dom';

const Step4 = ({ onClickNext, onClickBack, member }: IStepProps) => {
  return (
    <>
      <SignUpTitle member={member} />
      <MainContainer>
        <StepCheck checkStep={[false, false, false, true]} />
        <div style={{ fontSize: '30px' }}>가입성공!</div>
        <Link to='/login'>
          <button>로그인페이지로 이동</button>
        </Link>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  width: 1000px;
  margin: auto;
`;

export default Step4;
