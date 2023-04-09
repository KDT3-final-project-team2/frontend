import axios from 'axios';
import AlertModal from '@/components/common/AlertModal';
import { instance, authInstance } from './instance';

// 회원가입전 약관 보여주기
export const getTerms = async () => {
  try {
    const res = await instance.get(`/terms/1`);
    return res.data;
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
export const postSchedule = async (date: PostCalendarData) => {
  try {
    const res = await authInstance.post('/calendar', date);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 캘린더 목록 조회
export const getSchedule = async () => {
  try {
    const res = await authInstance.get('/calendar');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 캘린더 수정
export const editSchedule = async ({ todoId, schedule }: any) => {
  try {
    const res = await authInstance.put(`/calendar/${todoId}`, schedule);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 캘린더 삭제
export const deleteSchedule = async (todoId: string) => {
  try {
    const res = await authInstance.delete(`/calendar/${todoId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
