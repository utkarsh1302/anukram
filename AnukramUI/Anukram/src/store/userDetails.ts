import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUserDetailsSlice {
  email: string;
  firstName: string;
  lastName: string;
  userId: string;
}

const initialState: IUserDetailsSlice = {
  email: "",
  firstName: "",
  lastName: "",
  userId: "",
};

const userDetails = createSlice({
  name: "userDetails",
  initialState: initialState,
  reducers: {
    addUserDetails: (_state, action: PayloadAction<IUserDetailsSlice>) => {
      return { ...action.payload };
    },
  },
});

export const { addUserDetails } = userDetails.actions;

export const selectUserDetails = (state: {
  userDetails: IUserDetailsSlice;
}) => {
  return state.userDetails;
};

export const getUserId = (state: { userDetails: IUserDetailsSlice }) => {
  return state.userDetails.userId;
};

export default userDetails.reducer;
