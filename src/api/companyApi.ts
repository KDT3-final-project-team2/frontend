import axios from 'axios';
import { instance, authInstance } from './instance';

export const getApplications = async ({ accessToken, status }: { accessToken: string; status: string }) => {
  try {
    const res = await instance.get(`/company/applications`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        status,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const companySignUp = async ({
  companyName,
  companyEmail,
  companyAddress,
  companyContact,
  companyPassword,
  companyRegNum,
  companyRepresentative,
  companyUrl,
}: companySignUpData) => {
  try {
    const res = await fetch('/data/applications.json');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 로그인
export const companyLogin = async (formData: FormData) => {
  const res: any = await instance.post(`/company/login`, formData);
  return res.data;
};
