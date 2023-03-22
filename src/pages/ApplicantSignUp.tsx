import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object({
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

const ApplicantSignUp = () => {
  const { register, handleSubmit, formState } = useForm<IApplicantSignUpData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onClickSignUp = (data: IApplicantSignUpData) => {
    console.log(data);
    // const name = data.lastName + data.firstName;
    // axios.post('URL', {
    //   applicantEmail: data.email,
    //   applicantPassword: data.password,
    //   applicantName: name,
    //   applicantBirthDate: data.birth,
    //   applicantContact: data.phoneNumber,
    // });
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      onSubmit={handleSubmit(onClickSignUp)}
    >
      <label htmlFor='email'>이메일</label>
      <input id='email' type='text' {...register('email')} />
      <div style={{ margin: '10px 0', color: 'red' }}>{formState.errors.email?.message}</div>

      <label htmlFor='password'>비밀번호</label>
      <input id='password' type='password' {...register('password')} />
      <p style={{ margin: '10px 0', color: 'red' }}>{formState.errors.password?.message}</p>

      <label htmlFor='name'>이름</label>
      <div style={{ display: 'flex', gap: '5px' }}>
        <div>
          <input id='lastName' type='text' placeholder='성' {...register('lastName')} />
          <p style={{ margin: '10px 0', color: 'red' }}>{formState.errors.lastName?.message}</p>
        </div>
        <div>
          <input id='name' type='text' placeholder='이름' {...register('firstName')} />
          <p style={{ margin: '10px 0', color: 'red' }}>{formState.errors.firstName?.message}</p>
        </div>
      </div>

      <label htmlFor='birth'>생년월일</label>
      <input id='birth' type='date' {...register('birth')} />
      <p style={{ margin: '10px 0', color: 'red' }}>{formState.errors.birth?.message}</p>

      <label htmlFor='phoneNumber'>연락처</label>
      <input id='phoneNumber' type='tel' {...register('phoneNumber')} placeholder='010-1234-5678' />
      <p style={{ margin: '10px 0', color: 'red' }}>{formState.errors.phoneNumber?.message}</p>

      <button style={{ backgroundColor: formState.isValid ? 'orange' : '' }}>회원가입</button>
    </form>
  );
};

export default ApplicantSignUp;
