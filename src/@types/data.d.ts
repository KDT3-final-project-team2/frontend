interface IApplicantSignUpData {
  email: string;
  password: string;
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
