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
  lastName: yup
    .string()
    .required('성은 필수 입력입니다.')
    .matches(/^[a-zA-Z가-힣]+$/, '영문자, 한글을 입력해주세요.'),
  firstName: yup
    .string()
    .required('이름은 필수 입력입니다.')
    .matches(/^[a-zA-Z가-힣]+$/, '영문자, 한글을 입력해주세요.'),
  birth: yup.string().required('생년월일은 필수 입력입니다.'),
  phoneNumber: yup
    .string()
    .required('전화번호는 필수 입력입니다.')
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, '전화번호 형식에 알맞지 않습니다. -를 포함해서 입력하세요'),
});
