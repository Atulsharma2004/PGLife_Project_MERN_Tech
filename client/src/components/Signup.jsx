import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signImg from "../image/login3.gif";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { toast } from 'react-hot-toast';
const serverDomain = import.meta.env.VITE_SERVER_DOMAIN;

const Signup = () => {
  const navigate = useNavigate()
  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    image: "",
    city:"",
  });
  const handlePassword = () => {
    setshowPassword((preve) => !preve);
  };

  const handleConfirmPassword = () => {
    setshowConfirmPassword((preve) => !preve);
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

  const handleProfileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
        e.preventDefault()
        const { fname, email, password, cpassword, city } = data;
        if (fname && email && password && cpassword && city) {
            if (password === cpassword) {
                const fetchData = await fetch(`${serverDomain}/signup`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })

                const dataRes = await fetchData.json()
                // console.log(dataRes)
                // alert(dataRes.message)
                toast(dataRes.message)
                if (dataRes.alert) {
                    navigate('/login')
                }
            } else {
                alert('passwords did not match')
            }
        } else {
            alert('please fill all the fields')
        }
    }

  return (
    <>
      <div
        className="border-b border-gray-900/10 pb-12 "
        style={{
          backgroundImage: `url(${"https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp"})`,
        }}
      >
        <h2 className="text-2xl font-semibold leading-7 text-white text-center pt-4 mb-4">
          Personal Information
        </h2>
        <div className="w-full max-w-md bg-white m-auto flex items-center flex-col p-4">
          <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md relative">
            <img
              src={data.image ? data.image : signImg}
              alt="sign_img"
              className="w-full h-full"
            />
            <label htmlFor="profileImage">
              <div className="absolute bottom-0 h-1/3 bg-slate-400 bg-opacity-50 w-full text-center cursor-pointer">
                <p className="text-sm p-1 text-white">Upload</p>
              </div>
              <input
                type="file"
                accept="image/*"
                name="profileImage"
                id="profileImage"
                className="hidden"
                onChange={handleProfileImage}
              />
            </label>
          </div>

          <form action=""  onSubmit={handleSubmit}>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="fname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-teal-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="lname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-teal-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
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
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-teal-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-1 py-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="block w-full pr-10 rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-teal-500 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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

              <div className="sm:col-span-6">
                <label
                  htmlFor="cpassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
                <div className="mt-1 relative  py-1">
                  <input
                    id="cpassword"
                    name="cpassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1  ring-teal-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    onChange={handleOnChange}
                  />
                  <span
                    className=" absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={handleConfirmPassword}
                  >
                    {showConfirmPassword ? <BiShow /> : <BiHide />}
                  </span>
                </div>
              </div>

              <div className="sm:col-span-6 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-teal-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    onChange={handleOnChange}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full m-auto  btn-hero text-xl font-medium hover:text-white cursor-pointer py-1 rounded-full mt-4"
            >
              Signup
            </button>
          </form>
          <p className="text-sm">
            Already have account ?{" "}
            <Link to={"/login"} className="color-main font-bold underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
