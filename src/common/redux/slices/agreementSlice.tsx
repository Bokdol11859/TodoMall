import { createSlice } from '@reduxjs/toolkit';

export interface IInitialState {
  personal: boolean;
  service: boolean;
}

const initialState: IInitialState = {
  personal: false,
  service: false,
};

const agreementSlice = createSlice({
  name: 'agreement',
  initialState: initialState,
  reducers: {
    togglePersonal: (state) => {
      state.personal = !state.personal;
    },
    toggleService: (state) => {
      state.service = !state.service;
    },
  },
});

export const { togglePersonal, toggleService } = agreementSlice.actions;

export default agreementSlice.reducer;
