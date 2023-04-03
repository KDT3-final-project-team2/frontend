import { useState } from 'react';
import styled from 'styled-components';
import { ISignUpFormProps } from '../../@types/props';
import DropDown from '../common/DropDown';

const ApplicantSignUpForm = ({ register, handleSubmit, formState, setValue }: ISignUpFormProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Form onSubmit={() => handleSubmit()}>
        <div className='inputBox'>
          <label htmlFor=''>이름/생년월일</label>
          <input id='name' type='text' placeholder='이름' {...register('name')} />
          <Error>{formState.errors.name?.message}</Error>
          <input id='birthDate' type='date' placeholder='생년월일' {...register('birthDate')} />
          <Error>{formState.errors.birthDate?.message}</Error>
        </div>

        <div className='inputBox'>
          <label htmlFor=''>성별/지원직무</label>
          <DropDown
            width='400px'
            title='gender'
            selections={['남자', '여자']}
            register={register}
            setValue={setValue}
          />
          <Error>{formState.errors.gender?.message}</Error>
          <DropDown
            width='400px'
            title='sector'
            selections={['의사', '간호사']}
            register={register}
            setValue={setValue}
          />
          <Error>{formState.errors.sector?.message}</Error>
        </div>
        <div className='inputBox'>
          <label htmlFor=''>학력/경력</label>
          <DropDown
            width='400px'
            title='education'
            selections={['고졸', '전문대졸', '4년제졸', '석/박사']}
            register={register}
            setValue={setValue}
          />
          <Error>{formState.errors.education?.message}</Error>

          <DropDown
            width='400px'
            title='workExperience'
            selections={['신입', '1년차']}
            register={register}
            setValue={setValue}
          />
          <Error>{formState.errors.workExperience?.message}</Error>
        </div>

        <div className='inputBox'>
          <label htmlFor='phoneNumber'>휴대폰번호</label>
          <Error>{formState.errors.phoneNumber?.message}</Error>
          <input id='phoneNumber' type='tel' {...register('phoneNumber')} placeholder='010-1234-5678' />
        </div>

        <div className='inputBox'>
          <label htmlFor='email'>이메일</label>
          <Error>{formState.errors.email?.message}</Error>
          <input id='email' type='text' {...register('email')} />
          <button
            className='email'
            onClick={event => {
              event.preventDefault();
              // 이메일중복확인 로직
            }}
          >
            중복확인
          </button>
        </div>

        <div className='inputBox'>
          <label htmlFor='password'>비밀번호</label>
          <Error>{formState.errors.password?.message}</Error>
          <input id='password' type='password' {...register('password')} />
        </div>

        <div className='inputBox'>
          <label htmlFor='confirmPassword'>비밀번호 확인</label>
          <Error>{formState.errors.confirmPassword?.message}</Error>
          <input type='password' id='confirmPassword' {...register('confirmPassword')} />
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
      min-width: 350px;
      width: 100%;
      padding: 10px 30px;
      font-size: 15px;
      &::placeholder {
        color: rgba(37, 37, 37, 0.5);
      }
    }
    img {
      position: absolute;
      right: 53%;
      top: 42%;
      width: 16px;
      height: 10px;
      &:nth-child(n + 5) {
        left: 95%;
      }
    }
    input.inactive {
      display: none;
    }
    input#email {
      width: 70%;
    }
    input#zoneCode {
      width: 280px;
    }

    button {
      position: absolute;
      top: 50%;
      left: 52%;
      transform: translateY(-15px);
      background: #8294cd;
      border-radius: 20px;
      padding: 7px 15px 4px;
      height: 30px;
      font-weight: bold;
      font-size: 13px;
      line-height: 24px;
      color: white;
      &.email {
        left: 80%;
      }
    }
    ul {
      position: absolute;
      top: 60px;
      border: 1px solid gray;
      border-radius: 30px;
      overflow: hidden;
      width: 50%;
      height: fit-content;
      z-index: 2;
      &:nth-child(n + 5) {
        left: 50%;
      }
      li {
        left: 0;
        width: 100%;
        height: 40px;
        padding: 10px 30px;
        box-sizing: border-box;
        background-color: white;
        font-size: 13px;
        display: flex;
        padding-left: 35px;
        justify-content: flex-start;
        align-items: center;
        &:hover {
          background-color: var(--color-light-gray);
        }
      }
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
