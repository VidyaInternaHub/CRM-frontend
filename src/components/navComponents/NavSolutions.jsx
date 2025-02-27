import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { NavSolutionsData } from '../../data/ComponentsData';

const NavSolutions = () => {
    const [openContent, setOpenContent] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
         const {tabs,solutionButton}= NavSolutionsData;
  

    const handleContent = (id) => {

        if (activeTab === id) {
            setActiveTab(0)
            setOpenContent(false)
        }
        else {
            setActiveTab(id)
            setOpenContent(true)
        }

    }

    return (
        <>
            {/* For large devices */}
            <section className='lg:block hidden w-full '>
                <div className='grid grid-cols-5   xl:w-[95%] w-full m-auto'>
                    {
                        tabs.map((tab) => (
                            <div key={tab.id} className='flex flex-col gap-y-4 justify-start items-start  py-5 px-2  text-font-lg '>
                                <div className='w-full flex justify-start gap-x-2 bg-slate-2 text-blue-main hover:bg-blue-main hover:text-white p-6 rounded-full group'>
                                    <span className=' '>{tab.icon}</span>
                                    <span className='font-bold text-black group-hover:text-white'>{tab.label}</span>
                                </div>
                                <div>
                                    <ul className='flex flex-col gap-y-4 justify-center items-start'>
                                        {tab.content.map((item, index) => (
                                            <li key={index} className='hover:text-blue-main ml-5 text-font-lg'><a href="_">{item}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-end  xl:w-[90%] w-full m-auto '>
                    <a href={solutionButton.link} className='flex items-center gap-2 cursor-pointer'>
                    <span className='hover:text-blue-main'>{solutionButton.text}</span>
                    <span><FaAngleRight fill='#409eef' /></span>
                    </a>
                </div>
            </section>

            {/* Small devices */}

            <section className='lg:hidden block bg-white '>
                <div className='w-full flex flex-col'>
                    {
                        tabs.map((tab) => (
                            <div className='flex flex-col'
                                key={tab.id}
                            >
                                <div key={tab.id} className={`relative flex justify-between items-center px-4 py-3 w-full ${activeTab === tab.id && 'bg-slate-2'} `}
                                    onClick={() => handleContent(tab.id)}
                                >
                                    <div className={`w-full flex justify-start  gap-x-2 text-font-sm text-gray-600  hover:text-blue-main group ${activeTab===tab.id &&'text-blue-main'}`}>
                                        <span className={` ${activeTab === tab.id && 'text-blue-main'}`}>{tab.icon}</span>
                                        <span className={`font-bold text-black group-hover:text-blue-main ${activeTab === tab.id && 'text-blue-main'}`}>{tab.label}</span>
                                    </div>

                                    <div>
                                        {
                                            openContent && activeTab === tab.id ? <span><FaAngleUp fill='blue-main' /></span> :
                                                <span><FaAngleDown /></span>
                                        }
                                    </div>
                                </div>
                                {
                                    openContent && activeTab === tab.id && <div className='w-full'
                                        onClick={() => handleContent(tab.id)}
                                    >
                                        <ul className='flex flex-col justify-center items-start w-full list-disc text-gray-700'>
                                            {tabs[activeTab - 1].content.map((item, index) => (
                                                <div key={index} className='flex flex-col  w-full px-4 cursor-pointer'>
                                                    <li key={index} className='hover:text-blue-main text-font-sm ml-4 py-2'><a href="_">{item}</a></li>
                                                    <hr className='h-[1px] bg-gray-300 w-full' />
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                }
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default NavSolutions;





