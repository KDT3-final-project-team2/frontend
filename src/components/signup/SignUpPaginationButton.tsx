import styled from 'styled-components';
import { IStepsButtonProps } from '../../@types/props';

const SignUpPaginationButton = ({ onClickBack, onClickNext }: IStepsButtonProps) => {
  return (
    <ButtonContainer>
      <BackButton onClick={onClickBack}>이전</BackButton>
      <NextButton onClick={onClickNext}>다음</NextButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-left: auto;
`;

const BackButton = styled.button`
  background-color: var(--color-primary-020);
  width: 72px;
  height: 40px;
  border-radius: 20px;
  padding: 8px 20px;
  font-weight: 700;
  font-size: 16px;
  color: var(--color-primary-100);
`;

const NextButton = styled(BackButton)`
  background-color: var(--color-primary-100);
  color: #fff;
`;

export default SignUpPaginationButton;
