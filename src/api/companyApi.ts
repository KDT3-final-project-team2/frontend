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

// 로그인
export const companyLogin = async (id: string, pw: string) => {
  const send = {
    companyEmail: id,
    companyPassword: pw,
  };
  const res = await instance.post(`/company/login`, { params: { ...send } });
  return res.data;
};
