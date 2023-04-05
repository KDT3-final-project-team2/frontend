import axios from 'axios';
import { instance } from './instance';

export const getApplications = async () => {
  try {
    const res = await fetch('http://127.0.0.1:5173/data/applications.json');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
