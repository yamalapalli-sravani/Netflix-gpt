import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const FirstContainer = () => {
  const nowplayingmovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );
  if (!nowplayingmovies) return;
  const movie = nowplayingmovies[0];
  const { original_title, overview, id } = movie;
  console.log(movie);
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      {" "}
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default FirstContainer;
