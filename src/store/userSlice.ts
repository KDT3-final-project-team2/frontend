import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: UserInfoState = {
  email: '',
  companyName: '',
  businessNumber: '',
  name: '',
  birth: '',
  call: '',
  address: '',
};

let user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfo(state, action: PayloadAction<string | any>) {
      state.email = action.payload.email;
      state.companyName = action.payload.companyName;
      state.businessNumber = action.payload.businessNumber;
      state.name = action.payload.name;
      state.birth = action.payload.birth;
      state.call = action.payload.call;
      state.address = action.payload.address;
    },
    userInit(state) {
      state.email = '';
      state.companyName = '';
      state.businessNumber = '';
      state.name = '';
      state.birth = '';
      state.call = '';
      state.address = '';
    },
  },
});

export const { userInfo, userInit } = user.actions;
export default user;
