import { debounce } from 'lodash';
import { ChangeEvent, useState } from 'react';

const useSearchFilter = () => {
  const [selectedOption, setSelectedOption] = useState('전체');
  const [searchingData, setSearchingData] = useState('');

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchingData('');
    setSelectedOption(event.target.value);
  };

  const handleSearchOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSearchingData(event.target.value);
  };

  const handleSearchInputChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
    setSearchingData(event.target.value);
  }, 500);

  return { selectedOption, searchingData, handleCategoryChange, handleSearchOptionChange, handleSearchInputChange };
};

export default useSearchFilter;
