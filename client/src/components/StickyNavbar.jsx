import { useState } from 'react'
import { Link } from "react-router-dom";
import { FaRegUserCircle } from 'react-icons/fa'
import logo from "../image/img/logo.png";
import { useDispatch, useSelector } from 'react-redux'
import { logoutRedux } from '../redux/userSlice'
import toast from 'react-hot-toast'




export const StickyNavbar = () => {
  const [showMenu, setShowMenu] = useState(false)
	const userData = useSelector((state) => state.user)
	// console.log(userData.email)
	const dispatch = useDispatch()
	const handleShowMenu = () => {
		setShowMenu(preve => !preve);
	}
	const handleLogout = () => {
		dispatch(logoutRedux())
		toast.success('Logout successfully');
	}
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
              {
                userData.email ? 
                  <p className='nav-hover cursor-pointer px-2' onClick={handleLogout}>Logout ({userData.fname})</p>
                  : 
                 <Link to={"login"} className="nav-hover">
                    Login
                 </Link>
              }
              <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
                 {userData.image ? <img src={userData.image} className='h-full w-full' style={{background:"linear-gradient(red, green, yellow, pink, blue)", padding:"3px"}} alt='profile_img' /> : <FaRegUserCircle />}
              </div>
            </nav>
          </div>
          {/* Responsive menu button */}
               <div className="md:hidden cursor-pointer" onClick={handleShowMenu}>
            {showMenu ? (
              userData.email ? (
                userData.image ? (
                  <img
                    src={userData.image}
                    alt="profile_img"
                    className="h-8 w-8 text-gray-500 rounded-full"
                  />
                ) : (
                  <FaRegUserCircle className="h-8 w-8 text-gray-500" />
                )
              ) : (
                <FaRegUserCircle className="h-8 w-8 text-gray-500" />
              )
            ) : (
              userData.email ? (
                userData.image ? (
                  <img
                    src={userData.image}
                    alt="profile_img"
                    className="h-8 w-8 text-gray-800 rounded-full"
                  />
                ) : (
                  <FaRegUserCircle className="h-8 w-8 text-gray-800" />
                )
              ) : (
                <FaRegUserCircle className="h-8 w-8 text-gray-800" />
              )
            )}
          </div>
        </div>
        {/* Responsive menu */}
        {showMenu && (
          <div className="md:hidden bg-white mt-2 p-2 shadow-md">
            <Link to={"/"} className="block py-2">Home</Link>
            <Link to={"about"} className="block py-2">About</Link>
            <Link to={"contact"} className="block py-2">Contact</Link>
            <Link to={"signup"} className="block py-2">Register</Link>
            {userData.email ? (
              <p className="block py-2 cursor-pointer" onClick={handleLogout}>Logout ({userData.fname})</p>
            ) : (
              <Link to={"login"} className="block py-2">Login</Link>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default StickyNavbar;
