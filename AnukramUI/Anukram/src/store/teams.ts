/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APIPath, ApiUtils } from "../utils/ApiUtils";

export interface ITeam {
  teamid: string;
  teamname: string;
}

interface ITeamsSlice {
  teams: ITeam[];
}

const initialState: ITeamsSlice = {
  teams: [],
};

const teams = createSlice({
  name: "teams",
  initialState,
  reducers: {
    addTeams: (state, action: PayloadAction<ITeam[]>) => {
      return { ...state, teams: [...action.payload] };
    },
  },
});

export const { addTeams } = teams.actions;

export default teams.reducer;

export const selectTeamsList = (state: { teams: ITeamsSlice }) => {
  return state.teams.teams;
};

export const fetchTeamsList = createAsyncThunk<void, void, object>(
  "teams/fetchTeamsList",
  async (_, thunkAPI) => {
    return await ApiUtils.axiosInstance
      .get(APIPath.GET_TEAMS)
      .then(function (response) {
        thunkAPI.dispatch(addTeams(response.data));
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
);
