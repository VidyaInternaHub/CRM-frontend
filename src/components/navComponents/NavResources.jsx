import React, { useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { NavResourcesData } from '../../data/ComponentsData';

const NavResources = () => {
    const [openContent, setOpenContent] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const { tabs } = NavResourcesData;

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
            <section className='lg:block hidden absolute top-[100%] left-0 right-0 bg-white rounded-b-2xl shadow-lg p-6 pb-6 z-10'>
                <div className='grid grid-cols-3   xl:w-[90%] w-full m-auto'>
                    {
                        tabs.map((tab) => (
                            <div key={tab.id} className='flex flex-col gap-y-4 justify-start items-start  px-2  text-font-lg '>
                                <div className='w-full flex justify-start gap-x-2 bg-slate-2 text-blue-main hover:bg-blue-main hover:text-white p-6  rounded-full group'>
                                    <span className=' '>{tab.icon}</span>
                                    <span className='font-bold text-black group-hover:text-white'>{tab.label}</span>
                                </div>
                                <div>
                                    <ul className='flex flex-col gap-y-4 justify-center items-start'>
                                        {tab.content.map((item, index) => (
                                            <div className='flex gap-2 justify-start items-center'>
                                                {((tab.id === 1 && index !== 0) || (tab.id === 2 && index === 0)) && <FaExternalLinkAlt fill='blue-main' />}
                                                <li key={index} className='hover:text-blue-main ml-5 text-font-sm'><a href="_">{item}</a></li>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>

            {/* Small devices */}

            <section className='lg:hidden block bg-white'>
                <div className='w-full flex flex-col'>
                    {
                        tabs.map((tab) => (
                            <div className='flex flex-col'
                                key={tab.id}
                            >
                                <div key={tab.id} className={`relative flex justify-between items-center px-4 py-2 w-full rounded-full  ${activeTab === tab.id && 'bg-slate-100'} border-gray-100 border-spacing-1`}
                                    onClick={() => handleContent(tab.id)}
                                >
                                    <div className='w-full flex justify-start  gap-x-2 text-font-sm  text-gray-400  hover:text-blue-main group'>
                                        <span className={`${activeTab === tab.id && 'text-blue-main'}`}>{tab.icon}</span>
                                        <span className={`font-bold text-black group-hover:text-blue-main ${activeTab === tab.id && 'text-blue-main'}`}>{tab.label}</span>
                                    </div>

                                    <div className='cursor-pointer'>
                                        {
                                            openContent && activeTab === tab.id ? <span><FaAngleUp fill='blue-main' /></span> :
                                                <span><FaAngleDown /></span>
                                        }
                                    </div>
                                </div>
                                {
                                    openContent && activeTab === tab.id && <div className='w-full'>
                                        <ul className='flex flex-col gap-y-2 justify-center items-start w-full list-disc text-gray-700'>
                                            {tabs[activeTab - 1].content.map((item, index) => (
                                                <div className='flex flex-col w-full px-4'>
                                                    <li key={index} className='hover:text-blue-main ml-5 text-font-sm py-2'><a href="_">{item}</a></li>
                                                    <hr className="h-[1px] bg-gray-50 w-full" />
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
    )
}

export default NavResources