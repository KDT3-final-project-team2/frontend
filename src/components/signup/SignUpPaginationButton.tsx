import styled from 'styled-components';
import { IStepsButtonProps } from '../../@types/props';

const SignUpPaginationButton = ({ onClickBack, onClickNext, step }: IStepsButtonProps) => {
  return (
    <ButtonContainer>
      <BackButton onClick={onClickBack}>이전</BackButton>
      <NextButton onClick={onClickNext}>{step === 2 ? '가입하기' : '다음'}</NextButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin: 60px 0 80px;
`;

const BackButton = styled.button`
  background-color: var(--color-primary-020);
  width: 116px;
  height: 40px;
  padding: 8px 20px;
  border-radius: 20px;
  color: var(--color-primary-100);
  font-size: 15px;
  font-weight: bold;
`;

const NextButton = styled(BackButton)`
  background-color: var(--color-primary-100);
  color: #fff;
`;

export default SignUpPaginationButton;
