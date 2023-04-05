import axios from 'axios';
import { baseUrl } from './baseUrl';

export const getTerms = async () => {
  try {
    const res = await axios.get(`${baseUrl}/terms/1`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
