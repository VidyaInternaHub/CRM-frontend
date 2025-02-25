import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const plans = [
 
  {
    name: "Basic",
    users: "5 users",
    storage: "24 GB",
    features: [
      "Collaboration",
      "Tasks & Projects",
      "CRM",
      "Bitrix24 Sign",
      "Drive",
      "Contact Center",
      "Website Builder",
      "Online Store",
     "Customer Support",
    ],
  },
  {
    name: "Standard",
    price: "Rs. 3,990",
    users: "50 users",
    storage: "100 GB",
    features: [
      "Collaboration",
      "Tasks & Projects",
      "CRM",
      "Bitrix24 Sign",
      "Drive",
      "Contact Center",
      "Website Builder",
      "Online Store",
      "Marketing",
      "Online Documents",
      "Customer Support",
      "Administration",
    ],
  },
  {
    name: "Professional",
    price: "Rs. 7,990",
    users: "100 users",
    storage: "1024 GB",
    mostPopular: true,
    features: [
      "Collaboration",
      "Tasks & Projects",
      "CRM (X5 CRM)",
      "Bitrix24 Sign",
      "Drive",
      "Contact Center",
      "Website Builder",
      "Online Store",
      "Marketing",
      "Online Documents",
      "e-Signature for HR",
      "Customer Support",
      "Sales Intelligence",
       "Automation",
       "HR",
       "Customer support",
        "Administration",
    ],
  },
  
  {
    name: "Enterprise",
    price: "Rs. 11,994",
    users: "250 users",
    storage: "3 TB",
   
    features: [
      "Collaboration",
      "Tasks & Projects",
      "CRM ",
      "Bitrix24 Sign",
      "Drive",
      "Contact Center",
      "Website Builder",
      "Online Store",
      "Marketing",
      "Online Documents",
      "e-Signature for HR",
      "Customer Support",
      "Sales Intelligence",
       "Automation",
       "HR",
       "Multiple branches",
       "Scalability",
       "Enterprise pack",
       "Customer support",
        "Administration",
    ],
  },
];

const PricingPlanTable = () => {
  const [billing, setBilling] = useState("annually");
  const [featureStates, setFeatureStates] = useState(
    plans.reduce((acc, plan) => {
      acc[plan.name] = plan.features.reduce((featAcc, feature) => {
        featAcc[feature] = false;
        return featAcc;
      }, {});
      return acc;
    }, {})
  );

  const toggleFeature = (planName, feature) => {
    setFeatureStates((prev) => ({
      ...prev,
      [planName]: {
        ...prev[planName],
        [feature]: !prev[planName][feature],
      },
    }));
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <h2 className="text-3xl text-gray-800 mb-6 text-center">
        One price for ALL users included within the plan limit
      </h2>
       
      <div className="flex flex-col items-end space-y-3  ">
      <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-md">
          Save up to 20%
        </span>
      <div className="relative flex border border-blue-500 rounded-md p-1 w-60">
        
        <button
          className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all ${
            billing === "monthly"
              ? "bg-blue-500 text-white"
              : "bg-transparent text-gray-700"
          }`}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all ${
            billing === "annually"
              ? "bg-blue-500 text-white"
              : "bg-transparent text-gray-700"
          }`}
          onClick={() => setBilling("annually")}
        >
          Annually
        </button>
      </div>

    </div>
    

      <div className="flex flex-wrap gap-6 justify-center  p-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="w-80 bg-white shadow-lg rounded-lg border border-blue-300  relative "
          >
            {plan.mostPopular && (
              <span className="absolute top-0 left-0 bg-blue-500 text-white px-3 py-1 rounded-bl-md text-sm">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-semibold text-blue-500 p-6">{plan.name}</h3>
            <p className="text-3xl font-bold text-gray-800 ml-6">{plan.price}</p>
            <p className="text-sm text-gray-600  ml-6">/ organization / month / billed annually</p>
            

            <div className="bg-blue-100 text-blue-500 text-sm font-medium px-3 py-1 mt-3 rounded-full inline-block ml-6">
              includes {plan.users}
            </div>
            <div className="p-4"> 
            <button className="mt-6 w-full bg-blue-400 text-white py-2 rounded-full hover:bg-blue-600 ">
              BUY
            </button>
            </div>

            <div className="  mt-4 border-t border-blue-300  p-3 w-lg bg-blue-50">
              
              <p className="flex items-center text-gray-700 ml-6">
                <span className="mr-2"><i class="fa fa-hdd-o" aria-hidden="true"></i></span> {plan.storage}
              </p>
              <p className="flex items-center text-gray-700 ml-6">
                <span className="mr-2"><i class="fa fa-user" aria-hidden ="true"></i></span> {plan.users}
              </p>
            </div>

            <div className="flex flex-col min-h-screen border-t border-blue-300 p-4 space-y-2 bg-blue-50  ">
        
              {plan.features.map((feature, i) => (
               
                  <div key={i} className="flex px-3  py-2 hover:rounded-full hover:bg-blue-100   ">
                  
                    {/* Toggle Switch with SVG */}
                    <button onClick={() => toggleFeature(plan.name, feature)}>
                      {featureStates[plan.name][feature] ? (
                       <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 40 20"
                       className="w-10 h-5"
                     >
                       {/* Outer Capsule */}
                       <rect
                         x="2"
                         y="2"
                         width="36"
                         height="16"
                         rx="8"
                         ry="8"
                         stroke="blue"
                         fill="none"
                         strokeWidth="2"
                       />
                       {/* Left Filled Area */}
                       <rect x="4" y="4" width="8" height="12" rx="6" ry="6" fill="blue" />
                       {/* Middle Bar */}
                       <rect x="12" y="4" width="5" height="12" fill="blue" />
                     </svg>
                     
                      ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 20"
                        className="w-10 h-5"
                      >
                        {/* Outer Capsule */}
                        <rect
                          x="2"
                          y="2"
                          width="36"
                          height="16"
                          rx="8"
                          ry="8"
                          stroke="blue"
                          fill="none"
                          strokeWidth="2"
                        />
                        {/* Left Filled Area (Only small part filled) */}
                        <rect x="4" y="4" width="5" height="12" rx="6" ry="6" fill="blue" />
                      </svg>
                      
                      )}
                    </button>
                    <span className="text-gray-700 ml-2">{feature}</span>
                    
                  </div>
                  
                ))}
            </div>
                
            
          </div>
        ))}
      </div>
      <div className="text-center max-w-lg mt-8  underline decoration-dotted  text-blue-400 text-xl font-semibold">
            
            <Link to="/" > Detaild plan comparison</Link>  
      </div>
      <div className="mt-20">
        <button className="bg-blue-500  hover:bg-blue-400 text-lg text-white  py-2 px-6 rounded-full shadow-md transition-all">
        <Link to="/" >   Save up to Rs. 310,000/mo with Bitrix24</Link>  
       
        </button>
      </div>
    </div>
  );
};

export default PricingPlanTable;