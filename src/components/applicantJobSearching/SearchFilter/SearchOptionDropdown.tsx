import { ISearchOptionDropdownProps } from '@/@types/props';
import { SelectBox } from '@/components/applicantJobSearching/SearchFilter/SearchFilter';
import { searchingOptions } from '@/constants/jobPostingOptions';

const SearchOptionDropdown = ({ selectedOption, handleSearchOptionChange }: ISearchOptionDropdownProps) => {
  return (
    <SelectBox onChange={handleSearchOptionChange}>
      <option value=''>선택하세요</option>
      {searchingOptions?.[selectedOption].map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectBox>
  );
};

export default SearchOptionDropdown;
