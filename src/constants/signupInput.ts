export const applicationInputToKorean: { [key: string]: string } = {
  applicantGender: '성별',
  applicantSector: '직무',
  applicantEducation: '학력',
  applicantWorkExperience: '경력',
};

export const applicantSignUpData: { [key: string]: { [key: string]: string } } = {
  applicantGender: {
    남자: 'M',
    여자: 'W',
  },
  applicantSector: {
    의사: 'DOCTOR',
    간호사: 'NURSE',
    간호조무사: 'NURSE_AIDE',
    원무과: 'MEDICAL_RECORDS_PROFESSIONAL',
    의료기사: 'MEDICAL_TECHNICIAN',
  },
  applicantEducation: {
    고졸: 'HIGH_SCHOOL',
    초대졸: 'JUNIOR_COLLEGE',
    대졸: 'UNIVERSITY',
    석박사: 'MASTER_AND_DOCTOR',
  },
  applicantWorkExperience: {
    신입: 'NEWCOMER',
    '1년차': 'ONE_YEAR',
    '2년차': 'TWO_YEAR',
    '3년차': 'THREE_YEAR',
    '4년차': 'FOUR_YEAR',
    '5년차 이상': 'FIVE_YEAR_OVER',
  },
};
