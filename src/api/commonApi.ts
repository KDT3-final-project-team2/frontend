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
export const adminLogin = async (id: string, pw: string) => {
  const send = {
    adminEmail: id,
    adminPassword: pw,
  };
  const res = await instance.post(`/admin/login`, { params: { ...send } });
  return res.data;
};
