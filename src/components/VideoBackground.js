import React from "react";
import { useApiHook } from "../hooks/useApiHook";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../redux/MovieSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerID = useSelector((state) => state.movies.trailer);
  const data = useApiHook({
    url: `https://api.themoviedb.org/3/movie/${movieId}/videos`,
    method: "GET",
  });
  console.log(data?.data);
  if (data?.data) {
    const videotrailer =
      data && data.data.filter((video) => video.type === "Trailer");
    const trailerId = videotrailer?.length ? videotrailer[0] : data?.data[0];
    dispatch(addTrailerVideo(trailerId));
    console.log(
      "https://www.youtube.com/embed/" + trailerID?.key + "?&autoplay=1&mute=1",
      "pooo"
    );
  }
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerID?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
