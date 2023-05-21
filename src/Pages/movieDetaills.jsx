import { useNavigate, useParams } from "react-router";
import "../Styles/style1.css";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
const MovieDetaills = () => {
  const { movieId } = useParams();
  let { movies } = JSON.parse(localStorage.getItem("movies"));
  let mv = movies.find((mv) => mv.id == movieId);
  const navigate = useNavigate();
  return (
    <article className="movieDetaills">
      <button className="btn-back" onClick={() => navigate(-1)}>
        <HiOutlineArrowCircleLeft size={30} />
      </button>
      <img src={mv.poster} alt="" />
      <div>
        <h1>{mv.name}</h1>
        <p>{mv.description}</p>
        <button className="border p-2">Download</button>
        <button className="border p-2">Favoris</button>
      </div>
    </article>
  );
};

export default MovieDetaills;
