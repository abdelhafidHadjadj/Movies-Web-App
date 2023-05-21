import { useState } from "react";
import "../../Styles/style1.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
const MoviesAdm = () => {
  let { movies } = JSON.parse(localStorage.getItem("movies"));
  const [open, setOpen] = useState(false);
  return (
    <div className="h-[100%] w-[85%] overflow-y-scroll">
      <nav className=" m-2 w-full">
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
              <button>
                <RiDeleteBin2Line />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      {open && <EditComp info={info} setOpen={setOpen} movies={movies} />}
    </table>
  );
};

const EditComp = ({ info, setOpen, movies }) => {
  const [gr, setGr] = useState("");

  function editMov(e) {
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
    let idx = movies.findIndex((mv) => mv.id == newMov.id);
    movies[idx] = newMov;
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
      <form onSubmit={editMov}>
        <div>
          <label>Id</label>
          <input type="text" value={info.id} name="id" />
        </div>
        <div>
          <label>Movie name</label>
          <input type="text" defaultValue={info.name} name="name" required />
        </div>
        <div>
          <label>Release</label>
          <input
            type="text"
            defaultValue={info.release}
            name="release"
            required
          />
        </div>
        <div>
          <label>Playtime</label>
          <input
            type="number"
            defaultValue={info.playtime}
            name="password"
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            defaultValue={info.description}
            name="description"
            required
          />
        </div>
        <button type="submit">Edit</button>
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
