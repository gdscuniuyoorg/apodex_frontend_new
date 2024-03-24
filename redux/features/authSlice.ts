// slices/counterSlice.js
import AuthService from "@/services/authServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as states from "../../services/states";

interface authType {
  user:
    | {
        email: string;
        full_name: string;
      }
    | {};
  isAuth: boolean;
  status: string;
}
const initialState: authType = {
  status: states.BASE,
  isAuth: false,
  user: {},
};

export const login = createAsyncThunk(
  "dsh/login",
  async (data: any, { rejectWithValue }) => {
    try {
      return await AuthService.login(data);
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        console.log(err.response.data.message);
        return rejectWithValue(err.response.data.message);
      }
      throw err;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout: (state) => {
      state.user = {};
      state.isAuth = false;
    },
  },

  extraReducers: (builder) => {
    // extraReducers for login
    builder.addCase(login.pending, (state) => {
      state.status = states.FETCHING;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { user } = action.payload;
      state.user = user;
      state.isAuth = true;
      state.status = states.FETCHED;
    });
    builder.addCase(login.rejected, (state) => {
      state.status = states.ERROR;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
