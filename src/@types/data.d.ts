interface IApplicantSignUpData {
  applicantEmail: string;
  applicantPassword: string;
  confirmPassword: string;
  applicantName: string;
  applicantGender: string;
  applicantSector: string;
  applicantEducation: string;
  applicantWorkExperience: string;
  applicantBirthDate: string;
  applicantContact: string;
}

interface ICompanySignUpData {
  companyName: string;
  companyRepresentative: string;
  companyRegNum: string;
  companyEmail: string;
  companyPassword: strings;
  confirmPassword: string;
  companyContact: string;
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

interface applicantUserInfo {
  applicantId?: string;
  applicantEmail?: string;
  applicantName?: string;
  applicantBirthDate?: string;
  applicantGender?: string;
  applicantContact?: string;
  applicantEducation?: string;
  applicantWorkExperience?: string;
  applicantSector?: string;
  applicant_file_path?: string;
}

interface CompanyUserInfo {
  ceoName?: string;
  companyAddr?: string;
  companyId?: string;
  companyNm?: string;
  contact?: string;
  email?: string;
  regNum?: string;
  url?: string;
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

type mailTypeCase = '기본' | '서류합격' | '서류불합격' | '면접합격' | '면접불합격';

interface companySignUpData {
  companyName: string;
  companyEmail: string;
  companyAddress: string;
  companyContact: string;
  companyPassword: string;
  companyRegNum: string;
  companyRepresentative: string;
  companyUrl: string | undefined;
}

interface applicantSignUpData {
  applicantEmail: string;
  applicantPassword: string;
  applicantName: string;
  applicantBirthDate: string;
  applicantGender: string;
  applicantContact: string;
  applicantEducation: string;
  applicantWorkExperience: string;
  applicantSector: string;
}

interface adminTermSingleData {
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

interface CompanyMemberData {
  address: string;
  companyId: string | number;
  companyName: string;
  companyType: string;
  contact: string;
  email: string;
  regNum: string;
  representativeName: string;
}

interface ApplicantMemberData {
  applicantId: number | string;
  birthDate: string;
  contact: string;
  education: string;
  email: string;
  name: string;
  sector: string;
  workExperience: string;
}

interface MyApplicationData {
  applicationId: number;
  companyName: string;
  jobpostTitle: string;
  jobpostId: number;
  applicationStatusType: string;
  applicationInterviewTime: any;
  applicationApplyDate: string;
  applicationFilepath: string;
}

interface PostCalendarData {
  calendarTitle: string;
  calendarContent: string;
  calendarDate: string;
}

interface GetCalendarData {
  calendarId: number;
  calendarTitle: string;
  calendarContent: string;
  calendarDate: string;
}

interface ApplicationData {
  applicantId: number;
  name: string;
  email: string;
  birth: string;
  gender: string;
  contact: string;
  filePath: string;
  education: string;
  workExperience: string;
  sector: string;
  jobpostId: number;
  jobpostStatus: string;
  jobpostTitle: string;
  jobpostDueDate: string;
  memo: any;
  applicationStatus: string;
  applyDate: string;
  interviewDate: any;
  applicationId: number;
}

interface ApplicationEditData {
  applicationId: number;
  status?: string | null;
  interviewDate?: string | null;
  passDate?: string | null;
  memo?: string | null;
}

interface JobPostsSearchData {
  jobpostId: number;
  jobpostTitle: string;
  jobpostSector: string;
  jobpostEducation: string;
  jobpostWorkExperience: string;
  jobpostRecruitNum: number;
  jobpostDueDate: string;
  jobpostStatus: string;
  jobpostFilePath: string;
  companyName: string;
}

interface ApplicantSettingData {
  applicantName: string;
  applicantBirthDate: string;
  applicantGender: string;
  applicantSector: string;
  applicantEducation: string;
  applicantWorkExperience: string;
  applicantContact: string;
  applicantPassword: string;
}

interface companySettingData {
  companyName: string;
  companyContact: string;
  companyRegNum: string;
  companyAddress: string;
  companyRepresentative: string;
  zoneCode?: string;
  address?: string;
  companyUrl?: string | undefined;
}

interface AdminStaticsData {
  개인회원당해인원: number;
  기업회원당해인원: number;
  '12월가입인원': number;
  '5월가입인원': number;
  개인회원Total인원: number;
  개인회원당일인원: number;
  '8월가입인원': number;
  '3월가입인원': number;
  '9월가입인원': number;
  '1월가입인원': number;
  '11월가입인원': number;
  MEDICAL_TECHNICIAN: number;
  기업회원당일인원: number;
  개인회원당월인원: number;
  '6월가입인원': number;
  기업회원Total인원: number;
  '7월가입인원': number;
  '4월가입인원': number;
  '10월가입인원': number;
  기업회원당월인원: number;
  DOCTOR: number;
  NURSE_AIDE: number;
  '2월가입인원': number;
  NURSE: number;
  MEDICAL_RECORDS_PROFESSIONAL: number;
}

interface JobPostsListsData {
  pages: Page[];
  pageParams: number | undefined[];
}

interface Page {
  content: Content[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort2;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

interface Content {
  jobpostId: number;
  jobpostTitle: string;
  jobpostSector: string;
  jobpostEducation: string;
  jobpostWorkExperience: string;
  jobpostRecruitNum: number;
  jobpostDueDate: string;
  jobpostStatus: string;
  jobpostFilePath: string;
  companyName: string;
  companyAddress: string;
}

interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

interface Sort2 {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

interface IJobPostSingleData {
  stateCode: number;
  success: boolean;
  message: string;
  data: {
    postId: number;
    title: string;
    sector: string;
    education: string;
    workExperience: string;
    companyNm: string;
    companyTel: string;
    startDate: string;
    dueDate: string;
    createDate: any;
    editDate: any;
    maxApplicants: number;
    filePath: string;
    status: string;
  };
}

interface SigleData {
  postId: number;
  title: string;
  sector: string;
  education: string;
  workExperience: string;
  companyNm: string;
  companyTel: string;
  startDate: string;
  dueDate: string;
  createDate: any;
  editDate: any;
  maxApplicants: number;
  filePath: string;
  status: string;
}
