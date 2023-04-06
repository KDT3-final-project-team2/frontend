interface IApplicantSignUpData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  gender: string;
  sector: string;
  education: string;
  workExperience: string;
  birth: string;
  phoneNumber: string;
}

interface ICompanySignUpData {
  companyName: string;
  representative: string;
  companyNum: string;
  email: string;
  password: strings;
  confirmPassword: string;
  contact: string;
  zoneCode: string;
  address: string;
  companyUrl?: string;
}

interface loginForm {
  id: string;
  pw: string;
}

type AlertType = {
  message: string;
  action?: any;
};

type ConfirmType = {
  message: string;
  action?: any;
};

interface UserInfoState {
  email?: string;
  companyName?: string;
  businessNumber?: string;
  name?: string;
  birth?: string;
  call?: string;
  address?: string;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface IuserType {
  userType?: string;
}

interface IPostingInput {
  title: string;
  sector: string;
  workExperience: string;
  education: string;
  recruitNum: string;
  dueDate: string;
  startDate: string;
  file: File;
}

interface IGetCompanyJobPosts {
  postId: number;
  title: string;
  startDate: string;
  dueDate: string;
  createDate: string;
  editDate: string;
  status: string;
}

interface IScheduleData {
  name: string;
  content: string;
}

interface Props {
  fileUrl: string | undefined;
}

interface adminTermData {
  termId: number;
  type: string;
  version: string;
  createDate: string;
  editDate: string;
  status: string;
  content: string;
}

interface IAdminTermPostData {
  type: string;
  version: string;
  status: string;
  content: string;
}
interface CompanyMainData {
  applicantId: string;
  applicantName: string;
  applicantEmail: string;
  applicantBirthdate: string;
  applicantGender: string;
  applicantContact: string;
  applicantFilePath: string;
  applicantEducation: string;
  applicantWorkExperience: string;
  applicantSector: string;
  jobpostID: string;
  jobpostTitle: string;
  applicationId: string;
  applicationStatusType: string;
  applyDate: string;
  interviewDate: string;
  memo: string;
}

interface mailTypeCase {
  기본: 기본;
  서류합격: 서류합격;
  서류불합격: 서류불합격;
  면접합격: 면접합격;
  면접불합격: 면접불합격;
}
