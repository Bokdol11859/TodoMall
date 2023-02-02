import { createSlice } from '@reduxjs/toolkit';
import CATEGORY from '@src/common/constants/Category';

const initialState = {
  category: CATEGORY.CAREER,
};

const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload.category;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
