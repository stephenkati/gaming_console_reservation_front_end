import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken } from "../../utils/localStorage";
import customApi from "../../utils/axios";

const createReservation = createAsyncThunk(
  "reserveConsole/createReservation",
  async (reservation, thunkAPI) => {
    const token = getToken();
    try {
      const response = await customApi.post(
        "/api/v1/reservations", { reservation: reservation },
        {
          headers: token
        },
      );

      const data = await response.data;
      if (response.status === 201) {
        alert('reservation created')
        return data;
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
    const token = getToken();
    try {
      const response = await customApi.delete(
        `/api/v1/reservations/${reservation_id}`,
        {
          headers: token
        }
      );
      const data = await response.data;
      if (response.status === 200) {
        alert('Reservation deleted')
        return data;
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
  reducers: {
    deleteRes: (state, action) => {
      state.consoles.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReservation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reserved = true;
        state.reservation = action.payload;
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
        state.reservation = action.payload;
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
export const { deleteRes } = reserveConsoleSlice.actions;
