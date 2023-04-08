import axios from 'axios';
import { instance, authInstance } from './instance';

export const getTerms = async () => {
  try {
    const res = await instance.get(`/terms/1`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 로그인
export const adminLogin = async (formData: FormData) => {
  const res = await instance.post('/admin/login', formData);
  return res.data;
};

// 로그아웃
export const userLogout = async () => {
  const res = await authInstance.post('/logout');
  return res.data;
};

// 캘린더 등록
export const postSchedule = async (date: any) => {
  const res = await axios.post('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', date, {
    headers: {
      'content-type': 'application/json',
      apikey: 'FcKdtJs202209',
      username: 'KDT3_YeJiIm',
    },
  });
  return res.data;
};

// 캘린더 목록 조회
export const getSchedule = async () => {
  const res = await axios.get('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    headers: {
      'content-type': 'application/json',
      apikey: 'FcKdtJs202209',
      username: 'KDT3_YeJiIm',
    },
  });
  return res.data;
};

// 캘린더 수정
export const editSchedule = async ({ todoId, schedule }: any) => {
  const res = await axios.put(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoId}`, schedule, {
    headers: {
      'content-type': 'application/json',
      apikey: 'FcKdtJs202209',
      username: 'KDT3_YeJiIm',
    },
  });
  return res.data;
};

// 캘린더 삭제
export const deleteSchedule = async (todoId: string) => {
  const res = await axios.delete(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoId}`, {
    headers: {
      'content-type': 'application/json',
      apikey: 'FcKdtJs202209',
      username: 'KDT3_YeJiIm',
    },
  });
  return res.data;
};
