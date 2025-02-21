import React from "react";
import { Link } from 'react-router-dom';
import HeroFeature from "../../assets/images/HeroFeatures.png.webp";

const Features = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 bg-gray-50">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          What makes <span className="text-blue-500">Bitrix24 better than 99%</span> of other solutions on the market?
        </h2>
        <ul className="space-y-2 text-gray-600">
          <li>✅ Replaces all your current SaaS solutions</li>
          <li>✅ Free forever for unlimited users</li>
          <li>✅ Easy to migrate your data from other systems or CRMs</li>
          <li>✅ Integrated with all your favorite services and apps</li>
          <li>✅ Used, loved, and trusted by 15,000,000+ users worldwide</li>
          <li>✅ <span className="font-bold text-green-600">100% flat fee:</span> predictable costs, no per-user pricing</li>
        </ul>
        <button   className="bg-[rgb(175,243,0)] text-white px-6 py-2 rounded-full font-semibold hover:bg-[rgb(190,243,0)] items-center  ">
          
          <Link to="/register" >START FOR FREE</Link>
         
        </button>
        
        {/* <Link to="/register" className="px-6 py-2 bg-[rgb(175,243,0)] text-gray-900 rounded-md  font-semibold hover:bg-[rgb(190,243,0)]">START FOR FREE</Link> */}
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={HeroFeature}
         
          className="max-w-full md:max-w-lg"
        />
      </div>
    </section>
  );
};

export default Features;