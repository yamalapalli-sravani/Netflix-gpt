import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      return {
        ...state,
        nowPlayingMovies: action.payload,
      };
    },
    addTrailerVideo: (state, action) => {
      return {
        ...state,
        trailer: action.payload,
      };
    },
    addPopularMovies: (state, action) => {
      return {
        ...state,
        popularMovies: action.payload,
      };
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } =
  MovieSlice.actions;
export default MovieSlice.reducer;
