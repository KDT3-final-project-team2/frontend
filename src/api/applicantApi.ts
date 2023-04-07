import { instance, authInstance } from './instance';

export const applicantSignUp = async () => {};

// 로그인
export const applicantLogin = async (formData: FormData) => {
  const res: any = await instance.post(`/applicant/login`, formData);
  console.log(res);
  return res.data;
};
