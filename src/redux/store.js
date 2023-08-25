import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import reservationsReducer from './reservations/reservationsSlice';
import consoleReducer from './consoleSlice';
import reserveConsoleReducer from './reservations/reserveConsoleSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    reservations: reservationsReducer,
    reserveConsole: reserveConsoleReducer,
    consoles: consoleReducer,
  },
});

export default store;
