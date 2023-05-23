import { useState } from "react";
import "../../Styles/style1.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
const MoviesAdm = () => {
  let { movies } = JSON.parse(localStorage.getItem("movies"));
  const [open, setOpen] = useState(false);
  return (
    <div className="h-[100%] w-[85%] overflow-y-scroll">
      <nav className="m-2 w-full">
        <button
          className="btn-add border py-2 px-4 rounded-[20px]"
          onClick={() => setOpen(true)}
        >
          + Add movie
        </button>
      </nav>
      {open && <AddComp setOpen={setOpen} movies={movies} />}

      <Table movies={movies} />
    </div>
  );
};

export default MoviesAdm;

const Table = ({ movies }) => {
  const [info, setInfo] = useState({});
  const [open, setOpen] = useState(false);
  const [openDelPopUp, setOpenDelPopUp] = useState(false);
  return (
    <table className="tbMovie w-[100%] mt-5 text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-[--first-color] dark:bg-[--second-color] dark:text-[--third-color]">
        <tr>
          <th scope="col" className="px-6 py-3">
            id
          </th>
          <th scope="col" className="px-6 py-3">
            Movie
          </th>
          <th scope="col" className="px-6 py-3">
            Genre
          </th>
          <th scope="col" className="px-6 py-3">
            Release
          </th>
          <th scope="col" className="px-6 py-3">
            Playtime
          </th>
        </tr>
      </thead>
      <tbody>
        {movies.map((mv) => (
          <tr className="bg-white border-b dark:bg-[--first-color] dark:border-[--second-color] dark:text-[--third-color] hover:bg-[--second-color]  dark:hover:bg-[--second-color]">
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
            >
              {mv.id}
            </th>
            <td className="px-6 py-4">
              <span>{mv.name}</span>
            </td>
            <td className="px-6 py-4">
              <span>{mv.genre}</span>
            </td>
            <td className="px-6 py-4">
              <span>{mv.release}</span>
            </td>
            <td className="px-6 py-4">
              <span>{mv.playtime}</span>
            </td>
            <td className="px-6 py-4 flex items-center gap-2">
              <button
                onClick={() => {
                  setInfo(mv);
                  setOpen(!open);
                }}
              >
                <FiEdit />
              </button>
              <button
                onClick={() => {
                  setInfo(mv);
                  setOpenDelPopUp(!openDelPopUp);
                }}
              >
                <RiDeleteBin2Line />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      {open && <EditComp info={info} setOpen={setOpen} movies={movies} />}
      {openDelPopUp && (
        <DeletePopUp info={info} setOpen={setOpen} movies={movies} />
      )}
    </table>
  );
};

const EditComp = ({ info, setOpen, movies }) => {
  const [err, setErr] = useState("");
  const [url, setUrl] = useState(`${info.poster}`);

  const inputString = info.playtime;
  const parts = inputString.split(" ");
  const hour = parts[0] ? parseInt(parts[0]) : 0;
  const minute = parts[2] ? parseInt(parts[2]) : 0;

  const [hr, setHr] = useState(hour);
  const [min, setMin] = useState(minute);
  const [select, setSelect] = useState(info.genre);

  const genres = ["Action", "Fantasy", "Horror", "Comedy"];

  function editMov(e) {
    e.preventDefault();
    let newMov = {
      id: info.id,
      name: e.target.name.value,
      release: e.target.release.value,
      playtime: `${hr} h ${min} min`,
      description: e.target.description.value,
      poster: url,
      genre: select,
    };

    let date = new Date();
    date.setTime(date.getTime() + 60 * 10000);
    let ttl = date.toUTCString();
    console.log(newMov);
    let idx = movies.findIndex((mv) => mv.id == newMov.id);
    movies[idx] = newMov;
    localStorage.setItem("movies", JSON.stringify({ movies, ttl }));
    window.location.reload();
    setOpen(false);
  }

  return (
    <div className="editPopupMov">
      <div className="firstBoxEditPopup">
        <span onClick={() => setOpen(false)}>x</span>
        Edit Movie
      </div>
      <form onSubmit={editMov}>
        <div className="w-[60%]">
          <p>ID #{info.id}</p>
          <div className="input">
            <label>Movie name</label>
            <input type="text" defaultValue={info.name} name="name" required />
          </div>
          <div className="input">
            <label>Release</label>
            <input
              type="text"
              defaultValue={info.release}
              name="release"
              required
            />
          </div>

          <div className="flex items-center gap-2">
            <p>Playtime</p>
            <div className="flex">
              <div className="input">
                <label>Hour</label>
                <input
                  type="number"
                  defaultValue={hr}
                  required
                  className="hour"
                  onChange={(e) => setHr(e.target.value)}
                />
              </div>
              <div className="input">
                <label>Min</label>
                <input
                  type="number"
                  defaultValue={min}
                  required
                  onChange={(e) => setMin(e.target.value)}
                  className="min"
                />
              </div>
            </div>
          </div>
          <div className="input">
            <label>Description</label>
            <textarea
              defaultValue={info.description}
              name="description"
              required
              rows={6}
            />
          </div>

          <div className="mt-2">
            <p>Genre selected: {select} </p>
            <ul className="genreList">
              {genres.map((gr) => (
                <li className="selectedBtn" onClick={() => setSelect(gr)}>
                  {gr}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[40%]">
          <div className="flex flex-col items-center">
            <img src={url} alt="" className="posterEdit" />
            <label htmlFor="">URL image</label>
            <input
              type="text"
              name="poster"
              className="input"
              defaultValue={info.poster}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <p>{err}</p>
          <button type="submit" className="btn-hover">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

const AddComp = ({ setOpen, movies }) => {
  const [gr, setGr] = useState("");

  function addMov(e) {
    e.preventDefault();
    let newMov = {
      id: e.target.id.value,
      name: e.target.name.value,
      release: e.target.release.value,
      playtime: e.target.playtime.value,
      description: e.target.description.value,
      poster: e.target.playtime.value,
      genre: gr,
    };
    let date = new Date();
    date.setTime(date.getTime() + 60 * 10000);
    let ttl = date.toUTCString();
    console.log(newMov);
    movies.push(newMov);
    localStorage.setItem("movies", JSON.stringify({ movies, ttl }));
    window.location.reload();
    setOpen(false);
  }
  return (
    <div className="editPopup">
      <div className="firstBoxEditPopup">
        <span onClick={() => setOpen(false)}>x</span>
        Edit Movie
      </div>
      <form onSubmit={addMov}>
        <div>
          <label>Movie name</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Release</label>
          <input type="text" name="release" required />
        </div>
        <div>
          <label>Playtime</label>
          <input type="number" name="password" required />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

const DeletePopUp = ({ info, setOpen, movies }) => {
  const removeMovie = () => {
    let date = new Date();
    date.setTime(date.getTime() + 60 * 10000);
    let ttl = date.toUTCString();

    movies = movies.filter((mv) => mv.id != info.id);
    console.log("remove movie");
    localStorage.setItem("movies", JSON.stringify({ movies, ttl }));
    window.location.reload();
    setOpen(false);
  };

  return (
    <div className="editPopup flex flex-col items-center">
      <h1>Are you sure ?</h1>
      <div className="flex gap-2">
        <button
          className="btn-delete border py-2 px-4 bg-[--second-color]"
          onClick={() => removeMovie()}
        >
          Delete
        </button>
        <button
          className="btn-exit border py-2 px-4 "
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
