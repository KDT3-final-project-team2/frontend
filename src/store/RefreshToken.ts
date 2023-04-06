import { createSlice } from '@reduxjs/toolkit';

interface TokenInfo {
  authenticated: boolean;
  RefreshToken: null | any;
  expireTime: null | number;
}

const initialState: TokenInfo = {
  authenticated: false,
  RefreshToken: null,
  expireTime: null,
};

export const TOKEN_TIME_OUT = 600 * 1000;

export const tokenSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    SET_TOKEN: (state, action) => {
      state.authenticated = true;
      state.RefreshToken = action.payload;
      state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
    },
    DELETE_TOKEN: state => {
      state.authenticated = false;
      state.RefreshToken = null;
      state.expireTime = null;
    },
  },
});

export const { SET_TOKEN, DELETE_TOKEN } = tokenSlice.actions;

export default tokenSlice;
