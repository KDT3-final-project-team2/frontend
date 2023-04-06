import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './userSlice';
import loading from './loadingSlice';
import tokenSlice from './RefreshToken';

const persistConfig = {
  key: 'root',
  storage: storage, // 저장 공간
  whitelist: ['user', 'tokenSlice'], // 유지할 값
  blacklist: ['loading'], // 유지하지 않을 값
};

const reducer = combineReducers({
  user: user.reducer,
  loading: loading.reducer,
  tokenSlice: tokenSlice.reducer,
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
