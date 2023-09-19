import { Link } from "react-router-dom";
import logo from "../image/img/logo.png";

export const StickyNavbar = () => {
  return (
    <>
      <header className="sticky top-0 shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
        <div className="nav flex items-center h-full justify-between me-4">
          <Link to={"home"}>
            <div className="logo h-24 ms-4">
              <img src={logo} alt="img_logo" className="h-full" />
            </div>
          </Link>
          <div className="flex items-center gap-4 md:gap-7">
            <nav className="hidden md:flex gap-4 md:gap-7 text-base md:text-lg ">
              <Link to={"/"} className="nav-hover">
                Home
              </Link>
              <Link to={"about"} className="nav-hover">
                About
              </Link>
              <Link to={"contact"} className="nav-hover">
                Contact
              </Link>
              <Link to={"signup"} className="nav-hover">
                Register
              </Link>
              <Link to={"login"} className="nav-hover">
                Login
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default StickyNavbar;
