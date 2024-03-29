import { HeaderBox, MainContainer } from '../company/CompanyJobPosting';
import { useJobSearchInfinite } from '@/hooks/useJobSearchInfinite';
import BannerBox from '@/components/applicantJobSearching/BannerBox';
import useSearchFilter from '@/hooks/useSearchFilter';
import SearchFilter from '@/components/applicantJobSearching/SearchFilter/SearchFilter';
import JobPostsDisplay from '@/components/applicantJobSearching/JobPostsDisplay/JobPostsDisplay';

const ApplicantJobSearching = () => {
  const { selectedOption, searchingData, handleCategoryChange, handleSearchOptionChange, handleSearchInputChange } =
    useSearchFilter();
  const [jobPostsList] = useJobSearchInfinite(selectedOption, searchingData);

  return (
    <MainContainer>
      <HeaderBox>
        <BannerBox />
        <SearchFilter
          selectedOption={selectedOption}
          handleCategoryChange={handleCategoryChange}
          handleSearchOptionChange={handleSearchOptionChange}
          handleSearchInputChange={handleSearchInputChange}
        />
      </HeaderBox>
      <JobPostsDisplay jobPostsList={jobPostsList} />
    </MainContainer>
  );
};

export default ApplicantJobSearching;
