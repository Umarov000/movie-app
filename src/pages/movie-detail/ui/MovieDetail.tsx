import { memo } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useMovie } from "../../../entities/movie";
import { MovieInfo } from "../../../entities/movie/ui/detail/MovieInfo";
import { MovieList } from "../../../widgets/movie-list";

export const MovieDetail = memo(() => {
  const { id } = useParams();
   const { getMovieInfo } = useMovie();
   const { data } = getMovieInfo(id as string, "similar");
  return (
    <div className="text-amber-100">
      <MovieInfo id={id as string} />
      <Outlet context={{ id }} />
      <div className="container">
        <h2 className="mt-8 text-2xl font-semibold text-[#cdc6c6]">Similar Movies</h2>
      </div>

      <MovieList movies={data?.results?.slice(0, 8)} />
    </div>
  );
});
