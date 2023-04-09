import axios from 'axios';
import { instance, authInstance } from './instance';
import AlertModal from '@/components/common/AlertModal';

export const applicantSignUp = async ({
  applicantEmail,
  applicantPassword,
  applicantName,
  applicantBirthDate,
  applicantGender,
  applicantContact,
  applicantEducation,
  applicantWorkExperience,
  applicantSector,
}: applicantSignUpData) => {
  try {
    const res = await instance.post(`/applicant/signup`, {
      applicantEmail,
      applicantPassword,
      applicantName,
      applicantBirthDate,
      applicantGender,
      applicantContact,
      applicantEducation,
      applicantWorkExperience,
      applicantSector,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// 로그인
export const applicantLogin = async (formData: FormData) => {
  const res: any = await instance.post(`/applicant/login`, formData);
  console.log(res);
  return res.data;
};

// 이메일 중복확인
export const applicantEmailCheck = async ({ applicantEmail }: { applicantEmail: string }) => {
  try {
    const res = await instance.post(`/applicant/checkemail`, {
      applicantEmail,
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

// 이력서 조회
export const getApplicantResume = async () => {
  const res = await authInstance.get('/applicant/resume');
  return res.data;
};

// 유저 정보
export const applicantInfo = async () => {
  const res = await authInstance.get('/applicant/info');
  return res.data.data;
};

// 나의 지원현황(지원자 메인홈)
export const getMyApplications = async () => {
  try {
    const res = await authInstance.get(`/applicant/main`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

// 지원 취소하기
export const cancelApplication = async (jobpostId: number) => {
  try {
    const res = await authInstance.delete(`/applicant/apply`, {
      data: {
        jobpostId,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 공고상세보기
export const getJobpostDetail = async (jobpostId: number) => {
  try {
    const res = await authInstance.get(`/jobposts/posts/${jobpostId}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

interface IJobPostsSearchData {
  keyword: string;
}

const type = '직무';
const keyword = 'DOCTOR';

// 공고검색
export const getJobPostsSearch = async (type: string, keyword: string) => {
  try {
    const res = await axios.get(`/jobposts/search/${type}`, { data: { keyword } });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const data = getJobPostsSearch(type, keyword);
console.log(data);
