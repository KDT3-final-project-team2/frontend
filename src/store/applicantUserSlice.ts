import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: applicantUserInfo = {
  applicantId: '',
  applicantEmail: '',
  applicantName: '',
  applicantBirthDate: '',
  applicantGender: '',
  applicantContact: '',
  applicantEducation: '',
  applicantWorkExperience: '',
  applicantSector: '',
  applicant_file_path: '',
};

let applicantUser = createSlice({
  name: 'applicantUser',
  initialState,
  reducers: {
    applicantUserInfo(state, action: PayloadAction<string | number | any>) {
      state.applicantId = action.payload.applicantId;
      state.applicantEmail = action.payload.applicantEmail;
      state.applicantName = action.payload.applicantName;
      state.applicantBirthDate = action.payload.applicantBirthDate;
      state.applicantGender = action.payload.applicantGender;
      state.applicantContact = action.payload.applicantContact;
      state.applicantEducation = action.payload.applicantEducation;
      state.applicantWorkExperience = action.payload.applicantWorkExperience;
      state.applicantSector = action.payload.applicantSector;
      state.applicant_file_path = action.payload.applicant_file_path;
    },
    applicantUserInit(state) {
      state.applicantId = '';
      state.applicantEmail = '';
      state.applicantName = '';
      state.applicantBirthDate = '';
      state.applicantGender = '';
      state.applicantContact = '';
      state.applicantEducation = '';
      state.applicantWorkExperience = '';
      state.applicantSector = '';
      state.applicant_file_path = '';
    },
  },
});

export const { applicantUserInfo, applicantUserInit } = applicantUser.actions;
export default applicantUser;
