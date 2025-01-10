import React from "react";
import bannerImg from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div>
      <img
        className="h-screen w-screen overflow-hidden bg-cover bg-no-repeat"
        src={bannerImg}
        alt="verification image"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white gap-4">
        <h1 className="text-sm ">Welcome to Our Company</h1>
        <h1 className="text-4xl font-bold">We Are Creative</h1>
        <div className="flex  gap-3 ">
          <Link className="px-3 py-2 text-green-500 bg-gray-300 rounded">
            About Company
          </Link>
          <Link className="px-3 py-2 text-green-500 bg-gray-300 rounded">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
