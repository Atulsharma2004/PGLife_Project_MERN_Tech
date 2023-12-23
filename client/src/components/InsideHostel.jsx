// import { Carousel } from "@material-tailwind/react";
// import first from "../image/1.jpg";
// import second from "../image/2.jpg";
// import third from "../image/3.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Amenities from "./Amenities";
import Reviews from "./Reviews";
import { Link, useNavigate, useParams } from "react-router-dom";
import CarouselDefault from "./CarouselDefault";
import { useDispatch, useSelector } from "react-redux";
import { likeHostel } from "../redux/productSlice.jsx";
import { useState } from "react";

const InsideHostel = () => {
  const { name, address, filter, rent, exteriorImage, interiorImage } =
    useParams();

  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const productData = useSelector((state) => state.product);
  // const likedHostels = productData.likedHostels;
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLikeClick = () => {
    if (userData.email) {
      if (liked) {
        // If already liked, decrease count and update liked status
        setCount(count - 1);
      } else {
        // If not liked, increase count and update liked status
        setCount(count + 1);
      }
      setLiked(!liked);
      //Update the 'count' state here
      dispatch(likeHostel(host._id));
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      {/* carousel */}
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full h-full">
          <div className="max-w-screen-xl  max-h-[350px] ">
            <CarouselDefault
              interiorImage={interiorImage}
              exteriorImage={exteriorImage}
            />
          </div>
        </div>
        <div className="container my-5 md:mx-auto px-0">
          <div className="grid grid-cols-1  md:gap-4">
            <div className="md:col-span-1">
              <div className="grid  grid-cols-1">
                <div className="flex items-center space-x-1">
                  <div className="me-auto">
                    <GradeIcon className="text-red-500" />
                    <GradeIcon className="text-red-500" />
                    <GradeIcon className="text-red-500" />
                    <GradeIcon className="text-red-500" />
                    <StarBorderIcon />
                  </div>
                  <div className="flex flex-col mt-6">
                    {liked ? (
                      <>
                        <FavoriteIcon
                          className="text-red-500 ml-2 cursor-pointer"
                          onClick={handleLikeClick}
                        />
                        <p className="text-center">{count}</p>
                      </>
                    ) : (
                      <>
                        <FavoriteBorderIcon
                          className="text-red-500 ml-2 cursor-pointer"
                          onClick={handleLikeClick}
                        />
                        <span className="text-center">{count}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <p className="md:text-lg text-md font-semibold mt-2 mb-1">
                {name}
              </p>
              <p className="md:text-md text-sm">{address}</p>
            </div>
          </div>
          <div className="grid grid-cols-1  gap-4 mt-4">
            <div className="md:col-span-1">
              <img src={filter} alt="maleimage" className="h-10" />
              <div className="mt-3 flex">
                <span className="text-lg font-semibold italic text-red-500">
                  &#8377; {rent}
                </span>{" "}
                per month
                <span className="ms-auto mb-3">
                  <Link to="/">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">
                      Book
                    </button>
                  </Link>
                </span>
              </div>
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
