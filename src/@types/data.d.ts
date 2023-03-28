interface IApplicantSignUpData {
  email: string;
  password: string;
  confirmPassword: string;
  lastName: string;
  firstName: string;
  birth: string;
  phoneNumber: string;
}

interface ICompanySignUpData {
  companyName: string;
  representative: string;
  companyNum: string;
  email: string;
  password: strings;
  confirmPassword: string;
  contact: string;
  zoneCode: string;
  address: string;
  'address-detail': string;
}

interface loginForm {
  id: string;
  pw: string;
}

type AlertType = {
  message: string;
  action?: any;
};

type ConfirmType = {
  message: string;
  action?: any;
};

interface UserInfoState {
  email?: string;
  companyName?: string;
  businessNumber?: string;
  name?: string;
  birth?: string;
  call?: string;
  address?: string;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface IuserType {
  userType?: string;
}
