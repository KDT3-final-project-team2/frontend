import styled from 'styled-components';
import { Link, useLocation, useOutletContext } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../utils/validationSchema';
import { setCookie } from './../utils/cookie';
import AlertModal from '../components/common/AlertModal';
import { useAppDispatch } from '../hooks/useDispatchHooks';
import { showLoading, hideLoading } from '../store/loadingSlice';
import { applicantLogin } from '@/api/applicantApi';
import { companyLogin } from '@/api/companyApi';

const Login = () => {
  const dispatch = useAppDispatch();
  const locationState = useLocation();
  const userType = useOutletContext<IuserType>().userType ? useOutletContext<IuserType>() : locationState.state;
  console.log(userType.userType);
  console.log(userType);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginForm>({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const loginSubmit = async (id: string, pw: string) => {
    console.log(id, pw);
    const formData = new FormData();
    formData.append('email', id);
    formData.append('password', pw);
    const res = userType.userType === '지원자' ? await applicantLogin(formData) : await companyLogin(formData);
    console.log(res);
    try {
      dispatch(showLoading());
      if (res.stateCode === 401) {
        AlertModal({
          message: `${res.message}`,
        });
      } else {
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;
        setCookie('accessToken', accessToken);
        setCookie('refreshToken', refreshToken);
        console.log(userType.userType, accessToken);
        userType.userType === '지원자' ? (location.pathname = '/applicant') : (location.pathname = '/company');
      }
    } catch (error) {
      AlertModal({
        message: '에러가 발생했습니다. 다시 시도해주세요.',
      });
    } finally {
      dispatch(hideLoading());
    }
  };

  return (
    <Container>
      {userType.userType === '지원자' ? <h3>일반 회원 로그인</h3> : <h3>병원 회원 로그인</h3>}
      <form
        onSubmit={handleSubmit(data => {
          console.log(data);
          loginSubmit(data.id, data.pw);
        })}
      >
        <input type='text' id='id' placeholder='이메일을 입력해주세요.' {...register('id')} />
        {errors?.id ? <Error>{errors.id?.message}</Error> : null}
        <input type='password' id='pw' placeholder='비밀번호를 입력해주세요.' {...register('pw')} />
        {errors?.pw ? <Error>{errors.pw?.message}</Error> : null}
        <button type='submit'>로그인하기</button>
        <SnsBtn>
          <div
            onClick={() =>
              AlertModal({
                message: '준비중입니다.',
              })
            }
          >
            <img src='/google.svg' width='18px' height='18px' />
            Google 로그인
          </div>
          <div
            onClick={() =>
              AlertModal({
                message: '준비중입니다.',
              })
            }
          >
            <img src='/kakao.svg' width='30px' height='30px' />
            카카오 로그인
          </div>
        </SnsBtn>
        <p>
          메디매치가 처음이라면?
          {userType.userType === '지원자' ? (
            <Link to='/applicant/signup'>회원가입</Link>
          ) : (
            <Link to='/company/signup'>회원가입</Link>
          )}
        </p>
      </form>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding-top: 180px;
  h3 {
    color: #000;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 45px;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    input {
      height: 50px;
      padding: 5px 20px;
      box-sizing: border-box;
      border: 1px solid #000;
      border-radius: 50px;
      font-weight: bold;
      :placeholder {
        color: #a7a7a7;
      }
    }
    button {
      height: 50px;
      box-sizing: border-box;
      background-color: var(--color-primary-100);
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      border-radius: 50px;
      position: relative;
    }
    p {
      color: #4b5563;
      margin: 10px 0 5px;
      a {
        color: #4b5563;
        font-weight: bold;
        margin-left: 5px;
      }
    }
  }
`;

export const SnsBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  div {
    height: 50px;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: bold;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #fff;
    border: 1px solid #000;
    cursor: pointer;
    color: #000;
    &:last-child {
      background-color: #ffc847;
      border: none;
      color: #000;
    }
    img {
      left: 20px;
      position: absolute;
    }
  }
`;

export const Error = styled.span`
  text-align: left;
  color: #e62135;
  margin-top: 5px;
  padding-left: 3px;
`;

export default Login;
