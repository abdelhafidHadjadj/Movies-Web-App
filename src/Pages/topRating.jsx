import "../Styles/style1.css";
import movies from "../data.json";
import Movie from "./movieCard";
import { Link } from "react-router-dom";

const TopRating = () => {
  let displayMv = [];
  for (let i = 0; i < 5; i++) {
    displayMv[i] = movies[i];
  }
  return (
    <section className="tpRat">
      <div className="basis-2/3"></div>
      <article className="boxMovies">
        <div className="navMoviesHome flex justify-between">
          <h2>Popular Movies</h2>
          <Link to="/movies">All movies</Link>
        </div>
        <div className="displayMv">
          {displayMv.map((mv) => (
            <Link to={`/movies/${mv.id}`} className="article">
              <Movie
                title={mv.name}
                img={mv.poster}
                playtime={mv.playtime}
                release={mv.release}
              />
            </Link>
          ))}
        </div>
      </article>
    </section>
  );
};

export default TopRating;
