// import { Carousel } from "@material-tailwind/react";
import first from "../image/1.jpg";
// import second from "../image/2.jpg";
// import third from "../image/3.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Amenities from "./Amenities";
import Reviews from "./Reviews";
// import Footer from './Footer';
import { Link, useParams } from "react-router-dom";
import CarouselDefault from "./CarouselDefault";

const InsideHostel = () => {
  const { name, address } = useParams();

  return (
    <div>
      {/* carousel */}
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full h-full">
          <div className="max-w-screen-xl  max-h-[350px] ">
            <CarouselDefault />
          </div>
        </div>
        <div className="container my-5 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-1">
                <GradeIcon className="text-red-500" />
                <GradeIcon className="text-red-500" />
                <GradeIcon className="text-red-500" />
                <GradeIcon className="text-red-500" />
                <StarBorderIcon />
              </div>
              <p className="text-lg font-semibold mt-2 mb-1">{name}</p>
              <p>{address}</p>
            </div>
            <div className="md:col-span-1 text-right">
              <FavoriteBorderIcon />
              <p className="me-2">0</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="md:col-span-1">
              <img src={first} alt="maleimage" className="h-10" />
              <p className="mt-3">
                <span className="text-lg font-semibold italic text-red-500">
                  &#8377; 4500/-
                </span>{" "}
                per month
              </p>
            </div>
            <div className="md:col-span-1 text-right mb-3">
              <Link to="/">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">
                  Book
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Amenities />
      <Reviews />
    </div>
  );
};

export default InsideHostel;
