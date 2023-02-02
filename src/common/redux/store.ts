import { configureStore } from '@reduxjs/toolkit';
import agreementSlice from './slices/agreementSlice';
import categorySlice from './slices/categorySlice';
import splashSlice from './slices/splashSlice';
import userInfoSlice from './slices/userInfoSlice';

export const store = configureStore({
  reducer: {
    agreement: agreementSlice,
    splash: splashSlice,
    userinfo: userInfoSlice,
    category: categorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
