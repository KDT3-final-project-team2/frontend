import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './../utils/validationSchema';
import { setCookie } from './../utils/cookie';
import AlertModal from '../components/common/AlertModal';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<string>('지원자');
  const [active, setActive] = useState([true, false]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<loginForm>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const loginSubmit = async (id: string, pw: string) => {
    console.log(id, pw);
    //const res = await requestLogin(id, pw);
    try {
      //AlertModal({
      //  message: '아이디 또는 비밀번호가 일치하지 않습니다.',
      //});
      //const token = res.accessToken;
      //setCookie('accessToken', token);
      //location.pathname = '/';
      AlertModal({
        message: '로그인 성공!',
      });
    } catch (error) {
      AlertModal({
        message: '에러가 발생했습니다. 다시 시도해주세요.',
      });
    }
  };

  const handleApplicant = () => {
    setActive([true, false]);
    setUser('지원자');
    resetField('id');
    resetField('pw');
  };

  const handleCompany = () => {
    setActive([false, true]);
    setUser('기업');
    resetField('id');
    resetField('pw');
  };

  return (
    <Container>
      <h1>로그인</h1>
      <form
        onSubmit={handleSubmit(data => {
          console.log(data);
          loginSubmit(data.id, data.pw);
        })}
      >
        <UserType>
          <span className={active[0] ? 'active' : ''} onClick={handleApplicant}>
            지원자
          </span>
          <span className={active[1] ? 'active' : ''} onClick={handleCompany}>
            기업
          </span>
        </UserType>
        <input type='text' id='id' placeholder='아이디' {...register('id')} />
        {errors?.id ? <Error>{errors.id?.message}</Error> : null}
        <input type='password' id='pw' placeholder='비밀번호' {...register('pw')} />
        {errors?.pw ? <Error>{errors.pw?.message}</Error> : null}
        <button type='submit'>로그인</button>
      </form>
      <Content>
        {user === '지원자' ? (
          <span onClick={() => navigate('/applicant/signup')}>회원가입</span>
        ) : (
          <span onClick={() => navigate('/company/signup')}>회원가입</span>
        )}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  margin: 0 auto;
  form {
    width: 100%;
    padding: 30px 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    input {
      height: 40px;
      padding: 5px 10px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    button {
      margin-top: 10px;
      height: 45px;
      box-sizing: border-box;
      background-color: var(--color-primary);
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      border-radius: 5px;
    }
  }
`;

const UserType = styled.div`
  display: flex;
  margin-bottom: 10px;
  span {
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-light-gray);
    cursor: pointer;
    &.active {
      background: var(--color-primary);
      color: #fff;
    }
  }
`;

const Error = styled.span`
  text-align: left;
  color: #e62135;
  margin-top: 5px;
  padding-left: 3px;
`;

const Content = styled.div`
  display: flex;
  span {
    cursor: pointer;
  }
`;

export default Login;
