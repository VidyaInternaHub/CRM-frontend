import React, { useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
const NavPartners = () => {

    const [openContent, setOpenContent] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            id: 1,
            label: "FOR CLIENTS",
            icon: (
                <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.592 13.086s.705 2.557 1.084 4.374a.484.484 0 0 1-.339.565c-2.129.62-4.555.972-7.13.975h-.075c-3.253-.004-6.27-.566-8.749-1.52a.49.49 0 0 1-.301-.557c.255-1.26.561-2.732.713-3.307.285-1.087 1.887-1.895 3.36-2.516.385-.162.617-.292.852-.423a8.06 8.06 0 0 1 .842-.42 2.4 2.4 0 0 0 .052-.609l.652-.076s.086.153-.052-.745c0 0-.732-.188-.766-1.619 0 0-.55.18-.584-.687a2.23 2.23 0 0 0-.096-.5c-.104-.382-.197-.723.28-1.02l-.345-.899S4.63.627 6.216.91c-.644-.998 4.786-1.829 5.146 1.232.142.922.142 1.86 0 2.783 0 0 .811-.091.27 1.42 0 0-.298 1.086-.756.84 0 0 .074 1.375-.647 1.608 0 0 .052.732.052.782l.602.09s-.016.61.102.677c.55.348 1.152.611 1.786.781 1.872.466 2.82 1.264 2.82 1.963z"></path><path d="m23.913 13.77.067 1.295a.493.493 0 0 1-.346.499c-1.611.493-3.47.889-5.503 1.16h-.585c-.035-.477-.484-2.129-.744-3.087-.103-.38-.177-.652-.183-.697-.034-.903-.86-1.71-2.27-2.26.107-.14.198-.289.273-.446a1.83 1.83 0 0 1 .749-.532l.022-.707-1.548-.466s-.398-.179-.438-.179c.046-.108.104-.212.171-.31.03-.076.218-.643.218-.643-.226.28-.49.527-.786.736.27-.46.5-.943.686-1.44a8.84 8.84 0 0 0 .246-1.46 20.32 20.32 0 0 1 .496-2.656c.16-.436.444-.82.819-1.111.553-.37 1.199-.591 1.87-.64h.08c.673.048 1.32.27 1.874.64a2.5 2.5 0 0 1 .82 1.11c.223.875.389 1.761.495 2.656.048.481.134.958.259 1.426.186.507.411 1 .675 1.474a3.916 3.916 0 0 1-.788-.735s.146.515.175.59c.08.116.152.236.214.36-.038 0-.438.18-.438.18l-1.548.466.022.707c.293.112.551.295.749.532.093.227.242.43.433.59.373.126.733.285 1.075.477a4.77 4.77 0 0 0 1.674.527c.593.094.967 1.016.967 1.016l.048.924v.004z"></path></svg>
            ),
            content: ["Partner directory","For personal consultation"]
        },
        {
            id: 2,
            label: "FOR PARTNERS",
            icon: (
<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2.973 9.527c-.14.233-.41.242-.573.024-.074-.1-.123-.217-.195-.317a898.12 898.12 0 0 0-1.86-2.565C.23 6.513.11 6.361 0 6.216L4.088 0c.152.075.312.157.474.234 1.087.515 2.205.931 3.393 1.123.725.117 1.05.113 1.945-.004-.058.094-.088.185-.15.233-.21.16-.431.306-.65.454-.06.04-.132.064-.194.101-.337.202-.71.168-1.073.158-1.179-.032-2.29-.326-3.306-.953-.01-.006-.02-.009-.05-.02L1.326 6.208l-.052-.025.072.1c.544.723 1.083 1.45 1.525 2.245.123.221.22.452.194.713a.71.71 0 0 1-.092.286zm16.729.292 1.061-.111c.157.378.2.784.128 1.198-.126.714-.498 1.257-1.116 1.613-.092.053-.121.11-.133.213-.107.946-.595 1.604-1.459 1.945-.19.075-.281.164-.348.357a2.15 2.15 0 0 1-1.297 1.344 1.976 1.976 0 0 1-1.472.002c-.072-.028-.11-.024-.157.046-.366.543-.868.859-1.509.945-.513.07-.98-.048-1.407-.345-.345-.24-.691-.477-1.045-.722l.518-.866c.362.251.715.486 1.058.735.625.452 1.483.096 1.707-.607a1.941 1.941 0 0 0-.099-.072c-.809-.56-1.617-1.12-2.427-1.679-.133-.092-.213-.208-.202-.378a.393.393 0 0 1 .264-.362c.14-.056.268-.014.387.069l2.056 1.422c.377.262.76.516 1.13.786.23.168.482.185.73.113.477-.139.775-.47.893-.97.024-.1.003-.16-.085-.22-1.5-1.033-2.997-2.07-4.494-3.106-.186-.129-.261-.29-.221-.472a.39.39 0 0 1 .582-.26c.036.022.07.047.106.071 1.52 1.051 3.041 2.1 4.555 3.159.172.12.318.124.486.044.479-.226.735-.61.768-1.15.005-.084-.024-.143-.098-.193-1.74-1.2-3.478-2.404-5.216-3.607-.285-.197-.272-.581.025-.729a.362.362 0 0 1 .39.036l.837.58c1.444.997 2.89 1.993 4.33 2.996.108.075.19.074.299.021.651-.312.931-1.174.495-1.81-.01-.012-.015-.027-.02-.036zm-9.755 3.367c.766.096 1.254.919.948 1.614-.08.181-.194.346-.297.515-.209.347-.401.706-.636 1.033-.329.458-.971.548-1.43.23a23.526 23.526 0 0 1-2.306-1.852c-.858-.77-1.71-1.546-2.564-2.32-.234-.21-.435-.449-.545-.752-.108-.296-.101-.587.07-.863.21-.333.418-.666.623-1.002.277-.457.92-.646 1.436-.42.28.123.465.301.654.637a1.16 1.16 0 0 1 .877-.308c.245.012.47.099.664.253.39.31.63.84.371 1.476.557-.2 1.053-.114 1.438.35.388.468.383.975.033 1.512.235-.102.445-.13.664-.103zM23.834 6.62c.06.095.025.157-.022.23-.452.714-1.07 1.227-1.818 1.582-.43.204-.878.352-1.344.453-.238.026-.477.056-.716.077a.278.278 0 0 1-.158-.04c-.565-.344-1.127-.693-1.69-1.04l-1.691-1.038-1.464-.902-1.701-1.044c-.165-.1-.325-.207-.493-.3a.19.19 0 0 0-.153-.003c-.665.319-1.317.668-1.992.96-.77.332-1.567.409-2.364.072-.41-.173-.73-.464-.993-.823-.234-.32-.043-.736.222-.874.929-.486 1.812-1.051 2.702-1.604.324-.201.643-.412.972-.602.328-.19.685-.3 1.057-.353a.602.602 0 0 1 .18.01c1.383.233 2.766.468 4.15.699a.372.372 0 0 0 .214-.036c.866-.437 1.73-.878 2.592-1.32.067-.035.11-.043.176.016.51.463.94.998 1.36 1.544 1.07 1.39 2.03 2.856 2.974 4.336z"></path></svg>
            ),
            content: ["Become Bitrix24 partner", "Partner login"],
        }
    ]

    const handleContent = (id) => {
        
        if (activeTab===id) {
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
        <section className='lg:block hidden absolute top-[100%] left-0 right-0 bg-white rounded-b-2xl shadow-lg p-6 z-10'>
            <div className='grid grid-cols-2   xl:w-[90%] w-full m-auto'>
                {
                    tabs.map((tab) => (
                        <div key={tab.id} className='flex flex-col gap-y-4 justify-start items-start  py-5 px-2  text-sm '>
                            <div className='w-full flex justify-start gap-x-2 bg-slate-100 text-blue-main hover:bg-blue-main hover:text-white p-6  rounded-full group'>
                                <span className=' '>{tab.icon}</span>
                                <span className='font-bold text-black group-hover:text-white'>{tab.label}</span>
                            </div>
                            <div>
                                <ul className='flex flex-col gap-y-4 justify-center items-start'>
                                    {tab.content.map((item, index) => (
                                       <div className='flex gap-2 justify-start items-center'>
                                        {(tab.id===2) && <FaExternalLinkAlt fill='blue-main'/> }
                                         <li key={index} className='hover:text-blue-main  text-lg'><a href="">{item}</a></li>
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

        <section className='lg:hidden block absolute top-[100%] left-0 right-0 bg-white rounded-b-2xl shadow-lg p-6'>
            <div className='w-full flex flex-col'>
                {
                    tabs.map((tab) => (
                        <div className='flex flex-col'
                            key={tab.id}
                        >
                            <div key={tab.id} className={`relative flex justify-between items-center p-2 w-full rounded-full  ${activeTab === tab.id && 'bg-slate-100'} border-gray-100 border-spacing-1`}
                                onClick={() => handleContent(tab.id)}
                            >
                                <div className='w-full flex justify-start  gap-x-2  text-gray-400  hover:text-blue-main group'>
                                    <span className={` ${activeTab === tab.id && 'text-blue-main'}`}>{tab.icon}</span>
                                    <span className={`font-bold text-black text-font-sm group-hover:text-blue-main ${activeTab === tab.id && 'text-blue-main'}`}>{tab.label}</span>
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
                                                <li key={index} className='hover:text-blue-main  text-font-sm'><a href="">{item}</a></li>
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
    )
}

export default NavPartners

