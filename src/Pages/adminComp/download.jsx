const Downloads = () => {
  let { downloads } = JSON.parse(localStorage.getItem("downloads"));

  return (
    <>
      <h1>Downloads</h1>
      <Table downloads={downloads} />
    </>
  );
};

export default Downloads;

const Table = ({ downloads }) => {
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
            username
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        {downloads.map((dw) => (
          <tr className="bg-white border-b dark:bg-[--first-color] dark:border-[--second-color] dark:text-[--third-color] hover:bg-[--second-color]  dark:hover:bg-[--second-color]">
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
            >
              {dw.id}
            </th>
            <td className="px-6 py-4">
              <span>{dw.movie}</span>
            </td>
            <td className="px-6 py-4">
              <span>{dw.user}</span>
            </td>
            <td className="px-6 py-4">
              <span>{dw.email}</span>
            </td>
            <td className="px-6 py-4">
              <span>{dw.downloadAt}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
