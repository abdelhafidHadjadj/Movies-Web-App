import { useState } from "react";
import "../../Styles/style1.css";

const Users = () => {
  let users = JSON.parse(localStorage.getItem("users"));
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <nav>
          <button>Add user</button>
        </nav>
        <Table users={users} />
      </div>
    </>
  );
};

export default Users;

const Table = ({ users }) => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});
  return (
    <table className="w-[80%] mt-5 text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-[--first-color] dark:bg-[--second-color] dark:text-[--third-color]">
        <tr>
          <th scope="col" className="px-6 py-3">
            Username
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Password
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((us) => (
          <tr className="bg-white border-b dark:bg-[--first-color] dark:border-[--second-color] dark:text-[--third-color] hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
            >
              {us.username}
            </th>
            <td className="px-6 py-4">
              <span>Afficher</span>
            </td>
            <td className="px-6 py-4">
              <span>{us.password}</span>
            </td>
            <td className="px-6 py-4">
              <button
                onClick={() => {
                  setInfo(us);
                  setOpen(!open);
                }}
              >
                Edit
              </button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
        {open && <EditComp info={info} setOpen={setOpen} />}
      </tbody>
    </table>
  );
};

const EditComp = ({ info, setOpen }) => {
  let users = JSON.parse(localStorage.getItem("users"));
  function editUser(e) {
    e.preventDefault();
  }
  return (
    <div>
      <button onClick={() => setOpen(false)}>x</button>
      <form onSubmit={editUser}>
        <div>
          <label>Id</label>
          <input type="text" value={info.id} />
        </div>
        <div>
          <label>Username</label>
          <input type="text" defaultValue={info.username} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" defaultValue={info.password} />
        </div>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};
