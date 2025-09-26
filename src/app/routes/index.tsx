import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Cast from "../../pages/movie-detail/cast";
import Others from "../../pages/movie-detail/others";
import Reviews from "../../pages/movie-detail/reviews";
import CrewDetail from "../../pages/crew-detail";
const Home = lazy(() => import("@/pages/home"));
const Movie = lazy(() => import("@/pages/movie"));
const Search = lazy(() => import("@/pages/search"));
const Bookmark = lazy(() => import("@/pages/bookmark"));
const MovieDetail = lazy(() => import("@/pages/movie-detail"));

const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/movie", element: <Movie /> },
        { path: "/bookmark", element: <Bookmark /> },
        { path: "/search", element: <Search /> },
        { path: "/crew/:id", element: <CrewDetail /> },
        {
          path: "/movie/:id",
          element: <MovieDetail />,
          children: [
            { index: true, element: <Reviews /> },
            { path: "cast", element: <Cast /> },
            { path: "others", element: <Others /> },
          ],
        },
      ],
    },
  ]);
  return router;
};

export default memo(AppRouter);
