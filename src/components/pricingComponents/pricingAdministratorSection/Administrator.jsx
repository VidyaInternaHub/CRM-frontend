import React from "react";
import { Link } from 'react-router-dom';
import pricingImage from "../../../assets/images/CTA.webp";


const Administrator= () => {
  return (
    <section className="bg-white flex flex-col md:flex-row  items-center justify-center px-6 md:px-20 py-16">
      {/* Left Content */}
      <div className="max-w-2xl">
        <h1 className="text-4xl  text-gray-900 mb-4">
          Bitrix24 <br /> <h1 className="text-4xl  text-gray-900">On-premise Edition</h1>
        </h1>
        <p className="text-gray-700  mb-6 ">
          The on-premise edition of Bitrix24 offers supreme performance,
          enterprise-grade security, and complete customization. Designed to be
          hosted on your own server, this version of Bitrix24 comes with full
          access to the source code and API. An ideal choice for large
          enterprises and corporate entities.
        </p>
        {/* Buttons */}
        <div className="flex gap-2 ">
          <button className="bg-blue-500 text-sm w-lg text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-400 transition">
            <Link to="/" > ON-PREMISE FEATURES</Link>
            
          </button>
          <button className="border border-blue-500 text-sm w-lg text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition">
            ON-PREMISE PRICES
          </button>
        </div>
      </div>

      {/* Right Side Illustration */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
           src={pricingImage}
         
          className="max-w-full md:max-w-lg"
        />
      </div>
    </section>
  );
};

export default  Administrator;