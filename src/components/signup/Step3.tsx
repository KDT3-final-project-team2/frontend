import { IStep3Props } from '../../@types/props';
import styled from 'styled-components';
import StepCheck from './SignUpStepCheck';
import SignUpTitle from './SignUpTitle';
import { Link } from 'react-router-dom';
import welcome from '../../assets/images/welcome.png';

const Step3 = ({ member, step }: IStep3Props) => {
  return (
    <>
      <SignUpTitle member={member} />
      <MainContainer>
        <StepCheck step={step} />
        <div>
          <img src={welcome} alt='welcome' width={400} />
        </div>
        {/* <div style={{ fontSize: '30px' }}>가입성공!</div> */}
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
  div {
    display: flex;
    justify-content: center;
    img {
      margin: 10px 0 50px;
    }
  }
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

export default Step3;
