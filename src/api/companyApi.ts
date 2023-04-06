import axios from 'axios';
import { instance } from './instance';

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
    const res = await axios.get('http://localhost:5173/company/jobposts');
    console.log('res', res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
