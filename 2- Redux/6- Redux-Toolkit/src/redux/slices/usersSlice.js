import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  users: [],
}

export const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getAllUsers: (state, action) => {
      state.users = action.payload
    }
  }
})

export const { getAllUsers } = usersReducer.actions;
export default usersReducer.reducer;