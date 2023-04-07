import axios, { AxiosError } from 'axios';
import { instance, authInstance } from './instance';
import AlertModal from '@/components/common/AlertModal';

export const getApplications = async ({ status }: { status: string }) => {
  try {
    const res = await authInstance.get(`/company/applications`, {
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
    const res = await instance.post(`/company/signup`, {
      companyName,
      companyEmail,
      companyAddress,
      companyContact,
      companyPassword,
      companyRegNum,
      companyRepresentative,
      companyUrl,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 로그인
export const companyLogin = async (formData: FormData) => {
  const res: any = await instance.post(`/company/login`, formData);
  return res.data;
};

// 이메일 중복확인
export const companyEmailCheck = async ({ companyEmail }: { companyEmail: string }) => {
  try {
    const res = await instance.post(`/company/checkemail`, {
      companyEmail,
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.message;
      AlertModal({ message });
    } else {
      console.log(error);
    }
  }
};
