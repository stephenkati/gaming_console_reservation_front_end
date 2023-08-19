import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUserReservations = createAsyncThunk(
  'user/fetchUserReservations',
  async () => {
    try {
      // Fetch user reservations
    } catch (error) {
      // Handle error
    }
  }
);

export { fetchUserReservations };
