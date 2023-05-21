import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import MovieDetaills from "../Pages/movieDetaills";
import Admin from "../Pages/admin";
import NwMovies from "../Pages/newMv";
import TopRating from "../Pages/topRating";
import Login from "../Pages/login";
import Movies from "../Pages/Movies";
import Client from "../Pages/client";
import Users from "../Pages/adminComp/users";
import MoviesAdm from "../Pages/adminComp/movies";
import NotFound from "../Pages/404";
import Forbidden from "../Pages/403";
import SignUp from "../Pages/SignUp";
const Main = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetaills />} />
        <Route path="admin" element={<Admin />}>
          <Route path="users" element={<Users />} />
          <Route path="movies" element={<MoviesAdm />} />
        </Route>
        <Route path="/profile" element={<Client />} />
        <Route path="new" element={<NwMovies />} />
        <Route path="top-rating" element={<TopRating />} />
        <Route path="Login" element={<Login />} />
        <Route path="Sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/forbidden" element={<Forbidden />} />
      </Routes>
    </>
  );
};

export default Main;
