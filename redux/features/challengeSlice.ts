import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as states from "@/services/states";
import ChallengeService from "@/services/challengeService";

export interface IChallenge {
  id: string;
  name: string;
  description: string;
  coverPhoto: string;
  participationType: "Team" | "Individual";
  startTime: Date;
  endTime: Date;
  rules: string;
  minTeamParticipants: number | undefined;
  maxTeamParticipants: number | undefined;
  participants: string[];
}
interface ChallengesType {
  data: IChallenge[];
  singleChallenge: IChallenge | null;
  status: string;
}

const initialState: ChallengesType = {
  data: [],
  singleChallenge: null,
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

export const getAllChallenges = createAsyncThunk("get/challenges", async () => {
  try {
    return await ChallengeService.getChallenges();
  } catch (err: any) {
    throw err;
  }
});

export const getChallenge = createAsyncThunk(
  "get/challenge",
  async (id: string) => {
    try {
      return await ChallengeService.getChallenge(id);
    } catch (err: any) {
      throw err;
    }
  }
);

const challengeSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    // addChallengeInfo: (state, action) => {
    //   const newInfo = [...state.data];
    //   state.data = newInfo.unshift(action.payload);
    // },
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

    // get challenges cases
    builder.addCase(getChallenge.pending, (state) => {
      state.status = states.FETCHING;
    });
    builder.addCase(getAllChallenges.pending, (state) => {
      state.status = states.FETCHING;
    });

    builder.addCase(getChallenge.fulfilled, (state, action) => {
      state.singleChallenge = action.payload.data.challenge;
      state.status = states.FETCHED;
    });
    builder.addCase(getAllChallenges.fulfilled, (state, action) => {
      state.data = action.payload.data.challenges;
      state.status = states.FETCHED;
    });

    builder.addCase(getChallenge.rejected, (state) => {
      state.status = states.ERROR;
    });
    builder.addCase(getAllChallenges.rejected, (state) => {
      state.status = states.ERROR;
    });
  },
});

// export const { addChallengeInfo } = challengeSlice.actions;
export default challengeSlice.reducer;
