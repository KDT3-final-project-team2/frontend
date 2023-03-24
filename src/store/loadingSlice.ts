import { createSlice } from '@reduxjs/toolkit';

interface UserInfoState {
  isLoading: boolean;
}

const initialState: UserInfoState = {
  isLoading: false,
};

let loading = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = false;
    },
  },
});

export let { showLoading, hideLoading } = loading.actions;
export default loading;
