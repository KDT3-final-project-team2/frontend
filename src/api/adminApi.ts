import axios from 'axios';
import { baseUrl } from './baseUrl';

export const getAdminTermList = async () => {
  try {
    const res = await axios.get('http://localhost:5173/admin/term/list');
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
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
