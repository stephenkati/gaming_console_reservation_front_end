import { createAsyncThunk } from '@reduxjs/toolkit';
import customApi from '../../utils/axios';
import { getToken } from '../../utils/localStorage';

const fetchUserReservations = createAsyncThunk(
  'user/fetchUserReservations',
  async (_, thunkAPI) => {
    try {
      const token = getToken();

      if (!token) {
        return thunkAPI.rejectWithValue('No authentication token found');
      }

      const response = await customApi.get('/api/v1/reservations', {
        headers: {
          Authorization: token,
        },
      });

      const reservations = response.data;
      console.log(reservations);
      return reservations;
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 422)
      ) {
        return thunkAPI.rejectWithValue(error.response.data.errors[0]);
      }

      return thunkAPI.rejectWithValue(
        error.response?.data.errors || 'Unknown error'
      );
    }
  }
);

export { fetchUserReservations };
