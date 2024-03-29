import { createSlice } from "@reduxjs/toolkit";
import users from "../utils/users";

const initialState = users;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => { 
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, username, email } = action.payload;
      // console.log(action.payload);
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.username = username;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    }
  }
})

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;