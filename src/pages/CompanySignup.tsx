import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
// import AddressForm from '../components/AddressForm';
import DaumPostcode from 'react-daum-postcode';

const CompanySignup = () => {
  const [openPostcode, setOpenPostcode] = useState(false);

  const schema = yup.object().shape({
    companyName: yup.string().required('firstname is required.'),
    representative: yup.string().required('lastname is required'),
    companyNum: yup.string().email().required('email is required'),
    email: yup.string().min(8).max(15).required('password must be 8 - 15 characters.'),
    password: yup.string().min(8).max(15).required('password must be 8 - 15 characters.'),
    confirmPassword: yup.string().min(8).max(15).required('password must be 8 - 15 characters.'),
    contact: yup.string().min(8).max(15).required('password must be 8 - 15 characters.'),
    locationCode: yup.string().min(8).max(15).required('password must be 8 - 15 characters.'),
    address: yup.string().min(8).max(15).required('password must be 8 - 15 characters.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onsubmit = () => {};

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onsubmit)}>
        <div className='inputBox'>
          기업명
          <input type='text' id='companyName' name='companyName' />
        </div>
        <div className='inputBox'>
          대표자명
          <input type='text' id='representative' name='representative' />
        </div>
        <div className='inputBox'>
          사업자등록번호
          <input type='number' id='companyNum' name='companyNum' />
        </div>
        <div className='inputBox'>
          이메일
          <input type='email' id='email' name='email' />
        </div>
        <div className='inputBox'>
          비밀번호
          <input type='password' id='password' name='password' />
        </div>
        <div className='inputBox'>
          비밀번호 확인
          <input type='password' id='confirmPassword' name='confirmPassword' />
        </div>
        <div className='inputBox'>
          연락처
          <input type='number' id='contact' name='contact' />
        </div>
        <div className='inputBox'>
          주소
          <input type='number' id='locationCode' name='locationCode' />
          <button onClick={() => setOpenPostcode(true)}>주소 찾기</button>
          <input type='text' id='address' name='address' />
          <input type='text' id='address-detail' name='address-detail' />
        </div>
        {openPostcode && (
          <div>
            <DaumPostcode className='modal' autoClose />
          </div>
        )}
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
  position: relative;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .inputBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 300px;
    height: 30px;
    position: relative;

    input {
      display: block;
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

  .modal {
    background: rgba(0, 0, 0, 0.25);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;

export default CompanySignup;
