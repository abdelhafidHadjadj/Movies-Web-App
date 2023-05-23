import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const Login = () => {
  let navigate = useNavigate();
  let { users } = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users);
  let exist = false;
  let index;
  const [err, setErr] = useState("");

  const login = (e) => {
    e.preventDefault();
    let info = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username == info.username &&
        users[i].password == info.password
      ) {
        exist = true;
        index = i;
        console.log("I found it");
        break;
      }
    }

    if (exist && users[index].isAdmin) {
      console.log("He's admin");
      navigate("/admin/users");
      window.location.reload();
      let date = new Date();
      date.setTime(date.getTime() + 60 * 1000);
      let ttl = date.toUTCString();
      info.isAdmin = true;
      info.username = users[index].username;
      info.email = users[index].email;

      localStorage.setItem(
        "logged",
        JSON.stringify({ value: info, expiry: ttl })
      );
    } else {
      if (exist && users[index].isAdmin == false) {
        console.log("He's user");
        window.location.reload();
        navigate("/");

        let date = new Date();
        date.setTime(date.getTime() + 60 * 1000);
        let ttl = date.toUTCString();
        info.isAdmin = false;
        localStorage.setItem(
          "logged",
          JSON.stringify({ value: info, expiry: ttl })
        );
      } else {
        setErr("user not exist");
        console.log("try again");
      }
    }
  };

  /* verify the expiration login */

  return (
    <section className="login-section">
      <div className="box-login">
        <div className="signIn-btn">
          <Link to="/sign-up">
            Sign up <AiOutlineArrowRight />{" "}
          </Link>
        </div>
        <div className="login-content">
          <h1 className="text-xl">Sign in</h1>
          <p>{err}</p>
          <form onSubmit={login} className="login flex flex-col">
            <div className="input-box">
              <label htmlFor="username">Username</label>
              <input required type="text" placeholder="Email" name="username" />
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                placeholder="Password"
                name="password"
              />
            </div>
            <input type="submit" className="btn-submit" value={"Login"} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
