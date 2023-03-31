import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../utils/validationSchema';
import { setCookie } from '../../utils/cookie';
import AlertModal from '../../components/common/AlertModal';
import { useAppDispatch } from '../../hooks/useDispatchHooks';
import { showLoading, hideLoading } from '../../store/loadingSlice';
import { HomeComponent, TextContent } from '../Home';
import { Container, SnsBtn, Error } from '../Login';
import RightBar from '../../components/layouts/RightBar';

const Login = () => {
  const dispatch = useAppDispatch();
  const isLoginPage = useLocation().pathname === '/admin/login';

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
    //const res = await requestLogin(id, pw);
    try {
      dispatch(showLoading());
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
    } finally {
      dispatch(hideLoading());
    }
  };

  return (
    <>
      <HomeComponent isLoginPage={isLoginPage}>
        <img src='/logo.svg' width='230px' height='65px' />
        <img src='/images/loginContent.png' />
        <strong>병원 채용 진행을 한눈에!</strong>
        <TextContent isLoginPage={isLoginPage}>
          <p>
            메디매치를 통해 병원 채용 관리자도! 입사지원자도! <br />
            채용 진행 과정을 한눈에 한번에 확인하세요
          </p>
        </TextContent>
        <RightBar>
          <Container>
            <h3>관리자 로그인</h3>
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
            </form>
          </Container>
        </RightBar>
      </HomeComponent>
    </>
  );
};

export default Login;
