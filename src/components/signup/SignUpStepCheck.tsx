import styled from 'styled-components';
import { IStepCheckColorProps, IStepCheckProps, IStepCheckTitle } from './../../@types/props.d';
import { signupSteps } from '../../constants/signupSteps';

const StepCheck = ({ step }: IStepCheckProps) => {
  return (
    <StepCheckBox>
      {signupSteps.map((title, index) => (
        <SingleStep key={index} title={title} step={step} order={index + 1} />
      ))}
    </StepCheckBox>
  );
};

const SingleStep = ({ title, step, order }: IStepCheckTitle) => {
  return (
    <StepContainer>
      <StepCheckContent step={step} order={order}>
        {title}
      </StepCheckContent>
      <StepCheckIcon>
        {order !== 1 ? <Line step={step} order={order} /> : null}
        <Circle step={step} order={order}>
          {step === order ? (
            <CheckSvg width='18' height='14' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6.23564 13.0807L0.708008 7.55312L2.64268 5.61845L6.23564 9.21141L15.3562 0.0908203L17.2909 2.02549L6.23564 13.0807Z'
                fill='white'
              />
            </CheckSvg>
          ) : null}
        </Circle>
      </StepCheckIcon>
    </StepContainer>
  );
};

const StepCheckBox = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
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
  width: 95px;
  text-align: center;
  margin-bottom: 13px;
  font-size: 17px;
  font-weight: bold;
  margin-left: ${({ order }: { order: number }) => (order !== 1 ? '127px' : '23px')};
  color: ${(props: IStepCheckColorProps) =>
    props.step === props.order ? '#4357AC' : props.order <= props.step ? '#8294CD' : '#969696'};
`;

const Circle = styled.div`
  position: relative;
  width: 27.64px;
  height: 27.64px;
  background-color: ${(props: IStepCheckColorProps) => (props.order <= props.step ? '#4357AC' : '#d9d9d9')};
  /* background: #d9d9d9; */
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
  border-width: 2.76381px;
  border-style: solid;
  border-color: ${(props: IStepCheckColorProps) => (props.order <= props.step ? '#4357AC' : '#969696')};
`;

export default StepCheck;
