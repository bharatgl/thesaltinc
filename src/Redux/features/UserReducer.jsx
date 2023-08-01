import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../components/data";

const initialState = {
  userList: JSON.parse(localStorage.getItem('users')) || []
}


const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

    addUser: (state, { payload }) => {
      console.log(payload)
      const newUserList = [...state.userList, payload]
      localStorage.setItem("users", JSON.stringify(newUserList))
      state.userList = newUserList;
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;

      const filteredUsers = state.userList.filter((user) => user.id !== id)

      state.userList = [...filteredUsers, { id, name, email }]


    },
    deleteUser: (state, { payload }) => {

      state.userList = state.userList.filter(({ id }) => id !== payload);
      localStorage.setItem("users", JSON.stringify(state.userList))

    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
