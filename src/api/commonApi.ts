import AlertModal from '@/components/common/AlertModal';
import { instance, authInstance } from './instance';

export const getTerms = async () => {
  try {
    const res = await instance.get(`/terms/1`);
    console.log(res);
    return res;
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
