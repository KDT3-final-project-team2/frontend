import { instance } from './instance';

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

export const getMyApplications = async () => {
  // try {
  //   const res = await fetch('/data/myApplications.json');
  //   const data = await res.json();
  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }
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
