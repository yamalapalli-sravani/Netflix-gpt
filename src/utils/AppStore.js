import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../redux/UserSlice";

const AppStore = configureStore({
  reducer: {
    user: UserSlice,
  },
});

export default AppStore;
