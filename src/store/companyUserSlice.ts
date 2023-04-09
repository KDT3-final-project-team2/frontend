import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: CompanyUserInfo = {
  ceoName: '',
  companyAddr: '',
  companyId: '',
  companyNm: '',
  contact: '',
  email: '',
  regNum: '',
  url: '',
};

let companyUser = createSlice({
  name: 'companyUser',
  initialState,
  reducers: {
    companyUserInfo(state, action: PayloadAction<string | number | any>) {
      state.ceoName = action.payload.ceoName;
      state.companyAddr = action.payload.companyAddr;
      state.companyId = action.payload.companyId;
      state.companyNm = action.payload.companyNm;
      state.contact = action.payload.contact;
      state.email = action.payload.email;
      state.regNum = action.payload.regNum;
      state.url = action.payload.url;
    },
    companyUserInit(state) {
      state.ceoName = '';
      state.companyAddr = '';
      state.companyId = '';
      state.companyNm = '';
      state.contact = '';
      state.email = '';
      state.regNum = '';
      state.url = '';
    },
  },
});

export const { companyUserInfo, companyUserInit } = companyUser.actions;
export default companyUser;
