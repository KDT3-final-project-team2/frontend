import axios, { AxiosError } from 'axios';
import { instance, authInstance } from './instance';
import AlertModal from '@/components/common/AlertModal';

// 지원현황(지원자들) 가져오기
export const getApplications = async () => {
  try {
    const res = await authInstance.get(`/company/applications`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

// 기업 회원가입
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
    const res = await authInstance('/company/jobposts');
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCompanyJobpostSingle = async (jobpostId: number) => {
  try {
    const res = await authInstance(`/company/jobposts/${jobpostId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 채용공고 파일 가져오기
export const getCompanyJobPostFile = async (jobpostId: number) => {
  try {
    const res = await authInstance(`/company/file/${jobpostId}`);
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postJobPosts = async (jobPostData: FormData) => {
  try {
    const res = await authInstance.post('/company/jobposts', jobPostData, {
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
    const res = await authInstance.put(`/company/jobposts/${jobpostId}`, jobPutData);
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteJobPost = async (jobpostId: number) => {
  try {
    const res = await authInstance.delete(`/company/jobposts/${jobpostId}`);
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

// 유저 정보
export const companyInfo = async () => {
  const res = await authInstance.get('/company/me');
  return res.data.data;
};

// 약관 관련 api
export const getCompanyTermList = async () => {
  try {
    const res = await authInstance('/company/term/list');
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCompanyTermSingle = async (termId: number) => {
  try {
    const res = await authInstance(`/company/term/${termId}`);
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postCompanyTerm = async (termData: IAdminTermPostData) => {
  try {
    const res = await authInstance.post('/company/term', termData);
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateCompanyTerm = async ({ termId, termData }: { termId: number; termData: IAdminTermPostData }) => {
  try {
    const res = await authInstance.put(`/company/term/${termId}`, termData);
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 지원자 상태변경(합/불, 메모)
export const EditApplication = async ({
  applicationId,
  status = null,
  interviewDate = null,
  passDate = null,
  memo = null,
}: ApplicationEditData) => {
  try {
    // console.log(applicationId, status, interviewDate, passDate, memo);
    const res = await authInstance.post(`/company/applications`, {
      applicationId,
      status,
      interviewDate,
      passDate,
      memo,
    });
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

// 메일 전송
export const SendEmailApi = async ({ email, title, content }: { [key: string]: string }) => {
  try {
    console.log(email, title, content);
    const res = await authInstance.post(`/company/result`, {
      email,
      title,
      content,
    });
    if (res.data.stateCode === 200) {
      const message = res.data.message;
      AlertModal({ message });
      return true;
    } else {
      AlertModal({ message: '메일발송에 실패하였습니다. 다시 시도해 주세요.' });
      return false;
    }
  } catch (error) {
    AlertModal({ message: '메일발송에 실패하였습니다. 다시 시도해 주세요.' });
    return false;
  }
};

export const companySetting = async ({
  companyName,
  companyContact,
  companyRegNum,
  companyAddress,
  companyRepresentative,
  companyUrl,
}: companySettingData) => {
  try {
    const res = await authInstance.put(`/company/me`, {
      companyName,
      companyContact,
      companyRegNum,
      companyAddress,
      companyRepresentative,
      companyUrl,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 지원자 조회
export const getApplicants = async () => {
  const res = await authInstance.get('/company/applications');
  return res.data;
};
