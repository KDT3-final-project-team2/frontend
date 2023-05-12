import styled from 'styled-components';
import JobSearchingList from './JobSearchingList';

const JobPostsDisplay = ({ jobPostsList }: any) => {
  return (
    <>
      <ListHeader>공고 리스트</ListHeader>
      {jobPostsList?.pages[0]?.content?.length === 0 || !jobPostsList?.pages[0]?.content ? (
        <Nothing>리스트가 없습니다.</Nothing>
      ) : (
        jobPostsList?.pages.map((page: Page) =>
          page?.content?.map((data: Content) => <JobSearchingList key={data.jobpostId} searchData={data} />),
        )
      )}
    </>
  );
};

export default JobPostsDisplay;

const Nothing = styled.p`
  margin: auto;
  width: fit-content;
  margin-top: 50px;
  font-size: 18px;
  font-weight: bold;
`;

const ListHeader = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-top: 36px;
  margin-bottom: 20px;
  padding-left: 50px;
`;
