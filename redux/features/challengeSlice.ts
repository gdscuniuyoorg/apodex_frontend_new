import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as states from "@/services/states";
import ChallengeService from "@/services/challengeService";

interface challengeType {
  data: any;
  status: string;
}
const initialState: challengeType = {
  data: [],
  status: states.BASE,
};

export const joinAChallenge = createAsyncThunk(
  "join/challenge",
  async (formData: any) => {
    try {
      return await ChallengeService.joinAChallenge(formData);
    } catch (err: any) {
      throw err;
    }
  }
);

export const createAChallenge = createAsyncThunk(
  "create/challenge",
  async (formData: any) => {
    try {
      return await ChallengeService.createAChallenge(formData);
    } catch (err: any) {
      throw err;
    }
  }
);

const challengeSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    addChallengeInfo: (state, action) => {
      const newInfo = [...state.data];
      state.data = newInfo.unshift(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(joinAChallenge.pending, (state) => {
      state.status = states.FETCHING;
    });
    builder.addCase(joinAChallenge.fulfilled, (state, action) => {
      const { user } = action.payload.data;

      state.data = user || [];
      state.status = states.FETCHED;
    });
    builder.addCase(joinAChallenge.rejected, (state) => {
      state.status = states.ERROR;
    });

    builder.addCase(createAChallenge.pending, (state) => {
        state.status = states.FETCHING;
      });
      builder.addCase(createAChallenge.fulfilled, (state, action) => {
        const { challenge } = action.payload.data;
  
        state.data = challenge || [];
        state.status = states.FETCHED;
      });
      builder.addCase(createAChallenge.rejected, (state) => {
        state.status = states.ERROR;
      });
  },
});

export const { addChallengeInfo } = challengeSlice.actions;
export default challengeSlice.reducer;
