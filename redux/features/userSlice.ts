import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as states from "@/services/states";
import UserService from "@/services/userServices";

interface userType {
  data: any;
  status: string;
}
const initialState: userType = {
  data: [],
  status: states.BASE,
};

export const completeUserProfile = createAsyncThunk(
  "completeUserInfo/post",
  async (formData: any) => {
    try {
      return await UserService.completeProfile(formData);
    } catch (err: any) {
      throw err;
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    addUserInfo: (state, action) => {
      const newInfo = [...state.data];
      state.data = newInfo.unshift(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(completeUserProfile.pending, (state) => {
      state.status = states.FETCHING;
    });
    builder.addCase(completeUserProfile.fulfilled, (state, action) => {
        const { user } = action.payload.data;

        state.data = user || [];
        state.status = states.FETCHED;
    });
    builder.addCase(completeUserProfile.rejected, (state) => {
      state.status = states.ERROR;
    });
  },
});

export const { addUserInfo } = userSlice.actions;
export default userSlice.reducer;