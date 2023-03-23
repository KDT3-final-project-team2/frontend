import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import SearchAddress from '../components/SearchAddress';

const CompanySignUp = () => {
  const [openPostcode, setOpenPostcode] = useState(false);

  const schema = yup.object().shape({
    companyName: yup.string().required('기업명을 입력해 주세요.'),
    representative: yup.string().required('대표자명을 입력해 주세요.'),
    companyNum: yup
      .string()
      .required('사업자등록번호는 필수 입력입니다.')
      .matches(/^\d{3}-\d{2}-\d{5}$/, '사업자등록번호에 알맞지 않습니다. -를 포함해서 입력하세요'),
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
    confirmPassword: yup
      .string()
      .required('비밀번호 확인은 필수 입력입니다.')
      .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
    contact: yup
      .string()
      .required('전화번호는 필수 입력입니다.')
      .matches(/^\d{2,3}-\d{3,4}-\d{4}$/, '전화번호 형식에 알맞지 않습니다. -를 포함해서 입력하세요'),
    zoneCode: yup
      .string()
      .required('우편번호는 필수 입력입니다.')
      .matches(/^\d{5}$/, '주소찾기 버튼을 통해 주소를 입력해 주세요.')
      .min(5, '주소찾기 버튼을 통해 주소를 입력해 주세요.')
      .max(5, '주소찾기 버튼을 통해 주소를 입력해 주세요.'),
    address: yup.string().required('주소는 필수 입력입니다.'),
  });

  const { register, handleSubmit, formState, setValue } = useForm<ICompanySignUpData>({
    resolver: yupResolver(schema),
  });

  const onValid = (data: ICompanySignUpData) => {
    const { companyName, representative, companyNum, email, password, confirmPassword, contact, zoneCode } = data;
    const address = data.address + ' ' + data['address-detail'];

    console.log(data, address);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onValid)}>
        <div className='inputBox'>
          <label htmlFor='companyName'>기업명</label>
          <input type='text' id='companyName' {...register('companyName')} />
          <Error>{formState.errors.companyName?.message?.toString()}</Error>
        </div>

        <div className='inputBox'>
          <label htmlFor='representative'>대표자명</label>
          <input type='text' id='representative' {...register('representative')} />
          <Error>{formState.errors.representative?.message?.toString()}</Error>
        </div>

        <div className='inputBox'>
          <label htmlFor='companyNum'>사업자등록번호</label>
          <input type='text' id='companyNum' {...register('companyNum')} />
          <Error>{formState.errors.companyNum?.message?.toString()}</Error>
        </div>

        <div className='inputBox'>
          <label htmlFor='email'>이메일</label>
          <input type='email' id='email' {...register('email')} />
          <Error>{formState.errors.email?.message?.toString()}</Error>
        </div>

        <div className='inputBox'>
          <label htmlFor='password'>비밀번호</label>
          <input type='password' id='password' {...register('password')} />
          <Error>{formState.errors.password?.message?.toString()}</Error>
        </div>

        <div className='inputBox'>
          <label htmlFor='confirmPassword'>비밀번호 확인</label>
          <input type='password' id='confirmPassword' {...register('confirmPassword')} />
          <Error>{formState.errors.confirmPassword?.message?.toString()}</Error>
        </div>

        <div className='inputBox'>
          <label htmlFor='contact'>연락처</label>
          <input type='string' id='contact' {...register('contact')} />
          <Error>{formState.errors.contact?.message?.toString()}</Error>
        </div>

        <div className='inputBox'>
          <label htmlFor='address'>주소</label>
          <input type='string' id='zoneCode' placeholder='우편번호' {...register('zoneCode')} />
          <Error>{formState.errors.zoneCode?.message?.toString()}</Error>
          <button onClick={() => setOpenPostcode(true)}>주소 찾기</button>

          <input type='text' id='address' placeholder='주소를 입력해 주세요.' {...register('address')} />
          <Error>{formState.errors.address?.message?.toString()}</Error>
          <input
            type='text'
            id='address-detail'
            placeholder='상세주소를 입력해 주세요.'
            {...register('address-detail')}
          />
        </div>

        <SubmitBtn type='submit' className='submit'>
          가입하기
        </SubmitBtn>
      </Form>

      {openPostcode && (
        <ModalWrapper onClick={() => setOpenPostcode(false)}>
          <SearchAddress onClose={() => setOpenPostcode(false)} setValue={setValue} />
        </ModalWrapper>
      )}
    </Wrapper>
  );
};

export default CompanySignUp;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 30%;
  height: fit-content;

  .inputBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    position: relative;

    input {
      display: block;
      height: 100;
      border: 1px solid gray;
      border-radius: 8px;
      width: 100%;
      padding: 10px;
      font-size: 15px;
    }
    button {
      position: absolute;
      top: 35px;
      right: 0;
    }
  }
`;
const Error = styled.div`
  font-size: 10px;
  color: var(--color-point);
`;

const SubmitBtn = styled.button`
  height: 40px;
  width: 100px;
  padding: 5px;
  background-color: var(--color-primary);
  border-radius: 5px;
  color: var(--color-light-gray);
`;

const ModalWrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`;
