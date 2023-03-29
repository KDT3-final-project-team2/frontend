import styled from 'styled-components';
import link from '../../assets/icons/link.png';
import morevertical from '../../assets/icons/more_vertical.png';

const JobPostingList = () => {
  return (
    <NoticeContainer>
      <NoticeTitle>2023년도 정규직 간호사 모집공고</NoticeTitle>
      <IconContainer>
        <Preview>미리보기</Preview>
        <Link src={link} />
        <Vertical src={morevertical} />
      </IconContainer>
    </NoticeContainer>
  );
};

export default JobPostingList;

const NoticeContainer = styled.div`
  width: 1330px;
  height: 70px;
  box-shadow: 2px 2px 10px 2px #4357ac26;
  background: #ffffff;
  border-radius: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  margin-bottom: 20px;
`;

const NoticeTitle = styled.p`
  font-weight: 700;
  font-size: 17px;
  color: #374151;
`;

const Preview = styled.button`
  width: 80px;
  height: 28px;
  background: #7b7b7b;
  border-radius: 14px;
  padding: 2px 12px 2px 12px;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Link = styled.img`
  cursor: pointer;
`;

const Vertical = styled(Link)``;
