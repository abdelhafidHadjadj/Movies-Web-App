import { CgProfile } from "react-icons/cg";
import { RiMovie2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const Navbar = () => {
  let isLogged = localStorage.getItem("logged");
  var route;
  if (isLogged) {
    var { info, isAdmin } = JSON.parse(localStorage.getItem("logged")).value;
    console.log(isAdmin);
    if (isAdmin) {
      route = "/admin";
    } else {
      route = "/";
    }
  }
  if (info) {
    console.log(info);
  }
  return (
    <>
      <nav className="navbar">
        <span>
          <RiMovie2Line size={38} />
        </span>
        <div className="boxBtn">
          <Link to="/" className="btn-filter">
            Browse
          </Link>
          <Link to="/new" className="btn-filter">
            New Movies
          </Link>
          <Link to="/top-rating" className="btn-filter">
            Top Rating
          </Link>
        </div>
        {info ? (
          <Link
            to={isAdmin ? "/admin" : "/profile"}
            className="flex items-center gap-2"
          >
            <CgProfile size={26} />
            {info.username}
          </Link>
        ) : (
          <Link to="login">Login</Link>
        )}
      </nav>
    </>
  );
};

export default Navbar;
