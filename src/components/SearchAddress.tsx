import React from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';
import { ISearchAddressProps } from '../@types/props';

const SearchAddress = ({ onClose, setValue }: ISearchAddressProps) => {
  const handleComplete = (data: Address) => {
    onClose();
    let zoneCode = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setValue('zoneCode', zoneCode);
    setValue('address', fullAddress);
  };

  return <DaumPostcode style={{ width: '500px', height: '450px' }} onComplete={handleComplete} autoClose />;
};

export default SearchAddress;
