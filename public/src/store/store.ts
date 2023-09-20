import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import navBarReducer from './navBar/navBarSlice';
export const store = configureStore({
  reducer: {
    userReducer,
    navBarReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
