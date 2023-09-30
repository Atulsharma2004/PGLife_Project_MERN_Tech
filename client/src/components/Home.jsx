import bg from "../image/img/bg.png";
import delhi from "../image/img/delhi.png";
import lucknow from "../image/img/Lucknow.jpg";
import bengaluru from "../image/img/bangalore.png";
import mumbai from "../image/img/mumbai.png";
import { Link } from "react-router-dom";
import LibraryLink from "./LibraryLink";
// import Footer from './Footer';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchCity, setSearchCity] = useState("");
  const navigate = useNavigate();

  const cities = {
    delhi: "Delhi",
    mumbai: "Mumbai",
    bangalore: "Bangalore",
    lucknow: "Lucknow",
  };

  const handleCitySearch = (e) => {
    e.preventDefault();
    const lowerCaseSearch = searchCity.toLowerCase();

    // Check if the lowercase search term matches a city
    if (cities[lowerCaseSearch]) {
      // Redirect to the city card list page based on the matched city
      navigate(`/list/${encodeURIComponent(cities[lowerCaseSearch])}`);
    } else {
      // Handle the case where the entered city is not found
      alert("City not found");
    }
  };
  return (
    <>
      {/* {{!-- ----------- content part start ----------------- --}} */}
      <div
        className=" banner-container  mx-auto max-w-screen-xl pt-12 h-[28rem] md:h-[32rem] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.3)), url(${bg})`,
        }}
      >
        <h2 className="white pb-3 mt-32 text-2xl md:mt-44 md:text-4xl">
          Happiness per Square Foot
        </h2>
        <div className="flex items-center justify-center mt-4">
          <form id="search-form" onSubmit={handleCitySearch}>
            <div className="flex items-center">
              <div className="flex border border-purple-200 rounded">
                <input
                  type="text"
                  className="block input-city w-full md:px-4 px-2 md:py-2 py-1 text-purple-700 bg-white border rounded-md  focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search..."
                  id="city"
                  name="city"
                  value={searchCity} // Set the input value
                  onChange={(e) => setSearchCity(e.target.value)}
                />
                <button
                  type="submit"
                  className="md:px-4 px-2 text-white bg-green-400 border-l rounded "
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* {{!-- ----------- city card part start ----------------- --}} */}
      <div className="">
        <h1 className="city-heading mt-8">Major Cities</h1>
        <div className="flex md:flex-row flex-col  justify-center lg:gap-8 md:gap-4 gap:3">
          <div className="city-card-container ">
            <Link to="/list/Delhi">
              <div className="city-card rounded-full">
                <img src={delhi} className="city-img" alt="city1" />
              </div>
            </Link>
          </div>

          <div className="city-card-container ">
            <Link to="/list/Mumbai">
              <div className="city-card rounded-full">
                <img src={mumbai} className="city-img" alt="city2" />
              </div>
            </Link>
          </div>

          <div className="city-card-container ">
            <Link to="/list/Bangalore">
              <div className="city-card rounded-full">
                <img src={bengaluru} className="city-img" alt="city3" />
              </div>
            </Link>
          </div>

          <div className="city-card-container ">
            <Link to="/list/Lucknow">
              <div className="city-card rounded-full">
                <img src={lucknow} className="city-img" alt="city4" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* {{!-- ----------- city card part end ----------------- --}} */}

      <LibraryLink />

      {/*
    <LibraryLink />
    <Footer /> */}
    </>
  );
};

export default Home;
