import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signImg from "../image/login3.gif";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { loginRedux } from '../redux/userSlice'
const serverDomain = import.meta.env.VITE_SERVER_DOMAIN;


const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setshowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user); // Replace with the actual selector path
  useEffect(() => {
    // console.log(userData); // Log the updated userData whenever it changes
  }, [userData]);

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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const { email, password } = data; // Extract email and password from 'data' object
    if (email && password) { // Check if both email and password are provided
      try {
        const fetchData = await fetch(`${serverDomain}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data) // Convert 'data' object to JSON and send as the request body
        });

        const dataRes = await fetchData.json(); // Parse the response JSON

        toast.success('Logged in successfully'); // Display a toast message with the response message

        if (dataRes.alert) { // Check if the response contains an 'alert'
          dispatch(loginRedux(dataRes)); // Dispatch a Redux action with the response data
          setTimeout(() => {
            navigate("/"); // Navigate to the homepage after a delay of 1 second
          }, 1000);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    } else {
      alert('please fill all the fields');
    }
  }

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

          <form action="" onSubmit={handleSubmit}>
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
                    value={data.email}
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset px-2 ring-teal-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
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
                <div className="mt-1 mb-2  py-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={data.password}
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset px-2 ring-teal-500 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    onChange={handleOnChange}
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
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
            <Link to={"/signup"} className="color-main font-bold underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
