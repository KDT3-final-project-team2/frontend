import { Border, CreateDate, TermListContainer, TermType } from '../term.tsx/TermList';
import styled from 'styled-components';
import Avvvatars from 'avvvatars-react';
import { useState } from 'react';
import { PostingContents } from '../companyjobposting/PreviewModal';
import { RegistrationButton } from '@/pages/company/CompanyJobPosting';

const JobSearchingList = ({ index }: { index: number }) => {
  const [open, setOpen] = useState(index === 0 ? true : false);

  const onClickSearchListOpen = () => {
    setOpen(!open);
  };

  return (
    <PostingListContainer open={open}>
      <div className='termBox' onClick={onClickSearchListOpen}>
        <FlexBox>
          <Avvvatars value='메디메치' style='character' size={32} />
          <TermType>메디메치</TermType>
          <AnnouncementTitle>2023년도 정규직 간호사 모집공고</AnnouncementTitle>
        </FlexBox>
        <FlexBox>
          <CreateDate>23.04.10</CreateDate>
          <Dday>마감 D-7 </Dday>
        </FlexBox>
      </div>
      {open && (
        <>
          <Border></Border>
          <DetailWrapper>
            <div className='flexBox'>
              <JobPostingBox>채용공고</JobPostingBox>
              <div>
                <div>
                  <AnnoncementInfo>공고정보</AnnoncementInfo>
                </div>
                <Details>
                  <div className='sector'>간호사</div>
                  <div className='tag'># 대졸</div>
                  <div className='tag'># 1년 경력</div>
                </Details>
                <RecruitDetailWrapper>
                  <PostingContents title='직종' contents='간호직 &lt; 간호사' />
                  <PostingContents title='경력' contents='신입 / 인턴 경험' />
                  <PostingContents title='학력' contents='학력무관' />
                  <PostingContents title='모집인원' contents='4명' />
                  <PostingContents title='마감일' contents='2023.04.12' />
                </RecruitDetailWrapper>
              </div>
            </div>
            <BtnWrapper>
              <HomePageBtn>병원홈페이지</HomePageBtn>
              <RegistrationButton>지원하기</RegistrationButton>
            </BtnWrapper>
          </DetailWrapper>
        </>
      )}
    </PostingListContainer>
  );
};

export default JobSearchingList;

const PostingListContainer = styled(TermListContainer)`
  height: ${({ open }: { open?: boolean }) => {
    return open ? '440px' : '70px';
  }};
`;

const AnnouncementTitle = styled.p`
  padding-top: 7px;
`;

const Dday = styled.div`
  border-radius: 14px;
  padding: 3px 12px 0;
  font-size: 13px;
  line-height: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  background: #4b5563;
  color: white;
  margin-right: 20px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DetailWrapper = styled.div`
  padding: 35px 0;
  display: flex;
  gap: 54px;
  justify-content: space-between;
  .flexBox {
    display: flex;
    gap: 40px;
  }
`;

const JobPostingBox = styled.div`
  width: 200px;
  height: 270px;
  background-color: #ececec;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 32px;
  .sector,
  .tag {
    border-radius: 14px;
    padding: 3px 12px 0;
    font-size: 13px;
    line-height: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .sector {
    background-color: var(--color-blue);
    color: white;
  }
  .tag {
    background-color: #ececec;
    color: #7b7b7b;
  }
`;

const AnnoncementInfo = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 25px;
  margin-top: 10px;
`;

const RecruitDetailWrapper = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const HomePageBtn = styled(RegistrationButton)`
  background-color: #ffc847;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 19px;
  margin-top: auto;
  @media (max-width: 1600px) {
    flex-direction: column;
    gap: 4px;
  }
  flex-direction: row;
  button {
    height: 50px;
    margin-bottom: 0px;
  }
`;
