import { IJobPostDetailProps } from '@/@types/props';
import { PostingContents } from '@/components/companyjobposting/PreviewModal';
import { Border } from '@/components/term.tsx/TermList';
import { RegistrationButton } from '@/pages/company/CompanyJobPosting';
import { dateToString } from '@/utils/dateToSTring';
import styled from 'styled-components';

const JobPostDetail = ({ searchData, onClickApply, onClickPdfOpen }: IJobPostDetailProps) => {
  return (
    <>
      <Border></Border>
      <DetailWrapper>
        <FlexBox>
          <ImageBox>
            <img src='/images/noImage.png' />
          </ImageBox>
          <div>
            <div>
              <AnnoncementInfo>공고정보</AnnoncementInfo>
            </div>
            <Details>
              <Sector>#{searchData?.jobpostSector}</Sector>
              <Tag>#{searchData?.jobpostEducation}</Tag>
              <Tag>#{searchData?.jobpostWorkExperience}</Tag>
            </Details>
            <RecruitDetailWrapper>
              <PostingContents title='직종' contents={searchData?.jobpostSector} />
              <PostingContents title='경력' contents={searchData?.jobpostWorkExperience} />
              <PostingContents title='학력' contents={searchData?.jobpostEducation} />
              <PostingContents title='모집인원' contents={searchData?.jobpostRecruitNum} />
              <PostingContents title='마감일' contents={dateToString(searchData?.jobpostDueDate)} />
            </RecruitDetailWrapper>
          </div>
        </FlexBox>
        <BtnWrapper>
          <PdfBtn onClick={onClickPdfOpen}>공고 PDF</PdfBtn>
          <RegistrationButton onClick={onClickApply}>지원하기</RegistrationButton>
        </BtnWrapper>
      </DetailWrapper>
    </>
  );
};

export default JobPostDetail;

const DetailWrapper = styled.div`
  padding: 35px 0;
  display: flex;
  gap: 54px;
  justify-content: space-between;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 40px;
`;

const ImageBox = styled.div`
  width: 195px;
  height: 270px;
  background-color: #ececec;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 195px;
    height: 270px;
    border: none;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 32px;
`;

const Sector = styled.div`
  width: max-content;
  border-radius: 14px;
  padding: 3px 12px 0;
  font-size: 13px;
  line-height: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  background-color: var(--color-blue);
  color: white;
`;

const Tag = styled(Sector)`
  background-color: #ececec;
  color: #7b7b7b;
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

const PdfBtn = styled(RegistrationButton)`
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
