import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import reservationsReducer from './reservations/reservationsSlice';
import consoleReducer from './consoleSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    reservations: reservationsReducer,
    consoles: consoleReducer,
  },
});

export default store;
