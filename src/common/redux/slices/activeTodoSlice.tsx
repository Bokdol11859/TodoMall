import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productId: '',
  sessionId: '',
  todoId: '',
  title: '',
  isFinished: false,
};

const activeTodoSlice = createSlice({
  name: 'activeTodo',
  initialState: initialState,
  reducers: {
    setActiveTodo: (state, action) => {
      state.productId = action.payload.productId;
      state.sessionId = action.payload.sessionId;
      state.todoId = action.payload.todoId;
      state.title = action.payload.title;
      state.isFinished = action.payload.isFinished;
    },
  },
});

export const { setActiveTodo } = activeTodoSlice.actions;

export default activeTodoSlice.reducer;
