import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as states from "@/services/states";
import UserServices from "@/services/userServices";
import { User } from "./authSlice";

interface profileType {
  data: User | null;
  status: string;
}
const initialState: profileType = {
  data: null,
  status: states.BASE,
};

export const getProfile = createAsyncThunk(
  "profiles/get",
  async (id: string) => {
    try {
      return await UserServices.getProfile(id);
    } catch (err: any) {
      throw err;
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.status = states.FETCHING;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload.data || [];
      state.status = states.FETCHED;
    });
    builder.addCase(getProfile.rejected, (state) => {
      state.status = states.ERROR;
    });
  },
});

export default profileSlice.reducer;
