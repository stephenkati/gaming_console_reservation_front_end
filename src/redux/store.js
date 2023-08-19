import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import consoleReducer from './consoleSlice';


const store = configureStore({
  reducer: {
    user: userReducer,
    consoles: consoleReducer,
  }
});

export default store;
