import { IJobPostSummaryProps } from '@/@types/props';
import { CreateDate, TermType } from '@/components/term.tsx/TermList';
import { dateToString } from '@/utils/dateToSTring';
import { getDday } from '@/utils/getDday';
import Avvvatars from 'avvvatars-react';
import styled from 'styled-components';

const JobPostSummary = ({ onClickSearchContentsOpen, searchData }: IJobPostSummaryProps) => {
  return (
    <JobPostsBox onClick={onClickSearchContentsOpen}>
      <FlexBox>
        <Avvvatars value={searchData?.companyName} style='character' size={32} />
        <CompanyName>{searchData?.companyName}</CompanyName>
        <AnnouncementTitle>{searchData?.jobpostTitle}</AnnouncementTitle>
      </FlexBox>
      <FlexBox>
        <DueDate>{dateToString(searchData?.jobpostDueDate)}</DueDate>
        <Dday>D{getDday(dateToString(searchData?.jobpostDueDate))}</Dday>
      </FlexBox>
    </JobPostsBox>
  );
};

export default JobPostSummary;

const JobPostsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  cursor: pointer;
`;

const AnnouncementTitle = styled.p`
  padding-top: 7px;
`;

const CompanyName = styled(TermType)``;

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

const DueDate = styled(CreateDate)``;
