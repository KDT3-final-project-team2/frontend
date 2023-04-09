import { Border, CreateDate, TermListContainer, TermType } from '../term.tsx/TermList';
import styled from 'styled-components';
import Avvvatars from 'avvvatars-react';
import { useState } from 'react';
import { PostingContents } from '../companyjobposting/PreviewModal';
import { RegistrationButton } from '@/pages/company/CompanyJobPosting';

import { getDday } from '@/utils/getDday';
import { dateToString } from '@/utils/dateToSTring';

const JobSearchingList = ({ index, searchData }: { index: number; searchData: JobPostsSearchData }) => {
  const [open, setOpen] = useState(index === 0 ? true : false);
  console.log(searchData);

  const onClickSearchListOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {searchData?.jobpostStatus === '모집중' && (
        <PostingListContainer open={open}>
          <div className='termBox' onClick={onClickSearchListOpen}>
            <FlexBox>
              <Avvvatars value={searchData?.companyName} style='character' size={32} />
              <TermType>{searchData?.companyName}</TermType>
              <AnnouncementTitle>{searchData?.jobpostTitle}</AnnouncementTitle>
            </FlexBox>
            <FlexBox>
              <CreateDate>{dateToString(searchData?.jobpostDueDate)}</CreateDate>
              <Dday>D{getDday(dateToString(searchData?.jobpostDueDate))}</Dday>
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
                      <div className='sector'>#{searchData?.jobpostSector}</div>
                      <div className='tag'>#{searchData?.jobpostEducation}</div>
                      <div className='tag'>#{searchData?.jobpostWorkExperience}</div>
                    </Details>
                    <RecruitDetailWrapper>
                      <PostingContents title='직종' contents={searchData?.jobpostSector} />
                      <PostingContents title='경력' contents={searchData?.jobpostWorkExperience} />
                      <PostingContents title='학력' contents={searchData?.jobpostEducation} />
                      <PostingContents title='모집인원' contents={searchData?.jobpostRecruitNum} />
                      <PostingContents title='마감일' contents={dateToString(searchData?.jobpostDueDate)} />
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
      )}
    </>
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
    width: max-content;
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
