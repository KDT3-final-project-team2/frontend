import { ISearchInputFieldProps } from '@/@types/props';
import styled from 'styled-components';

const SearchInputField = ({ handleSearchInputChange }: ISearchInputFieldProps) => {
  return (
    <SearchInputWrapper>
      <img src='/icons/search.png' />
      <SearchInput placeholder='검색어를 입력해주세요.' onChange={handleSearchInputChange}></SearchInput>
    </SearchInputWrapper>
  );
};

export default SearchInputField;

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
