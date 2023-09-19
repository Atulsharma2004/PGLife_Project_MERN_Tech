// import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
// import { Carousel } from 'react-responsive-carousel';
import BoltIcon from "@mui/icons-material/Bolt";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BathroomIcon from "@mui/icons-material/Bathroom";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

const Amenities = () => {
  return (
    <div>
      <section className="mt-5 mb-4">
        <div
          style={{ backgroundColor: "rgb(231,224,224)" }}
          className="px-4 md:px-12  py-5 m-auto rounded-lg"
        >
          <h1 className="text-center mb-8 font-bold text-3xl md:text-4xl lg:text-5xl">
            Amenities
          </h1>
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-4">
            {/* Links */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <h5 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">
                Links
              </h5>
              <ul className="list-disc list-inside text-black">
                <li className="flex items-center">
                  <BoltIcon className="w-5 h-5 mr-2" />
                  Power Backup
                </li>
                <li className="flex items-center">
                  <LocalParkingIcon className="w-5 h-5 mr-2" />
                  Parking
                </li>
              </ul>
            </div>

            {/* Common Area */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <h5 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">
                Common Area
              </h5>
              <ul className="list-disc list-inside text-black">
                <li className="flex items-center">
                  <SignalWifi4BarIcon className="w-5 h-5 mr-2" />
                  Wifi
                </li>
                <li className="flex items-center">
                  <DesktopWindowsIcon className="w-5 h-5 mr-2" />
                  TV
                </li>
                <li className="flex items-center">
                  <GasMeterIcon className="w-5 h-5 mr-2" />
                  Water Purifier
                </li>
                <li className="flex items-center">
                  <RestaurantMenuIcon className="w-5 h-5 mr-2" />
                  Dining
                </li>
                <li className="flex items-center">
                  <LocalLaundryServiceIcon className="w-5 h-5 mr-2" />
                  Washing Machine
                </li>
              </ul>
            </div>

            {/* Bedroom */}
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <h5 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">
                Bedroom
              </h5>
              <ul className="list-disc list-inside text-black">
                <li className="flex items-center">
                  <BedroomChildIcon className="w-5 h-5 mr-2" />
                  Bed With Mattress
                </li>
                <li className="flex items-center">
                  <AcUnitIcon className="w-5 h-5 mr-2" />
                  Air Conditioner
                </li>
              </ul>
            </div>

            {/* Washroom */}
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <h5 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">
                Washroom
              </h5>
              <ul className="list-disc list-inside text-black">
                <li className="flex items-center">
                  <BathroomIcon className="w-5 h-5 mr-2" />
                  Geyser
                </li>
                <li className="flex items-center">
                  <WaterDropIcon className="w-5 h-5 mr-2" />
                  Water Supply
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
