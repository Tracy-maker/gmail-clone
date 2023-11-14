import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
     mail:mailReducer,
     user:userReducer,
  },
});
