import { MainContainer } from '../company/CompanyJobPosting';
import { useJobPosts } from '@/hooks/useJobPosts';
import BannerBox from '@/components/applicantJobSearching/BannerBox';
import useSearchFilter from '@/hooks/useSearchFilter';
import SearchFilter from '@/components/applicantJobSearching/SearchFilter/SearchFilter';
import JobPostsDisplay from '@/components/applicantJobSearching/JobPostsDisplay';

const ApplicantJobSearching = () => {
  const { selectedOption, searchingData, handleCategoryChange, handleSearchOptionChange, handleSearchInputChange } =
    useSearchFilter();
  const [jobPostsList] = useJobPosts(selectedOption, searchingData);

  return (
    <MainContainer>
      <div className='headerBox'>
        <BannerBox />
        <SearchFilter
          selectedOption={selectedOption}
          handleCategoryChange={handleCategoryChange}
          handleSearchOptionChange={handleSearchOptionChange}
          handleSearchInputChange={handleSearchInputChange}
        />
      </div>
      <JobPostsDisplay jobPostsList={jobPostsList} />
    </MainContainer>
  );
};

export default ApplicantJobSearching;
