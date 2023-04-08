import axios from 'axios';
import { authInstance, instance } from './instance';

const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJ1c2VyRW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJyb2xlIjoiQURNSU4iLCJpZCI6MSwiaXNzdWVyIjoiZG5lZml0IiwiaWF0IjoxNjgwOTc1OTAzLCJleHAiOjE2ODA5NzYyMDN9.x0wA8Cqi8epzyJDlQ0NNjzAbrumRQyh7T8Zp8PL0Gvc`;

export const getAdminTermList = async () => {
  try {
    const res = await instance('/admin/term/list', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAdminTermSingle = async (termId: number) => {
  try {
    const res = await instance(`/admin/term/${termId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postAdminTerm = async (termData: IAdminTermPostData) => {
  try {
    const res = await instance.post('/admin/term', termData, {
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

export const updateAdminTerm = async ({ termId, termData }: { termId: number; termData: IAdminTermPostData }) => {
  try {
    const res = await instance.put(`/admin/term/${termId}`, termData, {
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

// 병원회원 목록 조회하기
export const getCompanyMembers = async () => {
  try {
    const res = await authInstance.get(`/admin/companies`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

// 지원자회원 목록 조회하기
export const getApplicantMembers = async () => {
  try {
    const res = await authInstance.get(`/admin/applicants`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
