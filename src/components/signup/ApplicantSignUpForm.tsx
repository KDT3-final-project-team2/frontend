import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { applicantSignUpSchema } from './../../utils/validationSchema';

const ApplicantSignUpForm = () => {
  const { register, handleSubmit, formState } = useForm<IApplicantSignUpData>({
    resolver: yupResolver(applicantSignUpSchema),
    mode: 'onChange',
  });

  return (
    <>
      <form
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        // onSubmit={handleSubmit(onClickSignUp)}
      >
        <label htmlFor='email'>이메일</label>
        <input id='email' type='text' {...register('email')} />
        <div style={{ margin: '10px 0', color: 'red' }}>{formState.errors.email?.message}</div>

        <label htmlFor='password'>비밀번호</label>
        <input id='password' type='password' {...register('password')} />
        <p style={{ margin: '10px 0', color: 'red' }}>{formState.errors.password?.message}</p>

        <label htmlFor='confirmPassword'>비밀번호 확인</label>
        <input type='password' id='confirmPassword' {...register('confirmPassword')} />
        <p style={{ margin: '10px 0', color: 'red' }}>{formState.errors.confirmPassword?.message}</p>

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

        <button
          style={{
            backgroundColor: formState.isValid ? 'orange' : '',
          }}
        >
          회원가입
        </button>
      </form>
    </>
  );
};

export default ApplicantSignUpForm;
