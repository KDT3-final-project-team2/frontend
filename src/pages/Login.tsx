import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { setCookie } from './../utils/cookie';
import AlertModal from '../components/common/AlertModal';

interface loginForm {
  id: string;
  pw: string;
}

const Login = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    id: yup
      .string()
      .required('아이디를 입력해주세요.')
      .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, '이메일 형식에 맞지 않습니다.'),
    pw: yup
      .string()
      .required('비밀번호를 입력해주세요')
      .min(8, '비밀번호는 8자리 이상 입력해주세요.')
      .max(15, '비밀번호는 15자리 이하로 입력해주세요.')
      .matches(/^[a-zA-Z0-9]{8,15}$/, '영문, 숫자를 모두 포함해야 합니다.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginForm>({
    resolver: yupResolver(schema),
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

  return (
    <Container>
      <h1>로그인</h1>
      <form
        onSubmit={handleSubmit(data => {
          console.log(data);
          loginSubmit(data.id, data.pw);
        })}
      >
        <input type='text' id='id' placeholder='아이디' {...register('id')} />
        {errors?.id ? <Error>{errors.id?.message}</Error> : null}
        <input type='password' id='pw' placeholder='비밀번호' {...register('pw')} />
        {errors?.pw ? <Error>{errors.pw?.message}</Error> : null}
        <button type='submit'>로그인</button>
      </form>
      <Content>
        <span onClick={() => navigate('/findpassword')}>회원가입</span>
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
