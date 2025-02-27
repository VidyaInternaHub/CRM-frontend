import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProgressBar from '../common/ProgressBar';
import {HeroContentData} from '../../data/ComponentsData'

const HeroContent = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [progress, setProgress] = useState(0);
    const {title,tabs,solutionTab,solutionButton}=HeroContentData;
   
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev % tabs.length) + 1);
            setProgress(0);
        }, 5000);

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    return 0;
                }
                return prev + 1;
            });
        }, 50);

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, [tabs.length, activeTab]);

    const handleTabClick = (id) => {
        setActiveTab(id);
        setProgress(0);

    };
    const handlePreviousTab = () => {
        setActiveTab((prev) => (prev === 1 ? tabs.length : prev - 1));
        clearInterval();
    };

    const handleNextTab = () => {
        setActiveTab((prev) => (prev === tabs.length ? 1 : prev + 1));
        clearInterval();
    };


    return (
        <section className=' w-full overflow-x-hidden p-10'>
            <h1 className='lg:text-font-3xl  text-font-2xl  text-center mt-10'>
                {title}
            </h1>
            <div className='relative w-screen flex flex-col items-center mt-4'>
                <ul className='w-10/12 lg:flex justify-between items-center gap-8 m-auto mt-6  hidden'>
                    {tabs.map((tab) => (
                        <li
                            key={tab.id}
                            className={`relative flex flex-col items-center gap-2 cursor-pointer ${activeTab === tab.id ? 'text-blue-main' : 'text-black'}`}
                            onClick={() => handleTabClick(tab.id)}
                        >
                            <button className={`${activeTab === tab.id ? 'bg-blue-main text-[white]' : 'bg-blue-50 text-blue-main'} p-1 `}>
                                {tab.icon}
                            </button>
                            <span className={`text-font-xl  hover:text-blue-main ${activeTab === tab.id ? 'text-blue-main' : ''}`}>
                                {tab.label}
                            </span>

                            <div className='absolute bottom-0 left-0 w-full h-1 bg-blue-blue-main bg-opacity-40'>
                                {activeTab === tab.id && <ProgressBar progress={progress} />}
                            </div>

                        </li>

                    ))}
                    <li className='flex flex-col items-center cursor-pointer text-black-1'>
                        <a href={solutionTab.link} className='flex flex-col items-center'>
                            <span className='text-blue-main'>
                              {solutionTab.icon}
                            </span>
                            <span className="ml-2 text-black hover:text-blue-main text-xl ">
                                {solutionTab.text}
                            </span>
                        </a>
                    </li>
                </ul>
                <div className="absolute bottom-0 w-10/12 h-[3px] bg-blue-main bg-opacity-20"></div>
            </div>
            <div className='w-10/12 m-auto lg:grid lg:grid-cols-2 lg:gap-8 mt-10 flex flex-col-reverse gap-4'>
                <div className="mt-10 text-left flex flex-col items-start gap-6">
                    <h2 className="text-font-2xl md:text-font-xl leading-6 font-bold ">{tabs[activeTab - 1].content.title}</h2>
                    <ul className='my-4'>
                        {tabs[activeTab - 1].content.points.map((point) => (
                            <li key={point.description} className="flex items-start justify-start md:text-font-xl text-lg gap-4">
                                <span className='text-blue-main '>{point.icon}</span>
                                <span className="ml-2 text-gray-700 text-left">{point.description}</span>
                            </li>
                        ))}

                    </ul>
                    <a href={solutionButton.link} className="mt-4 bg-green-button hover:opacity-90 text-black font-semibold p-4 rounded-full text-center sm:text-font-base text-font-sm">
                        {solutionButton.text}
                    </a>
                </div>
                <div className='lg:hidden flex justify-between items-center'>
                    <button className='bg-blue-main p-2'
                        onClick={handlePreviousTab}
                    >
                        <FaArrowLeft fill='white' />
                    </button>

                    <span className='text-font-2xl text-blue-main'>{tabs[activeTab - 1].label}</span>

                    <button className='bg-blue-main p-2'
                        onClick={handleNextTab}
                    >
                        <FaArrowRight fill='white' />
                    </button>

                </div>
                <div className="mt-5">
                    {tabs[activeTab - 1].content.image && (
                        <img src={tabs[activeTab - 1].content.image} alt="Image" className="w-full" />
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroContent;
