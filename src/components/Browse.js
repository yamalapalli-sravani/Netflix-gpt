import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../redux/MovieSlice";
import FirstContainer from "./FirstContainer";
import SecondConatiner from "./SecondConatiner";
import { useApiHook } from "../hooks/useApiHook";
import GPTSearch from "./GptSearch";

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
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <div>
        <Header />
        {showGptSearch ? (
          <GPTSearch />
        ) : (
          <>
            <FirstContainer />
            <SecondConatiner />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
