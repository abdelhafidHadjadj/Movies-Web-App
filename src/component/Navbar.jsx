import { CgProfile } from "react-icons/cg";
import { RiMovie2Line } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  let isLogged = localStorage.getItem("logged");
  var route;
  const location = useLocation().pathname;

  if (isLogged) {
    var { value } = JSON.parse(localStorage.getItem("logged"));
    console.log(value.isAdmin);
    if (value.isAdmin) {
      route = "/admin";
    } else {
      route = "/";
    }
  }

  return (
    <>
      <nav className="navbar">
        <span>
          <RiMovie2Line size={38} />
        </span>
        <div className="boxBtn">
          <Link
            to="/"
            className={`btn-filter ${
              location == "/"
                ? "border-b-4 border-[--second-color] text-[--second-color]"
                : ""
            }`}
          >
            Browse
          </Link>
          <Link
            to="/new"
            className={`btn-filter ${
              location == "/new"
                ? "border-b-4 border-[--second-color] text-[--second-color]"
                : ""
            }`}
          >
            New Movies
          </Link>
          <Link
            to="/top-rating"
            className={`btn-filter ${
              location == "/top-rating"
                ? "border-b-4 border-[--second-color] text-[--second-color]"
                : ""
            }`}
          >
            Top Rating
          </Link>
        </div>
        {value ? (
          <Link
            to={value.isAdmin ? "/admin/users" : "/profile"}
            className="flex items-center gap-2"
          >
            <CgProfile size={26} />
            {value.username}
          </Link>
        ) : (
          <Link to="login" className="flex gap-2">
            <FiLogIn size={24} />
            Sign in
          </Link>
        )}
      </nav>
    </>
  );
};

export default Navbar;
