import styled from 'styled-components';
import { useState } from 'react';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { ISignUpFormProps } from '../../@types/props';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import { companyEmailCheck } from '@/api/companyApi';
import AlertModal from '../common/AlertModal';

const CompanySignUpForm = ({ register, handleSubmit, formState, setValue }: ISignUpFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const open = useDaumPostcodePopup(postcodeScriptUrl);
  const [email, setEmail] = useState('');

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
          <input type='text' id='companyRepresentative' placeholder='대표자명' {...register('companyRepresentative')} />
          <Error>{formState.errors.companyRepresentative?.message?.toString()}</Error>
        </div>
        <div className='inputBox'>
          <input
            type='text'
            id='companyRegNum'
            placeholder={`사업자등록번호 / '-'포함 10자리`}
            {...register('companyRegNum')}
          />
          <Error>{formState.errors.companyRegNum?.message?.toString()}</Error>
          <input type='tel' id='companyContact' placeholder='대표전화' {...register('companyContact')} />
          <Error>{formState.errors.companyContact?.message?.toString()}</Error>
        </div>

        <div className='inputBox'>
          <label htmlFor='companyEmail'>이메일</label>
          <Error>{formState.errors.companyEmail?.message?.toString()}</Error>
          <input
            type='email'
            id='companyEmail'
            placeholder='medi@match.com'
            {...(register('companyEmail'),
            {
              onchange: (event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.currentTarget.value);
                setValue('companyEmail', event.currentTarget.value, { shouldValidate: true });
              },
            })}
          />
          <button
            className='companyEmail'
            onClick={event => {
              event.preventDefault();
              companyEmailCheck({ companyEmail: email }).then(res => {
                const message = res.message;
                AlertModal({ message });
              });
            }}
          >
            중복확인
          </button>
        </div>

        <div className='inputBox'>
          <label htmlFor='companyPassword'>비밀번호</label>
          <input
            type={showPassword ? 'string' : 'password'}
            id='companyPassword'
            placeholder='영문, 숫자 조합 8~15자리'
            {...register('companyPassword')}
          />
          {showPassword ? (
            <img src='/icons/close-eye.png' alt='' onClick={() => setShowPassword(false)} />
          ) : (
            <img src='/icons/open-eye.png' alt='비밀번호보기' onClick={() => setShowPassword(true)} />
          )}
        </div>

        <div className='inputBox password'>
          <Error>
            {formState.errors.companyPassword?.message?.toString()}
            {` `}
            {formState.errors.confirmPassword?.message?.toString()}
          </Error>
          <input
            type={showPassword ? 'string' : 'password'}
            id='confirmPassword'
            placeholder='비밀번호 재입력'
            {...register('confirmPassword')}
          />
          {showPassword ? (
            <img src='/icons/close-eye.png' alt='' onClick={() => setShowPassword(false)} />
          ) : (
            <img src='/icons/open-eye.png' alt='비밀번호보기' onClick={() => setShowPassword(true)} />
          )}
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
          <input type='text' id='address' placeholder='주소를 입력해주세요.' {...register('address')} />
        </div>
        <div className='inputBox'>
          <label htmlFor=''>홈페이지(선택)</label>
          <Error>{formState.errors.companyUrl?.message?.toString()}</Error>
          <input
            type='string'
            id='companyUrl'
            placeholder='병의원의 홈페이지 링크를 입력해주세요.'
            {...register('companyUrl')}
          />
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
      border: 1px solid #374151;
      min-width: 350px;
      width: 100%;
      padding: 10px 30px;
      font-size: 15px;
      &::placeholder {
        color: rgba(37, 37, 37, 0.5);
        font-weight: bold;
      }
    }
    input#companyEmail {
      width: 70%;
    }
    input#zoneCode {
      width: 280px;
    }
    input#companyPassword {
      border-radius: 20px 20px 0 0;
      border-bottom: none;
    }
    input#confirmPassword {
      border-radius: 0 0 20px 20px;
    }

    img {
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
      &.companyEmail {
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
