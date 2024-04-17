import { configureStore } from "@reduxjs/toolkit";
import authSReducer from "./features/authSlice";
import userReducer from "./features/userSlice"

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    auth: authSReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
