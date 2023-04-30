import { useParams } from "react-router";

const MovieDetaills = () => {
  const { movieId } = useParams();
  let movies = JSON.parse(localStorage.getItem("movies"));
  let mv = movies.find((mv) => mv.id == movieId);

  return (
    <>
      <h1>{mv.name}</h1>

      <img src={mv.poster} alt="" />
      <p>{mv.description}</p>
    </>
  );
};

export default MovieDetaills;
