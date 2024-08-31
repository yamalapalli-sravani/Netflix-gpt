import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../redux/UserSlice";
import MovieSlice from "../redux/MovieSlice";

const AppStore = configureStore({
  reducer: {
    user: UserSlice,
    movies: MovieSlice,
  },
});

export default AppStore;
