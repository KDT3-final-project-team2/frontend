import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, option?: any) => {
  try {
    return cookies.set(name, value, { ...option });
  } catch (err) {
    console.error(err);
  }
};

export const getCookie = (name: string) => {
  try {
    return cookies.get(name);
  } catch (err) {
    console.error(err);
    return '';
  }
};

export const removeCookie = (name: string, option?: any) => {
  try {
    return cookies.remove(name, { ...option });
  } catch (err) {
    console.error(err);
  }
};
