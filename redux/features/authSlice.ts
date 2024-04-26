// slices/counterSlice.js
import AuthService, { _saveToken } from "@/services/authServices";
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

export const loginWithGoogle = createAsyncThunk(
  "dsh/loginWithGoogle",
  async () => {
    try {
      return await AuthService.loginWithGoogle();
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        console.log(err.response.data.message);

        return err.response.data.message;
      }
      throw err;
    }
  }
);

export const signUp = createAsyncThunk(
  "dsh/signup",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await AuthService.signUp(data);
      if (response.status === "success") {
        _saveToken(response.token);
        return response.user;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
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

    builder.addCase(signUp.pending, (state) => {
      state.status = states.FETCHING;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.status = states.FETCHED;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.status = states.ERROR;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
