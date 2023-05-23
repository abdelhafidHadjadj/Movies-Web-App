import { FaUsers } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import "../Styles/style1.css";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Forbidden from "./403";
import { Link } from "react-router-dom";

const Admin = () => {
  let { users } = JSON.parse(localStorage.getItem("users")) || [];
  let { movies } = JSON.parse(localStorage.getItem("movies")) || [];
  let { downloads } = JSON.parse(localStorage.getItem("downloads")) || [];
  let isLogged = JSON.parse(localStorage.getItem("logged"));
  let navigate = useNavigate();
  let nbrUsers = users.length;
  let nbrMovies = movies.length;
  console.log(downloads);
  let nbrDownloads = downloads.length;
  const [image, setImage] = useState("");

  if (!isLogged) {
    console.log("403");
    return <Forbidden />;
  } else {
    if (isLogged.value.isAdmin == false) {
      console.log("403");
      return <Forbidden />;
    }
  }

  return (
    <section className="adminSection ">
      <div className="flex flex-col items-center w-full h-[100%]">
        <div className="flex mt-2 gap-2 w-[95%] h-[30%]">
          <Link to="users" className="boxDash">
            <FaUsers size={38} />
            <p>Total users</p>
            <span>{nbrUsers}</span>
          </Link>

          <Link to="movies" className="boxDash">
            <MdMovie size={38} />
            <p>Total movies</p>
            <span>{nbrMovies}</span>
          </Link>
          <Link to="downloads" className="boxDash">
            <BsFillCloudDownloadFill size={38} />
            <p>Download</p>
            <span>{nbrDownloads}</span>
          </Link>
        </div>

        <Outlet />
      </div>
    </section>
  );
};

export default Admin;
