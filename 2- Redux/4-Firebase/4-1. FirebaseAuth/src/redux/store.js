import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
  reducer: combineReducers({
    currentUser: userReducer.reducer,
    users: usersReducer.reducer
  }),
  devTools: process.env.NODE_ENV === "development"
})
