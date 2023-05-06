import { Link } from "react-router-dom";
import Movie from "./movieCard";
import "../Styles/style1.css";
import { useEffect, useState } from "react";
const Movies = () => {
  let movies = JSON.parse(localStorage.getItem("movies"));
  const [genre, setGenre] = useState("");
  let newMv = movies;
  if (genre) {
    newMv = movies.filter((mv) => mv.genre == genre);
  }
  if (genre == "All") {
    newMv = movies;
  }
  console.log(genre);
  console.log(newMv);
  const genres = ["All", "Action", "Fantasy", "Horror", "Comedy"];
  return (
    <section className="ml-[20%] mt-[5%] flex flex-col basis-3/4 p-5">
      <nav className="navMovies">
        <div className="searchBar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navType">
          {genres.map((gr) => (
            <button onClick={() => setGenre(gr)}>{gr}</button>
          ))}
        </div>
      </nav>

      <div className="overflow-auto flex flex-wrap gap-5">
        {!newMv.length == 0 ? (
          newMv.map((mv) => (
            <Link to={`/movies/${mv.id}`} className="article">
              <Movie
                title={mv.name}
                playtime={mv.playtime}
                img={mv.poster}
                release={mv.release}
                descrp={mv.description}
              />
            </Link>
          ))
        ) : (
          <h2>Not available</h2>
        )}
      </div>
    </section>
  );
};
export default Movies;
