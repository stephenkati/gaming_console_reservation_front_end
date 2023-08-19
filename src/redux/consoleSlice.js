import { createSlice } from '@reduxjs/toolkit';

const consoleSlice = createSlice({
  name: 'consoles',
  initialState: [],
  reducers: {
    addConsole: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addConsole } = consoleSlice.actions;
export default consoleSlice.reducer;
