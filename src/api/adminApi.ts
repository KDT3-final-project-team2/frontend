import axios from 'axios';
import { authInstance, instance } from './instance';

export const getAdminTermList = async () => {
  try {
    const res = await authInstance('/admin/term/list');
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAdminTermSingle = async (termId: number) => {
  try {
    const res = await authInstance(`/admin/term/${termId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postAdminTerm = async (termData: IAdminTermPostData) => {
  try {
    const res = await authInstance.post('/admin/term', termData);
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateAdminTerm = async ({ termId, termData }: { termId: number; termData: IAdminTermPostData }) => {
  try {
    const res = await authInstance.put(`/admin/term/${termId}`, termData);
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

// 통계 가져오기
export const getStatics = async () => {
  try {
    const res = await authInstance.get(`/admin/statistics`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
