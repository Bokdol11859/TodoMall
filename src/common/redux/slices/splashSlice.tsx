import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isInitial: true,
};

const splashSlice = createSlice({
  name: 'splash',
  initialState: initialState,
  reducers: {
    toggleSplash: (state) => {
      state.isInitial = false;
    },
  },
});

export const { toggleSplash } = splashSlice.actions;

export default splashSlice.reducer;
