import { ChangeEvent, useEffect, useState } from 'react';
import { MainContainer } from '../company/CompanyJobPosting';
import styled from 'styled-components';
import JobSearchingList from './../../components/applicantJobSearching/JobSearchingList';
import { searchingOptions } from '@/constants/jobPostingOptions';
import { useAppSelector } from '@/hooks/useDispatchHooks';
import { useJobPosts } from '@/hooks/useJobPostsHooks';
import { debounce } from 'lodash';

const ApplicantJobSearching = () => {
  const [selectedOption, setSelectedOption] = useState('전체');
  const [searchingData, setSearchingData] = useState('');
  const applicantUser = useAppSelector(state => state.applicantUser);

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchingData('');
    setSelectedOption(event.target.value);
  };

  const onChangeSearchData = debounce((event: ChangeEvent<HTMLInputElement>) => {
    setSearchingData(event.target.value);
  }, 500);

  const onChangeSearchOption = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchingData(event.target.value);
  };

  const {
    data: jobPostsList,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useJobPosts(selectedOption, searchingData);

  console.log('jobPostsList', jobPostsList);
  console.log('selectedOption', selectedOption);
  console.log('searchingData', searchingData);

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
        <BannerBox>
          <BlueBox>
            <Content>
              {applicantUser?.applicantName}님의 <br /> 맞춤 병원탐색
            </Content>
            <img src='/icons/people.png' />
          </BlueBox>
          <YellowBox>
            <Content>
              나를 가장 잘 표현한
              <br />
              이력서 만들기 전략
            </Content>
            <img src='/icons/resumeImg.png' />
          </YellowBox>
        </BannerBox>
        <SearchTab>공고 탐색</SearchTab>
        <SearchBox>
          <SelectBox value={selectedOption} onChange={handleOptionChange}>
            <option value='전체'>전체</option>
            <option value='직무'>직무</option>
            <option value='학력'>학력</option>
            <option value='경력'>경력</option>
            <option value='공고제목'>공고제목</option>
            <option value='회사'>회사</option>
          </SelectBox>
          {(selectedOption === '직무' || selectedOption === '학력' || selectedOption === '경력') && (
            <SelectBox onChange={onChangeSearchOption}>
              <option value=''>선택하세요</option>
              {searchingOptions?.[selectedOption].map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </SelectBox>
          )}
          {(selectedOption === '공고제목' || selectedOption === '회사') && (
            <SearchInputWrapper>
              <img src='/icons/search.png' />
              <SearchInput placeholder='검색어를 입력해주세요.' onChange={onChangeSearchData}></SearchInput>
            </SearchInputWrapper>
          )}
        </SearchBox>
        <ListHeader>공고 리스트</ListHeader>
      </div>
      {/* {searchData?.content?.map((data: JobPostsSearchData, index: number) => (
        <JobSearchingList key={data.jobpostId} index={index} searchData={data} />
      ))}
      {(searchData?.content?.length === 0 || !searchData || searchData?.errorMessage) && (
        <Nothing>리스트가 없습니다.</Nothing>
      )} */}
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

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerBox = styled.div`
  display: flex;
  gap: 19px;
`;
const BlueBox = styled.div`
  background: var(--color-primary-100);
  border-radius: 19px;
  width: 60%;
  height: 171px;
  padding-top: 28px;
  padding-left: 38px;
  display: flex;
  justify-content: space-between;
  img {
    width: 60%;
  }
`;

const Content = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  line-height: 22px;
`;

const YellowBox = styled.div`
  background: #ffc847;
  border-radius: 19px;
  width: 40%;
  height: 171px;
  padding-top: 28px;
  padding-left: 38px;
  display: flex;
  justify-content: space-between;
  img {
    margin-right: 20px;
    width: 35%;
    margin-top: 50px;
  }
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

const SearchBtn = styled.button`
  background: var(--color-primary-100);
  border-radius: 20px;
  color: #ffffff;
  width: 90px;
  height: 30px;
`;
