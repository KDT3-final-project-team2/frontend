import { AuthVerify, newAccessToken } from '@/utils/jwtCheck';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
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
  timeout: 8000,
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

const onResponse = async (res: AxiosResponse | any) => {
  //const newAccess = res;
  //console.log(newAccess);
  console.log(AuthVerify());

  if (AuthVerify() === 'Access Token Expired') {
    console.log(res.data.stateCode);
    const newAccess = res.data.data;
    console.log(newAccess);
    newAccessToken(newAccess);
    res.config.headers = {
      Authorization: `Bearer ${newAccess}`,
    };
    return await axios(res.config);
  } else return res;
};
// const onRejected = (error: Error) => {
//   return Promise.reject(error);
// };
authInstance.interceptors.response.use(onResponse);
