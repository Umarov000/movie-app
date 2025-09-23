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
    <div>
      <div onClick={() => navigate(`/movie/${movie.id}`)}>
        <img src={createImageUrl(movie.poster_path)} alt="" />
      </div>
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.vote_average}</p>
      </div>
    </div>
  );
});
