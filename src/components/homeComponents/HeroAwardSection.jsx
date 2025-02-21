import React from "react";
import AwardHighPerformance from "../../assets/images/bitrix24_Award_HighPerformer.webp";
import AwardGetapp from "../../assets/images/bitrix24_Award_Getapp.webp";
import AwardLeader from "../../assets/images/bitrix24_Award_Leader.webp";
import AwardSupport from "../../assets/images/bitrix24_Award_Support.webp";
import AwardCapterra from "../../assets/images/AwardCapterra.webp";
import AwardSoftware from "../../assets/images/bitrix24_Award_Software.webp";


const awards = [
  {
   
    imgSrc: AwardHighPerformance 
  },
  {
   
    imgSrc: AwardLeader
  },
  {
   
    imgSrc: AwardSupport
  },
  {
   
    imgSrc: AwardCapterra
  },
  {
   
    imgSrc: AwardSoftware
  },
  {
   
    imgSrc: AwardGetapp
  },
];

const HeroAwardsSection = () => {
  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-4xl  text-gray-800 mb-6">
        See why customers love Bitrix24
      </h2>
      <div className="py-8 flex flex-wrap justify-center gap-20">
        {awards.map((award, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={award.imgSrc}  className="h-28 w-full" />
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroAwardsSection;