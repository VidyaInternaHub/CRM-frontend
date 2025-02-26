import React from "react";
import { Link } from "react-router-dom";

const SelfNeedHelp = () => {
  return (
    <section className="bg-white">
      
      <div className="p-20 text-center">
        <h1 className="text-[30px] mb-6 ">
         Need help? Get hassle-free installation and customization services from our partners
        </h1>
        <p className="text-[20px] text-gray-900 mb-6">
          If you are looking for a perfect shortcut to success, this is it. Contact one of our partners in your area and have them install the on-premise version of Bitrix24 professionally. Our partners will deploy it on your server, customize the product to your business needs, and add all the integrations you might require.
        </p>
        <div>
            
          <button className="bg-blue-500 text-sm w-lg text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-400 transition  mb-6">
            <Link to="/" > YES, I'D LIKE TO SCHEDULE A DEMO WITH BITRIX24 PARTNER NEAR ME</Link>
            
          </button>
         
         <button className="border border-blue-500 text-sm w-lg text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition">
            <Link to="/" > NO, I'D LIKE TO DOWNLOAD AND INSTALL TRIAL VERSION MYSELF</Link>
          
          </button>
          </div>
         
        </div>
    </section>
  );
};

export default SelfNeedHelp;

