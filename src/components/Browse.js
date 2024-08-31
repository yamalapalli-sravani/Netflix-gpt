import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../redux/MovieSlice";
import FirstContainer from "./FirstContainer";
import SecondConatiner from "./SecondConatiner";
import { useApiHook } from "../hooks/useApiHook";

const Browse = () => {
  const { data } = useApiHook({
    url: "https://api.themoviedb.org/3/movie/now_playing?page=1",
    method: "GET",
    dispatchAction: addNowPlayingMovies,
  });
  useApiHook({
    url: "https://api.themoviedb.org/3/movie/popular?page=1",
    method: "GET",
    dispatchAction: addPopularMovies,
  });
  return (
    <div>
      <Header />
      <FirstContainer />
      <SecondConatiner />
    </div>
  );
};

export default Browse;
