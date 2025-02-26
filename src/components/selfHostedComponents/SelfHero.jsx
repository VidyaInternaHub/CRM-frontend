import React from "react";
import { Link } from 'react-router-dom';
const SelfHero = () => {
    return (
       <section className=" px-10 py-20 h-64  flex justify-between items-center  text-white bg-gradient-to-r from-cyan-500 to-blue-500">
         <h1 className="text-[35px] mt-16">Bitrix24 On-Premise Edition</h1>
         <button className="bg-[rgb(175,243,0)] hover:bg-[rgb(190,243,0)] text-black font-bold mt-16 p-2 item-center px-6 rounded-full shadow-md transition-all">
            
            <Link to="/" >DOWNLOAD</Link>  
                 
         </button>
       </section>
       
   );
 };



 export default SelfHero;