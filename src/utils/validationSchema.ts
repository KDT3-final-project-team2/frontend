import * as yup from 'yup';

export const applicantSignUpSchema = yup.object({
  email: yup
    .string()
    .required('이메일은 필수 입력입니다.')
    .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, '이메일 형식에 맞지 않습니다.'),
  password: yup
    .string()
    .required('비밀번호는 필수 입력입니다.')
    .matches(/^[a-zA-Z0-9]+$/, '영문자, 숫자를 조합하여 입력해주세요.')
    .min(8, '비밀번호는 최소 8자리 이상 입력해 주세요.')
    .max(15, '비밀번호는 최대 15자리로 입력해 주세요.'),
  confirmPassword: yup
    .string()
    .required('비밀번호 확인은 필수 입력입니다.')
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
  name: yup
    .string()
    .required('이름은 필수 입력입니다.')
    .matches(/^[a-zA-Z가-힣]+$/, '영문자, 한글을 입력해주세요.'),
  birthDate: yup
    .string()
    .required('생년월일은 필수 입력입니다.')
    .matches(
      /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
      'YYYY-MM-DD 형식에 맞춰 입력해주세요.',
    ),
  phoneNumber: yup
    .string()
    .required('전화번호는 필수 입력입니다.')
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, '전화번호 형식에 알맞지 않습니다. -를 포함해서 입력하세요'),
  gender: yup
    .string()
    .required('성별을 입력해주세요.')
    .matches(/^남자$|^여자$/, '아래 목록에서 선택해 주세요.'),
  sector: yup
    .string()
    .required('직무를 입력해주세요.')
    .matches(/^의사$|^간호사$|^간호조무사$|^의료기사$|^의료행정$/, '아래 목록에서 선택해 주세요.'),
  education: yup
    .string()
    .required('학력을 입력해주세요.')
    .matches(/^고졸$|^초대졸$|^대졸$|^석박사$/, '아래 목록에서 선택해 주세요.'),
  workExperience: yup
    .string()
    .required('경력을 입력해주세요.')
    .matches(/^신입$|^1년차$|^2년차$|^3년차$|^4년차$|^5년차$|^5년이상$/, '아래 목록에서 선택해 주세요.'),
});

export const companySignUpSchema = yup.object().shape({
  companyName: yup.string().required('기업명을 입력해 주세요.'),
  representative: yup.string().required('대표자명을 입력해 주세요.'),
  companyNum: yup
    .string()
    .required('사업자등록번호는 필수 입력입니다.')
    .matches(/^\d{3}-\d{2}-\d{5}$/, '사업자등록번호 형식에 알맞지 않습니다. -를 포함해서 입력하세요'),
  email: yup
    .string()
    .required('이메일은 필수 입력입니다.')
    .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, '이메일 형식에 맞지 않습니다.'),
  password: yup
    .string()
    .required('비밀번호는 필수 입력입니다.')
    .matches(/^[a-zA-Z0-9]+$/, '영문자, 숫자를 조합하여 입력해주세요.')
    .min(8, '비밀번호는 최소 8자리 이상 입력해 주세요.')
    .max(15, '비밀번호는 최대 15자리로 입력해 주세요.'),
  confirmPassword: yup
    .string()
    .required('비밀번호 확인은 필수 입력입니다.')
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
  contact: yup
    .string()
    .required('전화번호는 필수 입력입니다.')
    .matches(/^\d{2,3}-\d{3,4}-\d{4}$/, '전화번호 형식에 알맞지 않습니다. -를 포함해서 입력하세요'),
  zoneCode: yup
    .string()
    .required('우편번호는 필수 입력입니다.')
    .matches(/^\d{5}$/, '주소찾기 버튼을 통해 주소를 입력해 주세요.')
    .min(5, '주소찾기 버튼을 통해 주소를 입력해 주세요.')
    .max(5, '주소찾기 버튼을 통해 주소를 입력해 주세요.'),
  address: yup.string().required('주소는 필수 입력입니다.'),
});

export const loginSchema = yup.object().shape({
  id: yup
    .string()
    .required('아이디는 필수 입력입니다.')
    .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, '이메일 형식에 맞지 않습니다.'),
  pw: yup
    .string()
    .required('비밀번호는 필수 입력입니다.')
    .min(8, '비밀번호는 최소 8자리 이상 입력해 주세요.')
    .max(15, '비밀번호는 최대 15자리로 입력해 주세요.')
    .matches(/^[a-zA-Z0-9]{8,15}$/, '영문자, 숫자를 조합하여 입력해주세요.'),
});

export const jobPostSchema = yup.object().shape({
  title: yup.string().required('공고명을 입력해주세요.'),
  sector: yup.string().required('직종을 입력해주세요.'),
  experience: yup.string().required('경력을 입력해주세요.'),
  education: yup.string().required('학력을 입력해주세요.'),
  maxapplicants: yup
    .number()
    .required('모집인원을 입력해주세요.')
    .typeError('숫자만 입력 가능합니다.')
    .integer('정수만 입력 가능합니다.')
    .min(1, '1 이상의 숫자를 입력해주세요.'),
  duedate: yup.string().required('마감일을 입력해주세요.'),
  startDate: yup.string().required('채용 시작일을 입력해주세요.'),
  file: yup.mixed().required('공고 PDF를 입력해주세요.'),
});

export const termPostSchema = yup.object().shape({
  version: yup
    .string()
    .required('버전을 입력해주세요.')
    .matches(/^[1-9]\d*\.\d{1,2}$/, '올바른 형식으로 입력해주세요. (ex. 1.0, 2.12)'),
  contents: yup.string().notOneOf(['<p><br></p>'], '내용을 입력해주세요.').required('내용을 입력해주세요.'),
  selectedOption: yup.string().required('type을 선택해주세요.'),
});

export const ScheduleSchema = yup.object().shape({
  name: yup.string().required('이름을 입력해주세요.'),
  content: yup.string().required('내용을 입력해주세요.'),
});
