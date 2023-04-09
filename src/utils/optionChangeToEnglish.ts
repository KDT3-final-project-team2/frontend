export const optionChangeToEnglish = (defaultValue: string) => {
  let optionValue = '';
  switch (defaultValue) {
    case '의사':
      optionValue = 'DOCTOR';
      break;
    case '간호사':
      optionValue = 'NURSE';
      break;
    case '간호조무사':
      optionValue = 'NURSE_AIDE';
      break;
    case '원무과':
      optionValue = 'MEDICAL_RECORDS_PROFESSIONAL';
      break;
    case '의료기사':
      optionValue = 'MEDICAL_TECHNICIAN';
      break;
    case '신입':
      optionValue = 'NEWCOMER';
      break;
    case '1년차':
      optionValue = 'ONE_YEAR';
      break;
    case '2년차':
      optionValue = 'TWO_YEAR';
      break;
    case '3년차':
      optionValue = 'THREE_YEAR';
      break;
    case '4년차':
      optionValue = 'FOUR_YEAR';
      break;
    case '5년차 이상':
      optionValue = 'FIVE_YEAR_OVER';
      break;
    case '고졸':
      optionValue = 'HIGH_SCHOOL';
      break;
    case '초대졸':
      optionValue = 'JUNIOR_COLLEGE';
      break;
    case '대졸':
      optionValue = 'UNIVERSITY';
      break;
    case '석박사':
      optionValue = 'MASTER_AND_DOCTOR';
      break;
    default:
      optionValue = defaultValue;
  }
  return optionValue;
};
