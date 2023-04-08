export const useTermChangeToEnglish = (type: string | undefined) => {
  let termType = '';
  switch (type) {
    case '서비스이용약관':
      termType = 'SERVICE';
      break;
    case '개인정보처리방침':
      termType = 'PRIVACY';
      break;
    case '제3자정보제공':
      termType = 'THIRD_PARTY';
      break;
    case '개인정보마케팅이용':
      termType = 'MARKETING';
      break;
    default:
      termType = '선택하세요.';
  }
  return termType;
};
