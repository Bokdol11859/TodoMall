import { configureStore } from '@reduxjs/toolkit';
import agreementSlice from './slices/agreementSlice';
import splashSlice from './slices/splashSlice';

export const store = configureStore({
  reducer: {
    agreement: agreementSlice,
    splash: splashSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
