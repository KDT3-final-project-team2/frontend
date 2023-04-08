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
