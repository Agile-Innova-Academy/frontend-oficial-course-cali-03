import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  id: 0,
  avatar: ''
}

export const userReducer = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    getUser: (state, action) => {
      const { id, email, first_name, last_name, avatar } = action.payload;
      state.first_name = first_name;
      state.last_name = last_name;
      state.email = email;
      state.id = id;
      state.avatar = avatar;

      // state = action.payload;
    },
    updateAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    updateUser: (state, action) => {
      state = action.payload;
    }
  }
})

export const { getUser, updateAvatar, updateUser } = userReducer.actions;
export default userReducer.reducer;