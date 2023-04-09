import AlertModal from '@/components/common/AlertModal';
import { instance, authInstance } from './instance';

// 회원가입전 약관 보여주기
export const getTerms = async () => {
  try {
    const res = await instance.get(`/terms/1`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 로그인
export const adminLogin = async (formData: FormData) => {
  const res = await instance.post('/admin/login', formData);
  return res.data;
};

// 로그아웃
export const userLogout = async () => {
  const res = await authInstance.post('/logout');
  return res.data;
};
