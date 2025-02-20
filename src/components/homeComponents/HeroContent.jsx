import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProgressBar from '../common/ProgressBar';
import {NavContentData} from '../../data/ComponentsData'

const HeroContent = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [progress, setProgress] = useState(0);
    const {title,tabs,solutionTab,solutionButton}=NavContentData;
   
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8063 17.5909C12.1509 18.1556 9.84412 15.8482 10.409 13.1933C10.6761 11.9379 11.9376 10.6763 13.193 10.4092C15.8479 9.84407 18.1556 12.151 17.5907 14.8066C17.2944 16.1994 16.1991 17.2947 14.8063 17.5909ZM20.8011 12.3323C20.6697 11.7952 20.4795 11.2813 20.2327 10.8009C20.2223 10.7806 20.2247 10.7563 20.239 10.7386L21.3992 9.29997C21.651 8.98976 21.6396 8.54345 21.3741 8.24408L20.6387 7.41639C20.3721 7.11732 19.9301 7.05408 19.5929 7.26711L18.0116 8.2612C17.326 7.78223 16.5508 7.42671 15.7149 7.21724C15.6927 7.21167 15.6759 7.19357 15.6721 7.171L15.3689 5.34909C15.304 4.95545 14.9634 4.66663 14.5635 4.66663H13.4553C13.0562 4.66663 12.7144 4.95545 12.6509 5.34909L12.3461 7.17168C12.3423 7.1942 12.3255 7.21224 12.3034 7.21778C11.6269 7.38732 10.9915 7.65491 10.4094 8.00475C10.3898 8.01654 10.3651 8.01567 10.3465 8.00236L8.87329 6.95095C8.54919 6.71939 8.104 6.7556 7.82116 7.03786L7.03821 7.82138C6.75596 8.10423 6.71974 8.54943 6.95193 8.87354L8.0058 10.3497C8.01908 10.3683 8.02 10.393 8.00824 10.4126C7.6618 10.9902 7.397 11.6218 7.22763 12.2921C7.22203 12.3143 7.204 12.331 7.18151 12.3348L5.34893 12.6408C4.9559 12.7057 4.6665 13.0464 4.6665 13.4463V14.5537C4.6665 14.9535 4.9559 15.2942 5.34893 15.3591L7.18145 15.6651C7.20397 15.6689 7.22203 15.6857 7.2276 15.7078C7.36538 16.2551 7.56163 16.7786 7.81962 17.266C7.83036 17.2863 7.82809 17.311 7.81364 17.3289L6.65909 18.7588C6.4082 19.0688 6.41873 19.5154 6.68417 19.8145L7.41901 20.6422C7.6856 20.9418 8.12791 21.0039 8.46514 20.7914L10.0375 19.8036C10.0568 19.7915 10.0814 19.792 10.1002 19.8048C10.7713 20.2583 11.5284 20.5923 12.3399 20.7914L12.651 22.6508C12.7144 23.0444 13.0562 23.3333 13.4553 23.3333H14.5635C14.9634 23.3333 15.304 23.0445 15.3689 22.6508L15.6726 20.8285C15.6764 20.806 15.6932 20.7879 15.7154 20.7824C16.3831 20.6152 17.0103 20.3523 17.5869 20.0086C17.6065 19.997 17.631 19.9979 17.6496 20.0111L19.1856 21.1082C19.5091 21.3406 19.9546 21.3041 20.2372 21.021L21.0205 20.2377C21.3024 19.9557 21.3405 19.5108 21.1064 19.1861L20.013 17.653C19.9997 17.6343 19.9988 17.6097 20.0106 17.5901C20.358 17.0106 20.6242 16.3778 20.7927 15.7044C20.7982 15.6822 20.8163 15.6654 20.8388 15.6616L22.6507 15.3591C23.0449 15.2942 23.3332 14.9535 23.3332 14.5536V13.4462C23.3326 13.0464 23.0444 12.7057 22.6501 12.6408L20.8011 12.3323Z" fill="currentColor"></path>
                                </svg>
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
                                <span>{point.icon}</span>
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
