import styled from 'styled-components';
import { IStepProps } from '../../@types/props';

const SignUpTitle = ({ member }: { member: string }) => {
  return <Title>{member} 회원가입</Title>;
};

const Title = styled.h1`
  font-size: 34px;
  margin-left: 132px;
  margin-top: 104px;
  margin-bottom: 27px;
`;

export default SignUpTitle;
