import { createSlice } from '@reduxjs/toolkit';

const consoleSlice = createSlice({
  name: 'consoles',
  initialState: {
    consoles: [],
    message: null,
  },
  reducers: {
    addConsole: (state, action) => {
      state.consoles.push(action.payload);
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { addConsole, setMessage } = consoleSlice.actions;
export default consoleSlice.reducer;
