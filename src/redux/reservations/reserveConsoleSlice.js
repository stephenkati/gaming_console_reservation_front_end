import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken } from "../../utils/localStorage";
import customApi from "../../utils/axios";

const token = getToken();

const headers = {
  'Content-Type': 'application/json',
  'Authorization': token
};

const createReservation = createAsyncThunk(
  "reserveConsole/createReservation",
  async (reservation, thunkAPI) => {
    try {
      const response = await customApi.post(
        "/api/v1/reservations",
        { headers },
        { reservation: reservation },
      );

      const data = await response.data;
      console.log(data)

      if (response.status === 200) {
        return { reservation: data };
      }
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 422)
      ) {
        return thunkAPI.rejectWithValue(error.response.data.errors[0]);
      }
      return thunkAPI.rejectWithValue(
        error.response?.data.errors || "Unknown error"
      );
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
  reserved: false,
  reservation: null
};

const reserveConsoleSlice = createSlice({
  name: "reserveConsole",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reserved = true;
        state.reservation = action.payload.reservation;
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.isLoading = false;
        state.reserved = false;
        state.error = action.payload;
      });
  }
});

export { createReservation };
export default reserveConsoleSlice.reducer;
