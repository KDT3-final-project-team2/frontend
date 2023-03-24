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
          <LoginPageBtn>{member} 회원 로그인 </LoginPageBtn>
        </Link>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  width: 1000px;
  margin: auto;
`;

const LoginPageBtn = styled.button`
  width: 180px;
  height: 40px;
  padding: 8px 20px;
  background: var(--color-primary-020);
  border-radius: 20px;
  font-size: 18px;
  color: var(--color-primary-100);
  font-weight: 700;
  margin: auto;
`;

export default Step4;
