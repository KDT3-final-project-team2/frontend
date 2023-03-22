import { useForm } from 'react-hook-form';

const ApplicantSignUp = () => {
  const { register, handleSubmit } = useForm();

  const onClickSignUp = data => {
    console.log(data);
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      onSubmit={handleSubmit(onClickSignUp)}
    >
      <label htmlFor='email'>이메일</label>
      <input style={{ marginBottom: '20px' }} id='email' type='text' {...register('email')} />

      <label htmlFor='password'>비밀번호</label>
      <input style={{ marginBottom: '20px' }} id='password' type='password' {...register('password')} />

      <label htmlFor='name'>이름</label>
      <div>
        <input
          style={{ marginBottom: '20px', marginRight: '10px' }}
          id='name'
          type='text'
          placeholder='성'
          {...register('lastName')}
        />
        <input style={{ marginBottom: '20px' }} id='name' type='text' placeholder='이름' {...register('firstName')} />
      </div>

      <label htmlFor='birth'>생년월일</label>
      <input style={{ marginBottom: '20px' }} id='birth' type='date' />

      <label htmlFor='gender'>성별</label>
      <select style={{ marginBottom: '20px' }} name='gender' id='gender'>
        <option value='남성'>남성</option>
        <option value='여성'>여성</option>
      </select>

      <label htmlFor='phoneNumber'>연락처</label>
      <input style={{ marginBottom: '20px' }} name='phone' id='phoneNumber' type='tel' />

      <button>회원가입</button>
    </form>
  );
};

export default ApplicantSignUp;
