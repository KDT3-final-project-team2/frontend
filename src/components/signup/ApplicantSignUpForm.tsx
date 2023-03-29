import styled from 'styled-components';
import { ISignUpFormProps } from '../../@types/props';

const ApplicantSignUpForm = ({ register, handleSubmit, formState }: ISignUpFormProps) => {
  return (
    <Wrapper>
      <Form onSubmit={() => handleSubmit()}>
        <div className='inputBox'>
          <label htmlFor=''></label>
          <>
            <input id='name' type='text' placeholder='이름' {...register('name')} />
            <p style={{ margin: '10px 0', color: 'red' }}>{formState.errors.name?.message}</p>
          </>
          <>
            <input id='birthDate' type='date' placeholder='생년월일' {...register('birthDate')} />
            <p style={{ margin: '10px 0', color: 'red' }}>{formState.errors.birthDate?.message}</p>
          </>
        </div>

        <div>
          <input id='sector' type='text' placeholder='직무' {...register('sector')} />
          <div style={{ margin: '10px 0', color: 'red' }}>{formState.errors.sector?.message}</div>
          <input id='email' type='text' placeholder='학력' {...register('email')} />
          <div style={{ margin: '10px 0', color: 'red' }}>{formState.errors.email?.message}</div>
          <input id='email' type='text' placeholder='경력' {...register('email')} />
          <div style={{ margin: '10px 0', color: 'red' }}>{formState.errors.email?.message}</div>
        </div>

        <div>
          <label htmlFor='phoneNumber'>휴대폰번호</label>
          <input id='phoneNumber' type='tel' {...register('phoneNumber')} placeholder='010-1234-5678' />
          <p style={{ margin: '10px 0', color: 'red' }}>{formState.errors.phoneNumber?.message}</p>
        </div>

        <div className='inputBox'>
          <label htmlFor='email'>이메일</label>
          <input id='email' type='text' {...register('email')} />
          <Error>{formState.errors.email?.message}</Error>
        </div>

        <div className='inputBox'>
          <label htmlFor='password'>비밀번호</label>
          <input id='password' type='password' {...register('password')} />
          <Error>{formState.errors.password?.message}</Error>
        </div>

        <div className='inputBox'>
          <label htmlFor='confirmPassword'>비밀번호 확인</label>
          <input type='password' id='confirmPassword' {...register('confirmPassword')} />
          <Error style={{ margin: '10px 0', color: 'red' }}>{formState.errors.confirmPassword?.message}</Error>
        </div>
      </Form>
    </Wrapper>
  );
};

export default ApplicantSignUpForm;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;

  .inputBox {
    display: flex;
    gap: 10px;
    width: 100%;
    position: relative;
    label {
      position: absolute;
      width: 100px;
      left: -110px;
      top: 50%;
      transform: translateY(-8px);
      font-size: 16px;
      font-weight: bold;
    }
    input {
      display: block;
      height: 30px;
      border-radius: 30px;
      border: 1px solid gray;
      min-width: 280px;
      width: 100%;
      padding: 10px 30px;
      font-size: 15px;
      &::placeholder {
        color: rgba(37, 37, 37, 0.5);
      }
    }
    input#zoneCode {
      width: 280px;
    }

    button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-15px);
      background: #8294cd;
      border-radius: 20px;
      padding: 0 10px;
      height: 30px;
      font-weight: bold;
      font-size: 13px;
      line-height: 24px;
      color: white;
    }
  }
`;
const Error = styled.div`
  position: absolute;
  bottom: -15px;
  left: 20px;
  font-size: 10px;
  color: var(--color-red);
  &:last-child {
    left: 54%;
  }
`;
