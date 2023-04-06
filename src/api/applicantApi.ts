import { instance, authInstance } from './instance';

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

export const applicantEmailCheck = async ({ applicantEmail }: { applicantEmail: string }) => {
  try {
    const res = await instance.post(`/applicant/checkemail`, {
      applicantEmail,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
