import { Link } from "react-router-dom";
import Movie from "./movieCard";

const Movies = () => {
  let movies = JSON.parse(localStorage.getItem("movies"));
  console.log(movies);
  return (
    <>
      <h1>Movies</h1>

      {movies.map((mv) => (
        <Link to={`/movies/${mv.id}`} className="article">
          <Movie
            title={mv.name}
            playtime={mv.playtime}
            img={mv.poster}
            release={mv.release}
            descrp={mv.description}
          />
        </Link>
      ))}
    </>
  );
};
export default Movies;
