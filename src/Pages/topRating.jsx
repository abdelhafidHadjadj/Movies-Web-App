import "../Styles/style1.css";
import movies from "../data.json";
import Movie from "./movieCard";

const TopRating = () => {
  let displayMv = [];
  for (let i = 0; i < 5; i++) {
    displayMv[i] = movies[i];
  }
  return (
    <section className="home">
      <div className="basis-2/3"></div>
      <article className="boxMovies">
        <h2>Popular Movies</h2>
        <div className="displayMv">
          {displayMv.map((mv) => (
            <Movie
              key={mv.id}
              title={mv.name}
              img={mv.poster}
              playtime={mv.playtime}
              release={mv.release}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default TopRating;
