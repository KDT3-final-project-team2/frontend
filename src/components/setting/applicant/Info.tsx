import styled from 'styled-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { applicantSignUpSchema } from '@/utils/validationSchema';
import DropDown from '@/components/common/DropDown';
import { ISettingProps } from '@/@types/props';

const Info = ({ register, handleSubmit, formState, setValue }: ISettingProps) => {
  const onValid = (data: IApplicantSignUpData) => {
    console.log(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Wrapper>
      <Form onSubmit={() => handleSubmit(onValid)}>
        <div className='inputBox'>
          <label htmlFor=''>기본정보</label>
          <input id='name' type='text' placeholder='이름' {...register('name')} />
          <Error>{formState.errors.name?.message}</Error>
          <input id='birthDate' type='text' placeholder='생년월일' {...register('birth')} />
          <Error>{formState.errors.birth?.message}</Error>
        </div>
        <div className='inputBox'>
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
            selections={['의사', '간호사', '간호조무사', '의료기사', '의료행정']}
            register={register}
            setValue={setValue}
          />
          <Error>{formState.errors.sector?.message}</Error>
        </div>
        <div className='inputBox'>
          <DropDown
            width='400px'
            title='education'
            selections={['고졸', '초대졸', '대졸', '석박사']}
            register={register}
            setValue={setValue}
          />
          <Error>{formState.errors.education?.message}</Error>
          <DropDown
            width='400px'
            title='workExperience'
            selections={['신입', '1년차', '2년차', '3년차', '4년차', '5년차', '5년이상']}
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
          <input id='email' type='text' placeholder='medi@match.com' {...register('email')} />
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
        <div className='inputBox '>
          <label htmlFor='password'>비밀번호</label>
          <input
            type={showPassword ? 'string' : 'password'}
            id='password'
            placeholder='영문, 숫자 조합 8~15자리'
            {...register('password')}
          />
          {showPassword ? (
            <img src='/icons/close-eye.png' alt='' onClick={() => setShowPassword(false)} className='eye' />
          ) : (
            <img src='/icons/open-eye.png' alt='비밀번호보기' onClick={() => setShowPassword(true)} className='eye' />
          )}
        </div>
      </Form>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 40px 0 70px;
  border-radius: 20px;
  box-shadow: 2px 2px 10px 2px rgba(67, 87, 172, 0.15);
  padding: 60px 80px;
  box-sizing: border-box;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  .inputBox.password {
    margin-top: -18px;
  }
  .inputBox {
    display: flex;
    gap: 10px;
    width: 100%;
    position: relative;
    align-items: center;
    label {
      width: 100px;
      min-width: 100px;
      font-size: 16px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    input {
      display: block;
      height: 30px;
      border-radius: 30px;
      border: 1px solid #374151;
      width: 100%;
      padding: 10px 30px;
      font-size: 15px;
      &::placeholder {
        color: rgba(37, 37, 37, 0.5);
        font-weight: bold;
      }
    }
    input#zoneCode {
      max-width: 280px;
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
    button {
      background: #8294cd;
      border-radius: 20px;
      padding: 7px 15px 4px;
      height: 30px;
      font-weight: bold;
      font-size: 13px;
      line-height: 24px;
      color: white;
      min-width: 110px;
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

export default Info;
