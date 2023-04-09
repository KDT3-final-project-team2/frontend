import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import applicantUser from './applicantUserSlice';
import companyUser from './companyUserSlice';
import loading from './loadingSlice';

const persistConfig = {
  key: 'root',
  storage: storage, // 저장 공간
  whitelist: ['applicantUser', 'companyUser'], // 유지할 값
  blacklist: ['loading'], // 유지하지 않을 값
};

const reducer = combineReducers({
  applicantUser: applicantUser.reducer,
  companyUser: companyUser.reducer,
  loading: loading.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  // state 등록해야 사용 가능
  reducer: persistedReducer,
  middleware: defaultMiddleware =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
