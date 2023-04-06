import { instance } from './instance';

export const getApplications = async ({ accessToken, status }: { accessToken: string; status: string }) => {
  try {
    const res = await instance.get(`/company/applications`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        status,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const companySignUp = async ({
  companyName,
  companyEmail,
  companyAddress,
  companyContact,
  companyPassword,
  companyRegNum,
  companyRepresentative,
  companyUrl,
}: companySignUpData) => {
  try {
    const res = await instance.post(`/company/signup`, {
      companyName,
      companyEmail,
      companyAddress,
      companyContact,
      companyPassword,
      companyRegNum,
      companyRepresentative,
      companyUrl,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const companyEmailCheck = async ({}) => {};
