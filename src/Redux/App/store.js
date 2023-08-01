import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/UserReducer";

const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});
export default store;
