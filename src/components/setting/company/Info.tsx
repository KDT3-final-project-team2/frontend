import styled from 'styled-components';
import { useState } from 'react';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { companySignUpSchema } from '@/utils/validationSchema';
import { SubmitButton } from '../applicant/Info';
import { useAppSelector } from '@/hooks/useDispatchHooks';

const Info = () => {
  const { register, handleSubmit, formState, setValue } = useForm<ICompanySignUpData>({
    resolver: yupResolver(companySignUpSchema),
    mode: 'onChange',
  });

  const onValid = (data: ICompanySignUpData) => {
    //const { companyName, representative, companyNum, email, password, confirmPassword, contact, zoneCode } = data;
    const address = data.zoneCode + ' ' + data.address;
    console.log(data, address);
  };

  const [showPassword, setShowPassword] = useState(false);
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

  // 유저 정보
  const ceoName = useAppSelector(state => state.companyUser.ceoName);

  return (
    <Wrapper>
      <Form onSubmit={() => handleSubmit(onValid)}>
        <div className='inputBox'>
          <label>병원정보</label>
          <input
            type='text'
            id='companyName'
            placeholder='병원(기업)명'
            defaultValue={ceoName}
            {...register('companyName')}
          />
          <Error>{formState.errors.companyName?.message?.toString()}</Error>
          <input
            type='text'
            id='companyRegNum'
            placeholder={`사업자등록번호 / '-'포함 10자리`}
            {...register('companyRegNum')}
          />
          <Error>{formState.errors.companyRegNum?.message?.toString()}</Error>
        </div>
        <div className='inputBox'>
          <label>대표정보</label>
          <input type='text' id='companyRepresentative' placeholder='대표자명' {...register('companyRepresentative')} />
          <Error>{formState.errors.companyRepresentative?.message?.toString()}</Error>
          <input type='tel' id='companyContact' placeholder='대표전화' {...register('companyContact')} />
          <Error>{formState.errors.companyContact?.message?.toString()}</Error>
        </div>
        <div className='inputBox'>
          <label htmlFor='email'>이메일</label>
          <Error>{formState.errors.companyEmail?.message?.toString()}</Error>
          <input type='email' id='email' placeholder='medi@match.com' {...register('companyEmail')} />
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
          <label htmlFor='address'>상세 주소</label>
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
        <SubmitButton type='submit'>수정완료</SubmitButton>
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
      height: 28px;
      width: 28px;
      position: absolute;
      right: 20px;
      top: 22%;
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
