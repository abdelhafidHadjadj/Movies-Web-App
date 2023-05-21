import "../Styles/style1.css";
import movies from "../data.json";
import Movie from "./movieCard";
import { Link } from "react-router-dom";
import ImageSlider from "../Options/slider";

const TopRating = () => {
  let { movies } = JSON.parse(localStorage.getItem("movies"));

  return (
    <section className="tpRat">
      <div className="basis-2/3"></div>
      <article className="boxMovies">
        <div className="navMoviesHome items-center gap-2 flex ml-[5%]">
          <Link to="/movies">All movies</Link>
          <hr />
        </div>
        <ImageSlider displayMv={movies} />
      </article>
    </section>
  );
};

export default TopRating;
