import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as states from "@/services/states";
import TalentService from "@/services/talentService";

interface talentType {
  data: any;
  status: string;
}
const initialState: talentType = {
  data: [],
  status: states.BASE,
};

export const getAllTalents = createAsyncThunk(
  "allTalents/get",
  async () => {
    try {
      return await TalentService.getAllTalents();
    } catch (err: any) {
      throw err;
    }
  }
);


const talentSlice = createSlice({
  name: "talent",
  initialState,

  reducers: {
    addTalentInfo: (state, action) => {
      const newInfo = [...state.data];
      state.data = newInfo.unshift(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllTalents.pending, (state) => {
      state.status = states.FETCHING;
    });
    builder.addCase(getAllTalents.fulfilled, (state, action) => {
        const { user } = action.payload.data;

        state.data = user || [];
        state.status = states.FETCHED;
    });
    builder.addCase(getAllTalents.rejected, (state) => {
      state.status = states.ERROR;
    });
  },
});

export const { addTalentInfo } = talentSlice.actions;
export default talentSlice.reducer;