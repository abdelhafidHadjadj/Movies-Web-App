import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import MovieDetaills from "../Pages/movieDetaills";
import Admin from "../Pages/admin";
import NwMovies from "../Pages/newMv";
import TopRating from "../Pages/topRating";
import Login from "../Pages/login";
import Movies from "../Pages/Movies";
import Client from "../Pages/client";
const Main = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetaills />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Client />} />
        <Route path="new" element={<NwMovies />} />
        <Route path="top-rating" element={<TopRating />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Main;
