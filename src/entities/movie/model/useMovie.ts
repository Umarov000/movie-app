import { useQuery } from "@tanstack/react-query";
import { fetchMovies, fetchMovieById } from "../api/fetchApi";

export const useMovie = () => {
  // SuccessType, ErrorType
  const getMovies = () =>
    useQuery<any, any>({
      queryKey: ["movieKey"], // deps
      queryFn: fetchMovies,
      retry: 0,
    });
  // // SuccessType, ErrorType, BodyType
  // useMutation<any, any,any>({
  //     mutationFn: (body)
  // })

  const getMovieById = (id: string) =>
    useQuery({
      queryKey: ["movieKey", id],
      queryFn: () => fetchMovieById(id),
    });

  return { getMovies, getMovieById };
};
