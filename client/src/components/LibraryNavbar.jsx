import logo from "../image/logo.png";
import { Link } from "react-router-dom";

const LibraryNavbar = () => {
  return (
    <div className="nav flex items-center h-full justify-between me-8">
      <Link to={"/home"}>
        <div className="logo h-24 ms-4">
          <img src={logo} alt="img_logo" className="h-full" />
        </div>
      </Link>
      <div className="flex items-center gap-4 md:gap-7">
        <nav className="hidden md:flex gap-4 md:gap-7 text-base md:text-lg ">
          <Link to={"/home"} className="nav-hover">
            Home
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default LibraryNavbar;
