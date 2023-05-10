import { TermListContainer } from '../../term.tsx/TermList';
import styled from 'styled-components';
import JobPostSummary from './JobPostSummary';
import JobPostDetail from './JobPostDetail';
import useOpenToggle from '@/hooks/useOpenToggle';
import useApply from '@/hooks/useApply';
import useJobPostFile from '@/hooks/useJobPostFile';

const JobSearchingList = ({ searchData }: { searchData: JobPostsSearchData }) => {
  const [open, onClickSearchContentsOpen] = useOpenToggle();
  const onClickApply = useApply(searchData);
  const onClickPdfOpen = useJobPostFile(searchData);

  return (
    <PostingListContainer open={open}>
      <JobPostSummary onClickSearchContentsOpen={onClickSearchContentsOpen} searchData={searchData} />
      {open && <JobPostDetail searchData={searchData} onClickApply={onClickApply} onClickPdfOpen={onClickPdfOpen} />}
    </PostingListContainer>
  );
};

export default JobSearchingList;

const PostingListContainer = styled(TermListContainer)`
  height: ${({ open }: { open?: boolean }) => {
    return open ? '440px' : '70px';
  }};
`;
