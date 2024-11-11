import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./userDetails";
import teams from "./teams";
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

export const store = configureStore({
  devTools: true,
  reducer: {
    userDetails,
    teams,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default store;
