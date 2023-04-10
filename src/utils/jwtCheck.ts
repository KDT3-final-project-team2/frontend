import { getCookie, setCookie, removeCookie } from './cookie';
import jwt_decode from 'jwt-decode';

const accessToken = getCookie('accessToken');
const refreshToken = getCookie('refreshToken');

const parseJwt = (token: string | null): any => {
  if (token) {
    return jwt_decode(token);
  }
};

export const AuthVerify = () => {
  const decodedAccess = parseJwt(accessToken);
  const decodedRefresh = parseJwt(refreshToken);

  if (decodedAccess.exp * 1000 < Date.now()) {
    return 'Access Token Expired';
  }

  if (decodedRefresh.exp * 1000 < Date.now()) {
    return 'Refresh Token Expired';
  }

  return true;
};

// 새로운 토큰 갈아끼우기
export const newAccessToken = (token: string) => {
  removeCookie('accessToken');
  setCookie('accessToken', token);
};
