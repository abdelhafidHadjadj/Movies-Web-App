import { useState } from "react";
import "../../Styles/style1.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
const Users = () => {
  let { users } = JSON.parse(localStorage.getItem("users"));
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <nav className=" m-2 w-full">
          <button
            className="btn-add border py-2 px-4 rounded-[20px]"
            onClick={() => setOpen(true)}
          >
            + Add user
          </button>
        </nav>
        {open && <AddComp setOpen={setOpen} users={users} />}
        <Table users={users} />
      </div>
    </>
  );
};

export default Users;

const Table = ({ users }) => {
  const [open, setOpen] = useState(false);
  const [openDelPop, setOpenDelPop] = useState(false);
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
              <span>{us.email}</span>
            </td>
            <td className="px-6 py-4">
              <span>{us.password}</span>
            </td>
            <td className="px-6 py-4 flex items-center gap-2">
              <button
                onClick={() => {
                  setInfo(us);
                  setOpen(!open);
                }}
              >
                <FiEdit />
              </button>
              <button
                onClick={() => {
                  setInfo(us);
                  setOpenDelPop(!openDelPop);
                }}
              >
                <RiDeleteBin2Line />
              </button>
            </td>
          </tr>
        ))}
        {open && <EditComp info={info} setOpen={setOpen} users={users} />}
        {openDelPop && (
          <DeletePopUp info={info} setOpen={setOpenDelPop} users={users} />
        )}
      </tbody>
    </table>
  );
};

const EditComp = ({ info, setOpen, users }) => {
  function editUser(e) {
    e.preventDefault();
    let newInfo = {
      id: e.target.id.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    let date = new Date();
    date.setTime(date.getTime() + 60 * 10000);
    let ttl = date.toUTCString();
    console.log(newInfo);
    let idx = users.findIndex((us) => us.id == newInfo.id);
    users[idx] = newInfo;
    localStorage.setItem("users", JSON.stringify({ users, ttl }));
    window.location.reload();
    setOpen(0);
  }
  return (
    <div className="editPopup">
      <div className="firstBoxEditPopup">
        <span onClick={() => setOpen(false)}>x</span>
        Edit user
      </div>
      <form onSubmit={editUser}>
        <div>
          <label>Id</label>
          <input type="text" value={info.id} name="id" />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            defaultValue={info.username}
            name="username"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input type="text" defaultValue={info.email} name="email" required />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            defaultValue={info.password}
            name="password"
            required
          />
        </div>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

const AddComp = ({ setOpen, users }) => {
  function addUser(e) {
    e.preventDefault();
    let newInfo = {
      id: users.length,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    let date = new Date();
    date.setTime(date.getTime() + 60 * 10000);
    let ttl = date.toUTCString();
    console.log(newInfo);
    users.push(newInfo);
    console.log(users);
    localStorage.setItem("users", JSON.stringify({ users, ttl }));
    window.location.reload();
    setOpen(0);
  }
  return (
    <div className="editPopup">
      <div className="firstBoxEditPopup">
        <span onClick={() => setOpen(false)}>x</span>
        <h1>Add user</h1>
      </div>
      <form onSubmit={addUser}>
        <div>
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="text" name="password" />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

const DeletePopUp = ({ info, setOpen, users }) => {
  const removeUser = () => {
    let date = new Date();
    date.setTime(date.getTime() + 60 * 10000);
    let ttl = date.toUTCString();

    users = users.filter((us) => us.id != info.id);
    console.log(info);
    console.log("remove user");
    console.log(users);
    localStorage.setItem("users", JSON.stringify({ users, ttl }));
    window.location.reload();
    setOpen(false);
  };

  return (
    <div className="editPopup flex flex-col items-center">
      <h1>Are you sure ?</h1>
      <div className="flex gap-2">
        <button
          className="btn-delete border py-2 px-4 bg-[--second-color]"
          onClick={() => removeUser()}
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
