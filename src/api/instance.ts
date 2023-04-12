import { AuthVerify, newAccessToken } from '@/utils/jwtCheck';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { getCookie } from '../utils/cookie';

axios.defaults.withCredentials = true;
const accessToken = getCookie('accessToken');
const refreshToken = getCookie('refreshToken');

export const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { 'Content-type': 'application/json' },
});

export const authInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // timeout: 8000,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    Refresh: `Bearer ${refreshToken}`,
  },
});

authInstance.interceptors.request.use(
  async config => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

// const onResponse = async (res: AxiosResponse) => {
//   //const newAccess = res;
//   //console.log(newAccess);
//   console.log(res.data.errorCode);

//   if (AuthVerify() === 'Access Token Expired') {
//     console.log(res.data.stateCode);
//     const newAccess = res.data.data;
//     console.log(newAccess);
//     newAccessToken(newAccess);
//     res.config.headers = {
//       Authorization: `Bearer ${newAccess}`,
//     };
//     return await axios(res.config);
//   } else return res;
// };
const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.log('get response', response);
  return response;
};
// const onRejected = (error: Error) => {
//   return Promise.reject(error);
// };
const onErrorResponse = async (err: AxiosError | Error): Promise<AxiosError> => {
  const _err = err as unknown as AxiosError; // err 객체의 타입은 unknown이므로 타입 단언
  const { response } = _err; // err 객체에서 response 를 구조 분해 할당
  const originalConfig: any = _err?.config; // 기존의 요청 정보를 저장
  console.log(response);

  if (response && response.data === -408) {
    if (!!refreshToken === null) {
      // refresh token이 쿠키에서 삭제 또는 만료 되었을 경우
      console.log('리프레시 토큰 쿠키 삭제 또는 만료');
      location.pathname = '/';
      // 만료 처리
    } else {
      try {
        // 만료된 accessToken과 refreshToken을 이용해 리프레시api에 갱신 요청
        // const data = await axios.post(
        //   `/refresh`,
        //   {}, // 백엔드에서 빈 객체 body를 받을 수 있도록 수정 요청
        //   { headers: { Refresh: `Bearer ${refreshToken}`, Authorization: `Bearer ${accessToken}` } },
        // );
        // if (data) {
        //   // 응답값이 있을 경우 새로 발급 받은 토큰을 저장한다.
        //   await setCookie('accessToken', accessToken); // 토큰을 쿠키에 저장 비동기 함수
        //   return await instance.request(originalConfig);
        // }
      } catch (err) {
        // 리프레시 토큰 만료. 로그아웃 처리
        const _err = err as unknown as AxiosError;
        console.log(_err?.config?.data);
      }
    }
  }
  return Promise.reject(err);
};
authInstance.interceptors.response.use(onResponse, onErrorResponse);
