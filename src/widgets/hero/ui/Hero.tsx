import { memo } from "react";
import { HeroSwiper } from "../../../entities/hero/ui/HeroSwiper";
import { useMovie } from "../../../entities/movie";

export const Hero = memo(() => {
      const { getMovies } = useMovie();
      const { data } = getMovies();
  return <div>
    <HeroSwiper data={data?.results}/>
  </div>;
});
