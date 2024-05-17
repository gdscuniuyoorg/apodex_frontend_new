import { configureStore } from "@reduxjs/toolkit";
import authSReducer from "./features/authSlice";
import userReducer from "./features/userSlice";
import talentReducer from "./features/talentSlice";
import challengeSlice from "./features/challengeSlice";
import profileSlice from "./features/profileSlice";
import { loadAuthState } from "@/shared/rehydrateAuth";

const preloadedState = loadAuthState();

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: {
    auth: authSReducer,
    user: userReducer,
    talent: talentReducer,
    challenge: challengeSlice,
    profile: profileSlice,
  },
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
