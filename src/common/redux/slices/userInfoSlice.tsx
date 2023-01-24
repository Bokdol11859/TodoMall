import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userid: '',
  email: '',
};

const userInfoSlice = createSlice({
  name: 'userinfo',
  initialState: initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userid = action.payload.userid;
      state.email = action.payload.email;
    },
  },
});

export const { setUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
