import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://13.124.119.131:3100',
});
