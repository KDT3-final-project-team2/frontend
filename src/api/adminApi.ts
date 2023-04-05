import axios from 'axios';
import { instance } from './instance';

export const getAdminTermList = async () => {
  try {
    const res = await axios.get('http://localhost:5173/admin/term/list');
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// type 변경해주기
export const postAdminTerm = async (termData: any) => {
  try {
    const res = await axios.post('http://localhost:5173/admin/term', { termData });
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateAdminTerm = async ({ termId, data }: { termId: number; data: IAdminTermPostData }) => {
  try {
    const res = await axios.put(`http://localhost:5173/admin/term/${termId}`, { data });
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
