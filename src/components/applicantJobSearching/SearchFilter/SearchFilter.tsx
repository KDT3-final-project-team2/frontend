import { ISearchFilterProps } from '@/@types/props';
import styled from 'styled-components';
import SearchOptionDropdown from './SearchOptionDropdown';

const SearchFilter = ({
  selectedOption,
  handleCategoryChange,
  handleSearchOptionChange,
  handleSearchInputChange,
}: ISearchFilterProps) => {
  return (
    <>
      <SearchTab>공고 탐색</SearchTab>
      <SearchBox>
        <SelectBox value={selectedOption} onChange={handleCategoryChange}>
          <option value='전체'>전체</option>
          <option value='직무'>직무</option>
          <option value='학력'>학력</option>
          <option value='경력'>경력</option>
          <option value='공고제목'>공고제목</option>
          <option value='회사'>회사</option>
        </SelectBox>
        {(selectedOption === '직무' || selectedOption === '학력' || selectedOption === '경력') && (
          <SearchOptionDropdown selectedOption={selectedOption} handleSearchOptionChange={handleSearchOptionChange} />
        )}
        {(selectedOption === '공고제목' || selectedOption === '회사') && (
          <SearchInputWrapper>
            <img src='/icons/search.png' />
            <SearchInput placeholder='검색어를 입력해주세요.' onChange={handleSearchInputChange}></SearchInput>
          </SearchInputWrapper>
        )}
      </SearchBox>
    </>
  );
};

export default SearchFilter;

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

export const SelectBox = styled.select`
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
