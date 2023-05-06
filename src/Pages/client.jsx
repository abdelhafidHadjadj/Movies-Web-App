import { useNavigate } from "react-router";

const Client = () => {
  let info = JSON.parse(localStorage.getItem("logged"));
  let users = JSON.parse(localStorage.getItem("users"));
  let navigate = useNavigate();

  if (info) {
    var { value } = info;
    var index;
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username == value.info.username &&
        users[i].password == value.info.password
      ) {
        index = i;
      }
    }
  } else {
    navigate("/login");
  }
  function UpdateUser(e) {
    e.preventDefault();
    let newInfo = {
      username: e.target.name.value,
      password: e.target.password.value,
    };

    users[index].username = newInfo.username;
    users[index].password = newInfo.password;
  }
  return (
    <section className="flex w-[100%] flex-col items-center gap-5 w-full ml-[20%] mt-[15%]">
      <h1>Client Profile</h1>
      <form onSubmit={UpdateUser} className="flex flex-col items-center gap-5">
        <div className="flex justify-center w-full gap-2">
          <label>Username</label>
          <input
            type="text"
            defaultValue={info ? value.info.username : ""}
            className="bg-[transparent] border text-white"
          />
        </div>
        <div className="flex justify-center w-full gap-2">
          <label>Password</label>
          <input
            type="password"
            className="bg-[transparent] border text-white"
            defaultValue={info ? value.info.password : ""}
          />
        </div>
        <button type="submit" className="border w-[50%] p-2">
          Update
        </button>
      </form>
    </section>
  );
};

export default Client;
