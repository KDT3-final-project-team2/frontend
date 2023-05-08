import { useEffect } from 'react';
import { MainContainer } from '../company/CompanyJobPosting';
import styled from 'styled-components';
import JobSearchingList from './../../components/applicantJobSearching/JobSearchingList';
import { useJobPosts } from '@/hooks/useJobPostsHooks';
import BannerBox from '@/components/applicantJobSearching/BannerBox';
import useSearchFilter from '@/hooks/useSearchFilter';
import SearchFilter from '@/components/applicantJobSearching/SearchFilter';

const ApplicantJobSearching = () => {
  const { selectedOption, searchingData, handleCategoryChange, handleSearchOptionChange, handleSearchInputChange } =
    useSearchFilter();

  const {
    data: jobPostsList,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useJobPosts(selectedOption, searchingData);

  useEffect(() => {
    const handleScroll = async () => {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      const isBottom = scrollTop + clientHeight >= scrollHeight - 10;
      if (isBottom && !isFetchingNextPage && hasNextPage) {
        await fetchNextPage();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

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

        <ListHeader>공고 리스트</ListHeader>
      </div>
      <div>
        {jobPostsList?.pages[0]?.content?.length === 0 || !jobPostsList?.pages[0]?.content ? (
          <Nothing>리스트가 없습니다.</Nothing>
        ) : (
          jobPostsList?.pages.map(page =>
            page?.content?.map((data: any, index: number) => (
              <JobSearchingList key={data.jobpostId} index={index} searchData={data} />
            )),
          )
        )}
      </div>
    </MainContainer>
  );
};

export default ApplicantJobSearching;

const Nothing = styled.p`
  margin: auto;
  width: fit-content;
  margin-top: 50px;
  font-size: 18px;
  font-weight: bold;
`;

const SearchTab = styled.h2`
  margin-top: 56px;
  font-weight: 700;
  font-size: 20px;
  color: var(--color-primary-100);
  border-bottom: 5px solid;
  width: 80px;
  padding: 0 20px 10px;
`;

const SearchBox = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
`;

const SelectBox = styled.select`
  border: 1px solid var(--color-primary-100);
  border-radius: 20px;
  padding: 6px 10px 4px;
  color: var(--color-primary-100);
  width: 150px;
  height: 28px;
  margin-right: 20px;
`;

const SearchInputWrapper = styled.div`
  position: relative;

  img {
    height: 18px;
    position: absolute;
    left: 15px;
    top: 9px;
  }
`;

const SearchInput = styled.input`
  border: 3px solid rgba(67, 87, 172, 0.17);
  border-radius: 28px;
  color: var(--color-primary-100);
  height: 28px;
  width: 459px;
  padding-top: 2.5px;
  padding-left: 40px;
  font-size: 14px;
  ::placeholder {
    font-size: 14px;
  }
`;

const ListHeader = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-top: 36px;
  margin-bottom: 20px;
`;
