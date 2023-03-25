import styled from 'styled-components';
import { IStepCheckColorProps, IStepCheckProps, IStepCheckTitle } from './../../@types/props.d';

const StepCheck = ({ checkStep }: IStepCheckProps) => {
  return (
    <StepCheckBox>
      <SingleStep title='이용약관동의' line={true} checkStep={checkStep[0]} />
      <SingleStep title='회원가입 및 인증' line={true} checkStep={checkStep[1]} />
      <SingleStep title='아이디 비밀번호' line={true} checkStep={checkStep[2]} />
      <SingleStep title='&nbsp;&nbsp;&nbsp;&nbsp;가입성공!' line={false} checkStep={checkStep[3]} />
    </StepCheckBox>
  );
};

const SingleStep = ({ title, line, checkStep }: IStepCheckTitle) => {
  return (
    <StepContainer>
      <StepCheckContent checkStep={checkStep}>{title}</StepCheckContent>
      <StepCheckIcon style={{ display: 'flex' }}>
        <Circle>
          {checkStep ? (
            <CheckSvg width='18' height='14' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6.23564 13.0807L0.708008 7.55312L2.64268 5.61845L6.23564 9.21141L15.3562 0.0908203L17.2909 2.02549L6.23564 13.0807Z'
                fill='#969696'
              />
            </CheckSvg>
          ) : null}
        </Circle>
        {line ? <Line /> : null}
      </StepCheckIcon>
    </StepContainer>
  );
};

const StepCheckBox = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  justify-content: center;
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StepCheckIcon = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 40px;
  margin-left: 24px;
`;

const StepCheckContent = styled.p`
  margin-bottom: 17px;
  color: ${(props: IStepCheckColorProps) => (props.checkStep ? '#000000' : '#969696')};
`;

const Circle = styled.div`
  position: relative;
  width: 27.64px;
  height: 27.64px;
  background: #d9d9d9;
  border-radius: 100%;
  margin: 0 auto;
`;

const CheckSvg = styled.svg`
  position: absolute;
  left: 5px;
  top: 6.5px;
`;

const Line = styled.div`
  width: 66.33px;
  height: 0px;
  border: 2.76381px solid #969696;
`;

export default StepCheck;
