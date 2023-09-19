import { useState } from "react";
import { Link } from "react-router-dom";
import signImg from "../image/login3.gif";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    image: "",
  });
  const handlePassword = () => {
    setshowPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div
        className="border-b border-gray-900/10  "
        style={{
          backgroundImage: `url(${"https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp"})`,
          height: "630px",
        }}
      >
        <h2 className="text-2xl font-semibold leading-7 text-white text-center pt-4 mb-4 mt-4">
          Login Here !
        </h2>
        <div className="w-full max-w-md bg-white m-auto flex items-center flex-col p-4">
          <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative">
            <img
              src={data.image ? data.image : signImg}
              alt="sign_img"
              className="w-full h-full"
            />
          </div>

          <form action="">
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-12">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-12">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-1 mb-2  py-1 flex">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    onChange={handleOnChange}
                  />
                  <span
                    className="flex text-xl cursor-pointer mt-2"
                    onClick={handlePassword}
                  >
                    {showPassword ? <BiShow /> : <BiHide />}
                  </span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full m-auto  btn-hero text-xl font-medium hover:text-white cursor-pointer py-1 rounded-full mt-4"
            >
              Login
            </button>
          </form>
          <p className="text-sm">
            Not Registered Yet ?{" "}
            <Link to={"/login"} className="color-main font-bold underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
