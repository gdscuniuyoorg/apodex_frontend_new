// slices/counterSlice.js
import AuthService, {
  _clearToken,
  _clearUserData,
  _saveToken,
} from "@/services/authServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as states from "../../services/states";

export interface User {
  _id: string;
  name: string;
  email: string;
  isEmailConfirmed: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  apodexImgUrl: string;
  bio: string;
  company: string;
  coverPhotoUrl: string;
  currentRole: string;
  dateOfBirth: string;
  firstName: string;
  displayPhoto: string;
  lastName: string;
  linkedInUrl: string;
  portfolioUrl: string;
  techInterests: string[];
  twitterUrl: string;
  id: string;
  hobbies: string[];
  skills: string[];
  location: string;
  workExperience: string[];
  education: string[];
  language: string[];
}

interface authType {
  user: User | null;
  isAuth: boolean;
  status: string;
}
const initialState: authType = {
  status: states.BASE,
  isAuth: false,
  user: null,
};

export const login = createAsyncThunk(
  "dsh/login",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(data);
      console.log(response);
      _saveToken(response.token);
      return response.user;
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        throw rejectWithValue(err.response.data.message);
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
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = action.payload.isAuth;
    },
    logout: (state) => {
      _clearUserData();
      _clearToken();
      state.user = null;
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = states.FETCHING;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      console.log(state.user);
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

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
