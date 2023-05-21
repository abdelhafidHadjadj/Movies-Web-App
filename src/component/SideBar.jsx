import { Link } from "react-router-dom";
import "../Styles/style1.css";
import { useEffect, useState } from "react";
import { SlLogout } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { TfiTwitter } from "react-icons/tfi";
import { SlSocialYoutube } from "react-icons/sl";
const SideBar = () => {
  const [display, setDisplay] = useState(true);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.location.pathname == "/login" ? setDisplay(false) : setDisplay(true);
  }, []);
  console.log(display);
  const isLogged = JSON.parse(localStorage.getItem("logged"));

  return (
    <aside className="sidebar">
      <div className="boxTrailer basis-1/4">
        <video className="w-full" autoPlay loop>
          <source
            src="https://res.cloudinary.com/gestionprojet/video/upload/v1683153397/EXTRACTION_2___Official_Teaser_Trailer___Netflix_1080P_HD_gxbnmo.mp4"
            type="video/mp4"
          />
        </video>{" "}
      </div>
      <div className="boxTrailer basis-1/4">
        <video className="w-full" controls loop>
          <source
            src="https://res.cloudinary.com/gestionprojet/video/upload/v1683153894/Yu-Gi-Oh__THE_DARK_SIDE_OF_DIMENSIONS_-_Official_Trailer_2_1080P_HD_ogjspv.mp4"
            type="video/mp4"
          />
        </video>{" "}
      </div>
      <div className="boxTrailer basis-1/4"></div>
      {isLogged && (
        <button onClick={() => setOpen(true)} className="btn-out">
          <SlLogout size={25} /> Log Out
        </button>
      )}
      {open && <PopUp setOpen={setOpen} />}
      <div className="flex gap-2 items-center">
        <FiFacebook size={22} />
        <BsInstagram size={20} />
        <TfiTwitter size={22} />
        <SlSocialYoutube size={22} />
      </div>
    </aside>
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
