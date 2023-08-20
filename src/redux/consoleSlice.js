import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import customApi from '../utils/axios';

const getConsoles = createAsyncThunk(
  'consoles/getConsoles',
  async (thunkAPI) => {
    try {
      const response = await customApi.get('/api/v1/consoles');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data.errors || 'Unknown error');
    }
  }
);

const consoleSlice = createSlice({
  name: 'consoles',
  initialState: {
    consoles: [],
    message: null,
    error: null,
    isLoading: false,
  },
  reducers: {
    addConsole: (state, action) => {
      state.consoles.push(action.payload);
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConsoles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getConsoles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.consoles = action.payload.data;
      })
      .addCase(getConsoles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addConsole, setMessage } = consoleSlice.actions;
export default consoleSlice.reducer;
export { getConsoles };
