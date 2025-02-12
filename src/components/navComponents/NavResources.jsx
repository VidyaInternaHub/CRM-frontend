import React, { useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const NavResources = () => {
    const [openContent, setOpenContent] = useState(false);
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {
            id: 1,
            label: "LEARN",
            icon: (
                <svg width="18" height="22" viewBox="0 0 18 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 16.203c0 .343-.29.621-.646.621H4.038c-.74 0-1.345.583-1.347 1.294 0 .712.606 1.294 1.347 1.294h13.316c.357 0 .646.278.646.621v1.346c0 .343-.29.621-.646.621H4.038C1.817 22 0 20.253 0 18.118V3.882C0 1.747 1.817 0 4.038 0h13.316c.357 0 .646.278.646.621v15.582z"></path></svg>
            ),
            content: ["Webinars", "Helpdesk", "Guides & API Documentation"]
        },
        {
            id: 2,
            label: "CONNECT",
            icon: (
                <svg width="25" height="23" viewBox="0 0 25 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M21.07 7.62H3.92c-.338 0-.61-.226-.61-.507v-2.08c0-.28.272-.505.61-.505h17.15c.34 0 .61.225.61.506v2.08c.068.28-.27.505-.61.505zm0 6.198H3.92c-.338 0-.61-.225-.61-.506v-2.08c0-.28.272-.505.61-.505h17.15c.34 0 .61.224.61.505v2.08c.068.281-.27.506-.61.506zM22.192.655H2.745C1.248.655 0 1.78 0 3.128v12.647c0 1.35 1.248 2.473 2.746 2.473h12.607c.188 0 .312.056.437.169l3.87 3.766c.374.337.998.112.998-.337v-3.092c0-.28.25-.506.562-.506h1.034c1.498 0 2.746-1.124 2.746-2.473V3.128C24.938 1.78 23.69.655 22.192.655z"></path></svg>
            ),
            content: ["Submit Ticket", "Contact local bitrix partner"],

        },
        {
            id: 3,
            label: "READ",
            icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.243 20V3.132C5.786.852 2.618.23 1.043.062.483.004 0 .468 0 1.056v14.648c0 .502.364.915.841.982 3.272.46 6.071 1.566 8.402 3.315zM2.652 9.188c1.856.287 3.452.787 4.787 1.506a.909.909 0 0 1 .366 1.2.837.837 0 0 1-1.15.381C5.497 11.652 4.08 11.208 2.4 10.95c-.466-.072-.789-.525-.72-1.011.07-.486.504-.822.97-.75zm4.787-2.332c-1.335-.72-2.931-1.22-4.787-1.507-.467-.072-.901.264-.97.75-.07.487.253.94.72 1.011 1.679.26 3.096.704 4.252 1.327a.838.838 0 0 0 1.151-.382.908.908 0 0 0-.366-1.2zM19.196 16.562c-1.66.262-5.552 1.089-8.439 3.35V3.129c2.218-1.676 4.937-2.716 8.157-3.12C19.488-.065 20 .39 20 .995V15.58c0 .49-.338.91-.804.983zm-6.688-5.868c1.335-.72 2.931-1.22 4.787-1.506.467-.072.901.264.97.75.07.486-.253.939-.72 1.01-1.679.26-3.096.704-4.252 1.327a.837.837 0 0 1-1.151-.382.908.908 0 0 1 .366-1.199zm4.787-5.345c-1.856.287-3.452.787-4.787 1.507a.908.908 0 0 0-.366 1.199.837.837 0 0 0 1.15.382c1.157-.623 2.574-1.067 4.254-1.327.466-.072.788-.524.72-1.01-.07-.487-.504-.823-.97-.75z"></path></svg>
            ),
            content: ["Latest articles", "Bitrix24 tips & updates",]
        }
    ]

    const handleContent = (id) => {
        setActiveTab(id)
        if (!id) {
            setOpenContent(!openContent)
        }
        else {
            setOpenContent(true)
        }
    }
    return (
        <>
            {/* For large devices */}
            <section className='lg:block hidden absolute top-[100%] left-0 right-0 bg-white rounded-b-2xl shadow-lg p-6 z-10'>
                <div className='grid grid-cols-3   xl:w-[90%] w-full m-auto'>
                    {
                        tabs.map((tab) => (
                            <div key={tab.id} className='flex flex-col gap-y-4 justify-start items-start  py-5 px-2  text-font-sm '>
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
                                    <div className='w-full flex justify-start  gap-x-2  text-gray-400  hover:text-blue-main group'>
                                        <span className=' '>{tab.icon}</span>
                                        <span className='font-bold text-black group-hover:text-blue-main'>{tab.label}</span>
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
                                                <div className='flex flex-col gap-1 w-full ml-4'>
                                                    <li key={index} className='hover:text-blue-main ml-5 text-font-sm'><a href="_">{item}</a></li>
                                                    {/* <hr className='h-[1px] bg-gray-300 w-full' /> */}
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