import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import reservationsReducer from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    reservations: reservationsReducer,
  },
});

export default store;
