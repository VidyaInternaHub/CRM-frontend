import { useState } from "react";
import { Link } from 'react-router-dom';

const faqData = [
  {
    question: "Is the 'free forever' plan really free?",
    answer:
      "Yes, it is! The free plan is a default account state, in which you can add an unlimited number of users and enjoy the available tools completely free of charge for as long as you wish. Please note that some tools like Telephony and apps from Bitrix24 Market are available only on the paid plans.",
  },
  {
    question: "Does Bitrix24 have a trial period?",
    answer:
      "Yes, Bitrix24 features a free 15-day trial period that allows you to test out most of the features available on our high-tier plans. The trial mode can be activated on the Subscription > Activate trial page in your cloud account. No credit card is required.",
  },
  {
    question: "What plan should I choose?",
    answer:[
      "One of the main points to consider is the size of your team (current and prospective) so check the user limit first. Next is the amount of functionality that you require–high-tier plans offer more advanced features and increased limits (see the plan comparison table).",
      "If you're not sure which plan is right for you, please contact our certified partners in your area. They provide pre-sale consultation, demonstration, training, and implementation services.",  
      "If you’re looking for enhanced customization and security options, Bitrix24 is also available in the self-hosted version.",
    ]
    },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards. Bank transfer is also available.",
  },
  {
    question: "Do you offer any discounts?",
    answer:
      "Yes, you can get a 20% discount by choosing annual billing instead of monthly.",
  },
  {
    question: "What’s the difference between annual and monthly billing?",
    answer:
      "The difference is how often you pay your subscription fee. The annual subscription has a 12-month billing cycle, which means that you pay a full subscription price every 12 months (please note that there are no installments available).",
  },
  {
    question: "Can I change my plan?",
    answer:
      "Yes, you can. Learn more about cloud subscription upgrades and downgrades here.",
   
  },
  {
    question: "How can I manage my billing?",
    answer:
      "The administrator of your Bitrix24 account can access the purchase history, invoices, payment details, and other information inside your account on the Subscription > Purchase History page. Learn more",
  },
  {
    question: "How do I cancel the automatic subscription renewal option?",
    answer:
      "Once you purchase a subscription, the auto-renewal option will be enabled by default. You can cancel the automatic renewal at any time on the Subscription > Purchase History page in your Bitrix24 account. This action will not affect your subscription expiration date. Learn more",
  },
  {
    question: "Will I be charged VAT/GST?",
    answer:
      "Your purchases of Bitrix24 products may be subject to VAT, GST, or other taxes as per the laws and regulations of your locality. If you are registered for VAT/GST purposes, please provide your registration number while checking out to have appropriate data in your Invoice or to have tax exemption if you meet the requirements of your country's tax exemption regulations.",
  },
  {
    question: "How can I get assistance with my project implementation?",
    answer:
      "Bitrix24 partners will make your Bitrix24 experience more pleasant and productive: from free product demo to advanced implementation, customization, and employee training. Bitrix24 partners can also help you set up an integration with a third-party app or service. Local partners will provide you support in your local language and timezone. Just fill in the form and get a personal offer from up to 5 partners. You can also browse our partner’s directory and hand-pick the right partner.",
  },
];

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="space-y-6 w-full max-w-4xl">
        <h2 className="text-4xl text-center mb-10">F.A.Q.</h2>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-blue-400 rounded-md shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left text-lg bg-white hover:bg-blue-50 transition-all rounded-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-gray-500">
                {openIndex === index ? (
                 <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 strokeWidth="2"
                 stroke="currentColor"
                 className="w-5 h-5 text-blue-400  border rounded-full border-blue-400"
               >
                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
               </svg>
                ) : (
                 
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-5 h-5 text-white border rounded-full border-blue-400 bg-blue-400"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>


                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 bg-blue-50 border-gray-300 rounded-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Button at the Bottom */}
      <div className="mt-8">
        <button className="bg-[rgb(175,243,0)] hover:bg-[rgb(190,243,0)] text-black font-bold py-3 px-6 rounded-full shadow-md transition-all">
          <Link to="/" >CHOOSE A PLAN</Link>  
        
        </button>
      </div>
    </div>
  );
};

export default PricingFAQ;