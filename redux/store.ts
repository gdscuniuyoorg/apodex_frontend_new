import { configureStore } from "@reduxjs/toolkit";
import authSReducer from "./features/authSlice";
import userReducer from "./features/userSlice";
import talentReducer from "./features/talentSlice"
import challengeSlice from "./features/challengeSlice";

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    auth: authSReducer,
    user: userReducer,
    talent: talentReducer,
    challenge: challengeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
