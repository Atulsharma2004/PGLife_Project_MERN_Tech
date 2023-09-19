import bg from "../image/img/bg.png";
import delhi from "../image/img/delhi.png";
import lucknow from "../image/img/Lucknow.jpg";
import bengaluru from "../image/img/bangalore.png";
import mumbai from "../image/img/mumbai.png";
// import about from '../image/img/about.jpg'
import { Link } from "react-router-dom";
// import CityList from './CityList';
import LibraryLink from "./LibraryLink";
// import Footer from './Footer';

const Home = () => {
  return (
    <>
      {/* {{!-- ----------- content part start ----------------- --}} */}
      <div
        className=" banner-container  mx-auto max-w-screen-xl pt-12 h-[28rem] md:h-[32rem] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(255, 255, 255, 0.3)), url(${bg})`,
        }}
      >
        {/* <form id="search-form" method="GET">
            <div className="input-group city-search">
                <input type="text" className="form-control input-city" id="city" name="city"
                    placeholder="Enter your city to search for PGs" />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-secondary">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </form> */}
        <h2 className="white pb-3 mt-32 text-2xl md:mt-44 md:text-4xl">
          Happiness per Square Foot
        </h2>
        <div className="flex items-center justify-center mt-4">
          <form id="search-form" method="GET">
            <div className="flex items-center">
              <div className="flex border border-purple-200 rounded">
                <input
                  type="text"
                  className="block input-city w-full md:px-4 px-2 md:py-2 py-1 text-purple-700 bg-white border rounded-md  focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Search..."
                  id="city"
                  name="city"
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

      {/* {{!-- ----------- container part end ----------------- --}} */}

      {/* {{!-- ----------- about part start ----------------- --}} */}

      {/* <div className="container px-4" id="about">
            <div className="row gx-5 mt-5">
                <h1 className="text-center mb-5">About Us</h1>
                <div className="col-md-6 shadow p-3 mb-5 bg-body rounded text-center mt-5 mx-auto">
                    <img src={about} alt="about" style={{height:"200px",width:'300px'}}/>
                </div>
                <div className="col-md-6  py-4 mt-5">                    
                    <h2>About</h2>
                    <p>This rental platform provides us facilities like :</p>
                    <ul>
                        <li>Provide sorted and detailed information about connected PGs</li>
                        <li>Provides e-libraries to reduce burden of weighted books and also free of cost <span className="badge text-bg-success">Additional</span></li>
                    </ul>

                     
                    <Link to="/about"><button className="shadow p-2 mb-3 bg-light rounded">About Page</button></Link>                  
                </div>
            </div>
    </div> */}

      {/* {{!-- ----------- about part end ----------------- --}} */}

      {/* {{!-- ----------- city card part start ----------------- --}} */}
      <div className="">
        <h1 className="city-heading mt-8">Major Cities</h1>
        <div className="flex md:flex-row flex-col  justify-center lg:gap-8 md:gap-4 gap:3">
          <div className="city-card-container ">
            <Link to="list/Delhi">
              <div className="city-card rounded-full">
                <img src={delhi} className="city-img" alt="city1" />
              </div>
            </Link>
          </div>

          <div className="city-card-container ">
            <Link to="list/Mumbai">
              <div className="city-card rounded-full">
                <img src={mumbai} className="city-img" alt="city2" />
              </div>
            </Link>
          </div>

          <div className="city-card-container ">
            <Link to="list/Bengaluru">
              <div className="city-card rounded-full">
                <img src={bengaluru} className="city-img" alt="city3" />
              </div>
            </Link>
          </div>

          <div className="city-card-container ">
            <Link to="list/Lucknow">
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
