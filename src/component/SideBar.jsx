import { Link } from "react-router-dom";
import "../Styles/style1.css";
import { useEffect, useState } from "react";
import { SlLogout } from "react-icons/sl";
const SideBar = () => {
  const [display, setDisplay] = useState(true);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.location.pathname == "/login" ? setDisplay(false) : setDisplay(true);
  }, []);
  console.log(display);
  return (
    <>
      <aside className="sidebar">
        <div className="link basis-1/4">
          <video width="750" height="500" autoPlay controls>
            <source
              src="https://www.youtube.com/watch?v=mO0OuR26IZM"
              type="video/mp4"
            />
          </video>{" "}
        </div>
        <div className="boxTrailer basis-1/4"></div>
        <div className="boxTrailer basis-1/4"></div>
        <button onClick={() => setOpen(true)} className="btn-out">
          <SlLogout size={25} /> Log Out
        </button>
        {open && <PopUp setOpen={setOpen} />}
        <div>
          <p>Social media</p>
        </div>
      </aside>
    </>
  );
};

export default SideBar;

const PopUp = ({ setOpen }) => {
  function logOut() {
    localStorage.removeItem("logged");
    window.location.reload();
  }

  return (
    <div className="popup">
      <h2>Are you sure?</h2>
      <div className="flex gap-10">
        <button
          onClick={() => {
            setOpen(false);
            logOut();
          }}
          className="border px-5 py-2 bg-[--second-color]"
        >
          Yes
        </button>
        <button onClick={() => setOpen(false)} className="border px-5 py-2">
          No
        </button>
      </div>
    </div>
  );
};
