import { Link } from "react-router-dom";
import "../Styles/style1.css";
import Movie from "./movieCard";
import ImageSlider from "../Options/slider";
const Home = () => {
  let { movies } = JSON.parse(localStorage.getItem("movies"));
  var { value } = JSON.parse(localStorage.getItem("logged")) || {};
  console.log(value);
  return (
    <section className="home">
      <div className="basis-3/4"></div>
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

export default Home;
