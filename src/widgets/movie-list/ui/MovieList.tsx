import { MovieCard, type IMovie } from "@/entities/movie";
import { memo, type FC } from "react";

interface Props {
  movies: IMovie[];
}

export const MovieList: FC<Props> = memo((props) => {
  const { movies } = props;

  return (
    <div className="container grid lg:grid-cols-4 gap-3 md:grid-cols-3 grid-cols-2 mt-[50px]">
      {movies?.slice(0, 4).map((item: any) => (
        <MovieCard key={item.id} movie={item} />
      ))}
    </div>
  );
});
