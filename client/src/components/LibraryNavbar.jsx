import logo from "../image/logo.png";
import { Link } from "react-router-dom";
import {BsFillBackspaceFill} from "react-icons/bs"

const LibraryNavbar = () => {
  return (
    <div className="logo flex md:flex-row flex-col items-center h-full justify-between md:me-8">
      <div className="">
        <Link to={"/library"}>
        <div className="flex items-center  h-42 h-full h-16 w-32 p-0 ms-4">
          <img src={logo} alt="img_logo" className="md:h-full h-1/2 "/>
        </div>
      </Link>
      </div>
      <div className="flex h-16 w-16 rounded-full bg-white items-center justify-center md:gap-7 mb-2">
        <nav className="md:flex md:gap-7 md:text-xl">
          <Link to={"/"} className="nav-hover">
            <BsFillBackspaceFill className="h-8 w-8"/>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default LibraryNavbar;
