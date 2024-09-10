import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../redux/UserSlice";
import MovieSlice from "../redux/MovieSlice";
import gptReducer from "../redux/gptSlice";
import configReducer from "../redux/configSlice";

const AppStore = configureStore({
  reducer: {
    user: UserSlice,
    movies: MovieSlice,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default AppStore;
