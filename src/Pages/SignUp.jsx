import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const SignUp = () => {
  let navigate = useNavigate();
  let { users } = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users);
  const [err, setErr] = useState("");
  const [errPwd, setErrPwd] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    let info = {
      id: users.length,
      username: `${e.target.firstname.value} ${e.target.lastname.value}`,
      email: e.target.email.value,
      isAdmin: false,
      password: e.target.password.value,
    };
    let confirm = confPwd(e.target.password.value, e.target.confPassword.value);
    console.log(confirm);
    if (confirm) {
      let date = new Date();
      date.setTime(date.getTime() + 60 * 10000);
      let ttl = date.toUTCString();

      console.log(info);
      console.log(typeof users);
      users.push(info);
      console.log(users);
      localStorage.setItem("users", JSON.stringify({ users, ttl }));
      logged(info);

      navigate("/");
      window.location.reload();
    }
    if (!confirm) setErrPwd("Password is'nt the same");
  };
  const confPwd = (password, confPassword) => {
    return password === confPassword;
  };

  function logged(info) {
    let date = new Date();
    date.setTime(date.getTime() + 60 * 1000);
    let ttl = date.toUTCString();
    localStorage.setItem(
      "logged",
      JSON.stringify({ value: info, expiry: ttl })
    );
  }

  return (
    <section className="login-section">
      <div className="box-login">
        <div className="signIn-btn">
          <Link to="/login">
            Sign in <AiOutlineArrowRight />{" "}
          </Link>
        </div>
        <div className="login-content">
          <h1 className="text-xl">Sign up</h1>
          <p>{err}</p>
          <form onSubmit={signUp} className="login flex flex-col">
            <div className="input-box">
              <label htmlFor="username">Firstname</label>
              <input
                required
                type="text"
                placeholder="Firstname"
                name="firstname"
              />
            </div>
            <div className="input-box">
              <label htmlFor="username">Lastname</label>
              <input
                required
                type="text"
                placeholder="Lastname"
                name="lastname"
              />
            </div>
            <div className="input-box">
              <label htmlFor="username">Email</label>
              <input required type="text" placeholder="Email" name="email" />
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
            <div className="input-box">
              <label htmlFor="password">Confirm Password</label>
              <input
                required
                type="password"
                placeholder="confirm Password"
                name="confPassword"
              />
              <p>{errPwd}</p>
            </div>
            <input type="submit" className="btn-submit" value={"Sign Up"} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
