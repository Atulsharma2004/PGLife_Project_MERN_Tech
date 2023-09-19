import PropTypes from "prop-types";
import cover from "../image/coverImage.jpeg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import jsonData from "../Hosteldata.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
// import CityListHead from './CityListHead';

const List = () => {
  const { city } = useParams();

  if (city === "Delhi") {
    return <DelhiHostels hostel={jsonData[1].hostels} />;
  } else if (city === "Bengaluru") {
    return <BengaluruHostels hostel={jsonData[0].hostels} />;
  } else if (city === "Lucknow") {
    return <LucknowHostels hostel={jsonData[2].hostels} />;
  } else if (city === "Mumbai") {
    return <MumbaiHostels hostel={jsonData[3].hostels} />;
  }
};

const HostelCard = ({ host }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4 m-2 w-100 md:w-full">
      <div className="md:w-48">
        <img
          src={cover}
          className="h-48 w-full rounded-lg object-cover"
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
              <FavoriteIcon
                className="text-red-500 ml-2 cursor-pointer"
                onClick={handleLikeClick}
              />
            ) : (
              <FavoriteBorderIcon
                className="text-red-500 ml-2 cursor-pointer"
                onClick={handleLikeClick}
              />
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
            <Link to={`/insideHostel/${host.name}/${host.address}`}>
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

const BengaluruHostels = ({ hostel }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {hostel &&
        hostel.map((host) => {
          return (
            <div className="w-full md:w-1/2" key={host.id}>
              <HostelCard host={host} />
            </div>
          );
        })}
    </div>
  );
};

BengaluruHostels.propTypes = {
  hostel: PropTypes.array.isRequired,
};

const DelhiHostels = ({ hostel }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {hostel &&
        hostel.map((host) => {
          return (
            <div className="w-full md:w-1/2" key={host.id}>
              <HostelCard host={host} />
            </div>
          );
        })}
    </div>
  );
};

DelhiHostels.propTypes = {
  hostel: PropTypes.array.isRequired,
};

const LucknowHostels = ({ hostel }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {hostel &&
        hostel.map((host) => {
          return (
            <div className="w-full md:w-1/2" key={host.id}>
              <HostelCard host={host} />
            </div>
          );
        })}
    </div>
  );
};

LucknowHostels.propTypes = {
  hostel: PropTypes.array.isRequired,
};

const MumbaiHostels = ({ hostel }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {hostel &&
        hostel.map((host) => {
          return (
            <div className="w-full md:w-1/2" key={host.id}>
              <HostelCard host={host} />
            </div>
          );
        })}
    </div>
  );
};

MumbaiHostels.propTypes = {
  hostel: PropTypes.array.isRequired,
};

// Define similar components for other cities (Delhi, Lucknow, Mumbai) as needed.

export default List;
