import { instance, authInstance } from './instance';

export const applicantSignUp = async () => {};

// 로그인
export const applicantLogin = async (id: string, pw: string) => {
  const send = {
    applicantEmail: id,
    applicantPassword: pw,
  };
  const res = await instance.post(`/applicant/login`, { params: { ...send } });
  return res.data;
};
