import styled from 'styled-components';
import { useState } from 'react';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { ISignUpFormProps } from '../../@types/props';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';

const CompanySignUpForm = ({ register, handleSubmit, formState, setValue }: ISignUpFormProps) => {
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data: Address) => {
    let zoneCode = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setValue('zoneCode', zoneCode, { shouldValidate: true });
    setValue('address', fullAddress, { shouldValidate: true });
  };

  return (
    <Wrapper>
      <Form onSubmit={() => handleSubmit()}>
        <div className='inputBox'>
          <label>병원정보</label>
          <input type='text' id='companyName' placeholder='병원(기업)명' {...register('companyName')} />
          <Error>{formState.errors.companyName?.message?.toString()}</Error>
          <input type='text' id='representative' placeholder='대표자명' {...register('representative')} />
          <Error>{formState.errors.representative?.message?.toString()}</Error>
        </div>
        <div className='inputBox'>
          <input type='text' id='companyNum' placeholder='사업자등록번호' {...register('companyNum')} />
          <Error>{formState.errors.companyNum?.message?.toString()}</Error>
          <input type='string' id='contact' placeholder='대표번호' {...register('contact')} />
          <Error>{formState.errors.contact?.message?.toString()}</Error>
        </div>

        <div className='inputBox'>
          <label htmlFor='email'>이메일</label>
          <Error>{formState.errors.email?.message?.toString()}</Error>
          <input type='email' id='email' placeholder='대표 이메일' {...register('email')} />
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
          <Error>{formState.errors.password?.message?.toString()}</Error>
          <input type='password' id='password' {...register('password')} />
        </div>

        <div className='inputBox'>
          <label htmlFor='confirmPassword'>비밀번호 확인</label>
          <Error>{formState.errors.confirmPassword?.message?.toString()}</Error>
          <input type='password' id='confirmPassword' {...register('confirmPassword')} />
        </div>

        <div className='inputBox'>
          <label htmlFor='address'>주소</label>
          <Error>{formState.errors.zoneCode?.message?.toString()}</Error>
          <input type='string' id='zoneCode' placeholder='우편번호' {...register('zoneCode')} />
          <button
            onClick={event => {
              event.preventDefault();
              open({ onComplete: handleComplete });
            }}
          >
            우편번호검색
          </button>
        </div>
        <div className='inputBox'>
          <Error>{formState.errors.address?.message?.toString()}</Error>
          <input type='text' id='address' placeholder='주소를 입력해 주세요.' {...register('address')} />
        </div>
      </Form>
    </Wrapper>
  );
};

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

export default CompanySignUpForm;
