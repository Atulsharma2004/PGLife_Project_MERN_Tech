import PropTypes from "prop-types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { convertLength } from "@mui/material/styles/cssUtils";
import { likeHostel } from "../redux/productSlice.jsx";

const List = () => {
  const { city } = useParams();
  const productData = useSelector((state) => state.product);
  // console.log(productData)
  const selectedCityData = productData.productList.find(
    (item) => item.city === city
  );

  if (selectedCityData) {
    return <CityHostels hostels={selectedCityData.hostels} key={city} />;
  } else {
    // Handle the case where the selected city is not found
    return <div>City not found</div>;
  }
};

const HostelCard = ({ host }) => {
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
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4 m-2 w-100 md:w-full">
      <div className="">
        <img
          src={host.exteriorImage.url}
          className="h-56 md:w-56 w-full rounded-lg object-cover"
          alt="Hostel cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <div className="flex items-center justify-between space-x-1">
          <div>
            <GradeIcon className="text-red-500" />
            <GradeIcon className="text-red-500" />
            <GradeIcon className="text-red-500" />
            <GradeIcon className="text-red-500" />
            <StarBorderIcon />
          </div>
          <div>
            {liked ? (
              <div className="">
                <FavoriteIcon
                  className="text-red-500 ml-2 cursor-pointer"
                  onClick={handleLikeClick}
                />
                <p className="ml-2 text-center">{count}</p>
              </div>
            ) : (
              <>
                <FavoriteBorderIcon
                  className="text-red-500 ml-2 cursor-pointer"
                  onClick={handleLikeClick}
                />
                <p className="ml-2 text-center">{count}</p>
              </>
            )}
          </div>
        </div>
        <h4 className="mt-2 text-xl font-semibold">{host.name}</h4>
        <p className="mb-1">{host.address}</p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <img src={host.filter} alt="maleimage" className="h-10" />
            <p className="mt-3">
              <span className="text-lg font-semibold italic text-red-500">
                &#8377; {host.rent}/-
              </span>{" "}
              per month
            </p>
          </div>
          <div className="text-right mt-8">
            <Link
              to={`/insideHostel/${encodeURIComponent(
                host.name
              )}/${encodeURIComponent(host.address)}/${encodeURIComponent(
                host.filter
              )}/${encodeURIComponent(host.rent)}/${encodeURIComponent(
                host.exteriorImage.url
              )}/${encodeURIComponent(
                host.interiorImage.url
              )}/${encodeURIComponent(host.email)}/${encodeURIComponent(
                host.phone
              )}/${encodeURIComponent(host._id)}`}
            >
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

HostelCard.propTypes = {
  host: PropTypes.object.isRequired,
};

const CityHostels = ({ hostels }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {hostels &&
        hostels.map((host) => {
          return (
            <div className="w-full md:w-1/2" key={host._id}>
              <HostelCard host={host} key={host._id} />
            </div>
          );
        })}
    </div>
  );
};

// Define similar components for other cities (Delhi, Lucknow, Mumbai) as needed.

export default List;
