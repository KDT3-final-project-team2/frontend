import { instance } from './instance';

export const getTerms = async () => {
  try {
    const res = await instance.get(`/terms/1`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
