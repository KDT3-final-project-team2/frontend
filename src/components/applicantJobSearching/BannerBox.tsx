import { useAppSelector } from '@/hooks/useDispatchHooks';
import styled from 'styled-components';

const BannerBox = () => {
  const applicantUser = useAppSelector(state => state.applicantUser);

  return (
    <BannerWrapper>
      <BlueBox>
        <Content>
          {applicantUser?.applicantName}님의 <br /> 맞춤 병원탐색
        </Content>
        <img src='/icons/people.png' />
      </BlueBox>
      <YellowBox>
        <Content>
          나를 가장 잘 표현한
          <br />
          이력서 만들기 전략
        </Content>
        <img src='/icons/resumeImg.png' />
      </YellowBox>
    </BannerWrapper>
  );
};

export default BannerBox;

const BannerWrapper = styled.div`
  display: flex;
  gap: 19px;
`;
const BlueBox = styled.div`
  background: var(--color-primary-100);
  border-radius: 19px;
  width: 60%;
  height: 171px;
  padding-top: 28px;
  padding-left: 38px;
  display: flex;
  justify-content: space-between;
  img {
    width: 60%;
  }
`;

const Content = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  line-height: 22px;
`;

const YellowBox = styled.div`
  background: #ffc847;
  border-radius: 19px;
  width: 40%;
  height: 171px;
  padding-top: 28px;
  padding-left: 38px;
  display: flex;
  justify-content: space-between;
  img {
    margin-right: 20px;
    width: 35%;
    margin-top: 50px;
  }
`;
