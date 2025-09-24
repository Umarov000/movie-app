import { memo } from "react";
import { useParams } from "react-router-dom";
import { useMovie } from "../../../entities/movie";
import { MovieInfo } from "../../../entities/movie/ui/detail/MovieInfo";

export const MovieDetail = memo(() => {
  const { id } = useParams();
  const { getMovieById } = useMovie();
  getMovieById(id as string);
  return <div className="text-amber-100">
    <MovieInfo id={id as string} />
    </div>;
});
