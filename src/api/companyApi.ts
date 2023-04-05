import { instance } from './instance';

export const getApplications = async () => {
  try {
    const res = await instance.get(`/company/applications`);
  } catch (error) {
    console.log(error);
  }
};
