import "../../Styles/style1.css";

const MoviesAdm = () => {
  let movies = JSON.parse(localStorage.getItem("movies"));
  return (
    <div className="h-[100%] w-[85%] overflow-y-scroll">
      <Table movies={movies} />
    </div>
  );
};

export default MoviesAdm;

const Table = ({ movies }) => {
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};
