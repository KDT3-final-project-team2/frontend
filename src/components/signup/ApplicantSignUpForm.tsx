import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ISignUpFormProps } from '../../@types/props';
import DropDown from '../common/DropDown';
import { applicantEmailCheck } from '@/api/applicantApi';
import AlertModal from '../common/AlertModal';

const ApplicantSignUpForm = ({ register, handleSubmit, formState, setValue }: ISignUpFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <Wrapper>
      <Form onSubmit={() => handleSubmit()}>
        <div className='inputBox'>
          <label htmlFor=''>기본정보</label>
          <input id='applicantName' type='text' placeholder='이름' {...register('applicantName')} />
          <Error>{formState.errors.applicantName?.message}</Error>
          <input id='applicantBirthDate' type='text' placeholder='생년월일' {...register('applicantBirthDate')} />
          <Error>{formState.errors.applicantBirthDate?.message}</Error>
        </div>

        <div className='inputBox'>
          <DropDown
            width='400px'
            title='applicantGender'
            selections={['남자', '여자']}
            register={register}
            setValue={setValue}
          />
          <Error>{formState.errors.applicantGender?.message}</Error>
          <DropDown
            width='400px'
            title='applicantSector'
            selections={['의사', '간호사', '간호조무사', '원무과', '의료기사']}
            register={register}
            setValue={setValue}
          />
          <Error>{formState.errors.applicantSector?.message}</Error>
        </div>
        <div className='inputBox'>
          <DropDown
            width='400px'
            title='applicantEducation'
            selections={['고졸', '초대졸', '대졸', '석박사']}
            register={register}
            setValue={setValue}
          />
          <Error>{formState.errors.applicantEducation?.message}</Error>

          <DropDown
            width='400px'
            title='applicantWorkExperience'
            selections={['신입', '1년차', '2년차', '3년차', '4년차', '5년차 이상']}
            register={register}
            setValue={setValue}
          />
          <Error>{formState.errors.applicantWorkExperience?.message}</Error>
        </div>

        <div className='inputBox'>
          <label htmlFor='applicantContact'>휴대폰번호</label>
          <Error>{formState.errors.applicantContact?.message}</Error>
          <input id='applicantContact' type='tel' {...register('applicantContact')} placeholder='010-1234-5678' />
        </div>

        <div className='inputBox'>
          <label htmlFor='applicantEmail'>이메일</label>
          <Error>{formState.errors.applicantEmail?.message}</Error>
          <input
            id='applicantEmail'
            type='text'
            placeholder='medi@match.com'
            {...(register('applicantEmail'),
            {
              onChange: event => {
                setEmail(event.currentTarget.value);
                setValue('applicantEmail', event.currentTarget.value, { shouldValidate: true });
              },
            })}
          />
          <button
            className='applicantEmail'
            onClick={event => {
              event.preventDefault();
              applicantEmailCheck({ applicantEmail: email }).then(res => {
                const message = res.message;
                AlertModal({ message });
              });
            }}
          >
            중복확인
          </button>
        </div>

        <div className='inputBox '>
          <label htmlFor='applicantPassword'>비밀번호</label>
          <input
            type={showPassword ? 'string' : 'password'}
            id='applicantPassword'
            placeholder='영문, 숫자 조합 8~15자리'
            {...register('applicantPassword')}
          />
          {showPassword ? (
            <img src='/icons/close-eye.png' alt='' onClick={() => setShowPassword(false)} className='eye' />
          ) : (
            <img src='/icons/open-eye.png' alt='비밀번호보기' onClick={() => setShowPassword(true)} className='eye' />
          )}
        </div>

        <div className='inputBox password'>
          <Error>
            {formState.errors.applicantPassword?.message?.toString()}
            {` `}
            {formState.errors.confirmPassword?.message?.toString()}
          </Error>
          <input
            type={showPassword ? 'string' : 'password'}
            id='confirmPassword'
            placeholder='비밀번호 확인'
            {...register('confirmPassword')}
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
  .inputBox.password {
    margin-top: -18px;
  }

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
    input#applicantEmail {
      width: 70%;
    }
    input#zoneCode {
      width: 280px;
    }
    input#applicantPassword {
      border-radius: 20px 20px 0 0;
      border-bottom: none;
    }
    input#confirmPassword {
      border-radius: 0 0 20px 20px;
    }

    img.eye {
      height: 28px;
      width: 28px;
      position: absolute;
      right: 20px;
      top: 22%;
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
      &.applicantEmail {
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
