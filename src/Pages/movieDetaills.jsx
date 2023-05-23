import { useNavigate, useParams } from "react-router";
import "../Styles/style1.css";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
const MovieDetaills = () => {
  const { movieId } = useParams();
  let { movies } = JSON.parse(localStorage.getItem("movies"));
  let isLogged = JSON.parse(localStorage.getItem("logged"));
  let mv = movies.find((mv) => mv.id == movieId);
  const navigate = useNavigate();
  let { downloads } = JSON.parse(localStorage.getItem("downloads")) || [];
  const download = () => {
    let downloadDate = new Date();

    const downloadInfo = {
      id: downloads.length,
      movie: mv.name,
      user: isLogged.value.username,
      email: isLogged.value.email,
      downloadAt: downloadDate.toUTCString(),
    };

    let date = new Date();
    date.setTime(date.getTime() + 60 * 10000);
    let ttl = date.toUTCString();
    console.log(downloads);
    downloads.push(downloadInfo);
    localStorage.setItem("downloads", JSON.stringify({ downloads, ttl }));
  };

  return (
    <article className="movieDetaills">
      <button className="btn-back" onClick={() => navigate(-1)}>
        <HiOutlineArrowCircleLeft size={30} />
      </button>
      <img src={mv.poster} alt="" />
      <div>
        <h1>{mv.name}</h1>
        <p>{mv.description}</p>
        {isLogged ? (
          <button className="border p-2" onClick={() => download()}>
            Download
          </button>
        ) : (
          <Link to="/login" className="border p-2">
            Download
          </Link>
        )}
        <button className="border p-2">Favoris</button>
      </div>
    </article>
  );
};

export default MovieDetaills;
