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

export const getCompanyJobposts = async () => {
  try {
    const res = await fetch('/data/jobPosting.json');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCompanyJobpostSingle = async (jobpostId: number) => {
  try {
    const res = await fetch(`/data/jobPostingSingle.json`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postJobPosts = async (jobPostData: FormData) => {
  try {
    const res = await instance.post('/company/jobposts', jobPostData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const putJobPosts = async ({ jobPutData, jobpostId }: { jobPutData: FormData; jobpostId: number }) => {
  try {
    const res = await instance.post(`/company/jobposts/${jobpostId}`, jobPutData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteJobPost = async (jobpostId: number) => {
  try {
    const res = await instance.delete(`/company/jobposts/${jobpostId}`);
    console.log('res', res.data);
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

const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaWtla2VAbmF2ZXIuY29tIiwidXNlckVtYWlsIjoibmlrZWtlQG5hdmVyLmNvbSIsInJvbGUiOiJDT01QQU5ZIiwiaWQiOjQsImlzc3VlciI6ImRuZWZpdCIsImlhdCI6MTY4MDk3NTk4OCwiZXhwIjoxNjgwOTc2Mjg4fQ.CPP7nT2J1ewYBkg6TqSX9E23HT_Ya2aqN3pMoUB6d2A`;

// 약관 관련 api
export const getCompanyTermList = async () => {
  try {
    const res = await instance('/company/term/list', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCompanyTermSingle = async (termId: number) => {
  try {
    const res = await instance(`/company/term/${termId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postCompanyTerm = async (termData: IAdminTermPostData) => {
  try {
    const res = await instance.post('/company/term', termData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateCompanyTerm = async ({ termId, termData }: { termId: number; termData: IAdminTermPostData }) => {
  try {
    const res = await instance.put(`/company/term/${termId}`, termData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
