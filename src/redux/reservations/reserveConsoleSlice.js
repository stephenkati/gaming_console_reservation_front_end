import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken, saveToken } from "../../utils/localStorage";
import customApi from "../../utils/axios";

const token = getToken();

const createReservation = createAsyncThunk(
  "reserveConsole/createReservation",
  async (reservation, thunkAPI) => {
    try {
      const response = await customApi.post(
        "/api/v1/reservations",
        { token },
        { reservation: reservation },
      );
      const headers = response.headers;
      const authorizationToken = headers.get('authorization')
      const newToken = {
        'authorization': authorizationToken,
      }

      const data = await response.data;

      if (response.status === 200) {
        saveToken(newToken)
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

const deleteReservation = createAsyncThunk(
  "reserveConsole/deleteReservation",
  async (reservation_id, thunkAPI) => {
    try {
      const response = await customApi.delete(
        `/api/v1/reservations/${reservation_id}`,
        { token }
      );

      const data = await response.data;
      const headers = response.headers;
      const authorizationToken = headers.get('authorization')
      const newToken = {
        'authorization': authorizationToken,
      }
      if (response.status === 200) {
        saveToken(newToken)
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
      })

      .addCase(deleteReservation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reserved = true;
        state.reservation = action.payload.reservation;
      })
      .addCase(deleteReservation.rejected, (state, action) => {
        state.isLoading = false;
        state.reserved = false;
        state.error = action.payload;
      });
  }
});

export { createReservation, deleteReservation };
export default reserveConsoleSlice.reducer;
