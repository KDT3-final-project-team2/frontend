import axios from 'axios';
import { instance, authInstance } from './instance';

export const getApplications = async () => {
  try {
    const res = await fetch('/data/applications.json');
    const data = await res.json();
    return data;
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
