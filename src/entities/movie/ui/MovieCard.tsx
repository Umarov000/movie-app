import { createImageUrl } from "@/shared/utils";
import { memo, type FC } from "react";
import type { IMovie } from "../model/types";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: IMovie;
}

export const MovieCard: FC<Props> = memo((props) => {
  const { movie } = props;
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <div className="w-[260px] h-[385px] overflow-hidden rounded-lg shadow-md">
        <img
          src={createImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-2">
        <h3 className="text-white text-lg font-semibold line-clamp-1">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-300">Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
});
