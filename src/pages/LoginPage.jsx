import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import FacebookImage from "../assets/images/LoginFacebook.png";
import GoogleImage from  "../assets/images/LoginGoogle.jpg";
import AppleImage from "../assets/images/LoginApple.webp";
import MicrosoftImage from "../assets/images/LoginMicrosoft.webp";
import MicrosoftLogoImage from "../assets/images/LoginMcrosoftLogo.png";
import xImage from "../assets/images/LoginX.png";
import ZoomImage from "../assets/images/LoginZoom.webp";

const LoginPage = () => {
    
    const [message, setMessage] = useState('Message will be shown here')
    return (
        <section className='bg-auth-bg  h-screen flex flex-row items-center justify-center overflow-x-hidden'>
            {/* Left Section */}
            <div className=' md:w-[40%] w-[30%] h-screen sm:flex flex-col justify-between p-6 hidden'>
                {/* Logo and Back Link */}
                <div className='w-full flex justify-center md:flex-row flex-col gap-4 items-center h-1/3'>
                    <div className='md:w-1/2 w-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273 53" fill="none" className='w-full'>
                            <path fillRule="evenodd" clipRule="evenodd" d="M37.689 51.822h9.422V17.667H37.69v34.155zM36.51 8.766c0-2.884 2.276-5.233 5.333-5.233 2.991 0 5.267 2.215 5.267 5.233 0 2.953-2.276 5.367-5.267 5.367-3.057 0-5.333-2.347-5.333-5.367zM55.446 43.844V26.978h-5.98v-7.23h5.98v-7.641l9.347-2.685V19.75h9.829l-2.13 7.229h-7.699v14.525c0 3.03.962 4.062 3.093 4.062 1.787 0 3.574-.62 4.811-1.446l2.68 6.334C72.973 52.105 68.712 53 65.482 53c-6.186 0-10.035-3.442-10.035-9.156M77.733 18.512h8.545l1.124 3.521c2.998-2.606 5.846-4.366 9.668-4.366 1.724 0 3.823.493 5.397 1.55l-3.523 7.887c-1.798-1.057-3.523-1.268-4.497-1.268-2.174 0-3.897.704-6.595 2.747v23.24H77.733V18.511zM103.644 51.822h9.423V17.667h-9.423v34.155zm0-43.056c0-2.884 2.277-5.233 5.333-5.233 2.991 0 5.267 2.215 5.267 5.233 0 2.953-2.276 5.367-5.267 5.367-3.056 0-5.333-2.347-5.333-5.367zM128.026 34.636l-12.25-16.97h9.914l7.505 10.4 7.506-10.4h9.913l-12.392 16.97 12.534 17.186h-9.913l-7.719-10.687-7.789 10.687h-9.913l12.604-17.186z" fill="#fff" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M181.196 14.94c0-4.436-3.698-5.992-7.632-5.992-5.272 0-9.6 1.712-13.612 3.502l-2.755-8.17C161.683 2.256 167.899 0 175.295 0c11.566 0 17.152 5.758 17.152 13.85 0 14.162-19.67 18.13-22.975 28.946h23.684v9.026h-37.689c2.124-25.288 25.729-26.767 25.729-36.882" fill="#0065A3" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M209.138 31.567h4.743v-5.518c0-3.964.316-8.55.475-9.56L202.578 31.8c.948-.078 4.743-.233 6.56-.233zm-18.338 2.39l25.862-32.78h7.68v30.985h7.68v8.585h-7.68V53h-10.423V40.747H190.8v-6.79zM254.989 31.8c-7.481 0-13.545-6.328-13.545-14.133 0-7.806 6.064-14.134 13.545-14.134 7.48 0 13.544 6.328 13.544 14.134 0 7.805-6.064 14.133-13.544 14.133m0-31.8c-9.432 0-17.078 7.91-17.078 17.666 0 9.758 7.646 17.667 17.078 17.667 9.432 0 17.078-7.91 17.078-17.667C272.067 7.91 264.421 0 254.989 0" fill="#0065A3" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M254.4 17.667h2.356V10.6H254.4v7.067z" fill="#0065A3" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M254.4 17.667h7.067V15.31H254.4v2.356z" fill="#0065A3" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.08 45.933c4.865 0 7.298-2.03 7.298-6.712 0-3.98-2.433-6.243-6.465-6.243H10.6v12.955h4.48zm-1.482-21.2c3.46 0 5.246-2.295 5.246-5.198 0-3.039-1.729-5.402-5.42-5.402H10.6v10.6h2.998zM0 5.89h14.341c9.907 0 14.341 5.933 14.341 11.939 0 3.86-1.87 7.649-5.404 9.508v.143c5.474 1.5 8.522 6.076 8.522 11.366C31.8 45.995 26.396 53 15.588 53H0V5.889z" fill="#fff" />
                        </svg>
                    </div>
                    <div>
                        <a href="/" className='text-white flex items-center text-sm'>
                            <FaArrowLeft />
                            <span className='ml-2'>Back to site</span>
                        </a>
                    </div>
                </div>

                {/* Text Section */}
                <div className='text-white flex flex-col items-center gap-4 h-1/3'>
                    <h1 className='w-full md:w-1/2  md:text-font-3xl text-font-2xl font-bold text-center'>Your Company. United</h1>
                    <div className='flex justify-center items-start md:flex-row flex-col gap-2 lg:text-font-2xl text-font-xl'>
                        <p>Free.</p>
                        <p>Unlimited.</p>
                        <p>Online.</p>
                    </div>
                </div>
                <hr className='bg-white w-full h-[2px] mt-8' />

                {/* Language Selector */}
                <div className='w-full  flex justify-end '>
                    <div className={`text-md lg:w-1/3 md:w-[40%] sm:w-full bg-opacity-55  text-white bg-gray-100 border-white py-3 px-4 rounded  bg-[data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%3Cpath%20opacity%3D%22.7%22%20fillRule%3D%22evenodd%22%20clipRule%3D%22evenodd%22%20d%3D%22M1.414%204.242L0%205.656%204.243%209.9l1.414%201.414L7.07%209.9l4.243-4.243-1.415-1.414-4.242%204.243-4.243-4.243z%22%20fill%3D%22white%22/%3E%0A%3C/svg%3E%0A]`}>
                        <select className='bg-transparent focus:ring-0 focus:outline-none  w-full'>
                            <option value="en" className='text-black'>English</option>
                            <option value="es" className='text-black'>Español</option>
                            <option value="fr" className='text-black'>Français</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className=' md:w-[60%] sm:w-[75%] w-[90%] bg-white flex flex-col items-center justify-between sm:min-h-screen min-h-[80%]  p-4'>
                {/* main content section */}
                <div className='w-full flex flex-col items-center gap-10'>
                    <div className='w-full flex flex-col items-center gap-4'>
                    <h2 className='text-font-3xl font-bold mb-4 p-6'>Bitrix24 sign in</h2>
                        <hr className='bg-gray-400 w-full h-[1px]' />
                    </div>
                    <div className='sm:w-[80%] w-[90%] bg-auth-yellow-bg p-4 '>
                        Please log on using your login and password (or use social login) to enter www.bitrix24.in.
                    </div>

                    {/* form section */}
                    <form className='w-full flex flex-col items-center gap-4'>
                        <div className='w-full mb-4 sm:px-6 px-2'>
                            <label htmlFor="forgotpassword" className='block text-lg lg:w-[75%] m-auto font-medium text-gray-700'>Enter phone number or email</label>
                            <div className='flex mt-1 w-full lg:w-[75%] m-auto sm:px-3 px-2 py-3 border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500'>
                                <div className='sm:w-[20%] w-[30%] flex justify-center items-center gap-x-2'>
                                    <select id="countrycode" className='p-2'>
                                        <option value="india">+91</option>
                                        <option value="usa">+1</option>
                                        <option value="uk">+44</option>
                                        <option value="aus">+61</option>
                                    </select>
                                    <hr className='w-[2px] h-full bg-gray-500' />
                                </div>
                                <input type="text" className='sm:w-[80%] w-[70%] focus:ring-0 focus:outline-none text-xl' />

                            </div>

                        </div>
                        <div className="flex items-center w-full">
                            <hr className="flex-grow border-t " />
                                <span className="mx-2 text-gray-700">or</span>
                             <hr className="flex-grow border-t " />
                        </div>
                        
                        <p className="text-gray-500 text-center text-sm mb-2 max-w-lg">Sign in with </p>
               
               
                <div className="text-gray-600 text-center mb-4 bg-gray-200 px-4  rounded-lg max-w-lg flex items-center justify-between">
                 
                 
                 {/* Left Side - Social Login Buttons */}
                 <div className="flex flex-wrap justify-center">
                    <button className="border p-2 rounded">
                     <img 
                        src={FacebookImage}
                         className='alt="FacebookImage" w-14 '
                    />
                    </button>
                    <button className="border p-2 rounded">
                    <img 
                        src={GoogleImage}
                         className='alt="GoogleImage" w-20  '
                    />   
                    
                    </button>
                    <button className="border p-2 rounded">
                    <img 
                        src={AppleImage}
                         className='alt="AppleImage" w-12 '
                    />    
                    
                    </button>
                    <button className="border p-2 rounded">
                    <img 
                        src={MicrosoftImage}
                         className='alt="MicrosoftImage" w-14  '
                    />   
                     
                    </button>
                    <button className="border p-2 rounded">
                    <img 
                        src={MicrosoftLogoImage}
                         className='alt="MicrosoftLogoImage" w-12  '
                    />   
                     
                    </button>
                    <button className="border p-2 rounded">
                    <img 
                        src={xImage}
                         className='alt="Twitter" w-8  '
                    /> 
                     
                    </button>
                    <button className="border p-2 rounded">
                    <img 
                        src={ZoomImage}
                         className='alt="Zoom" w-14  '
                    /> 
                     
                    </button>
                  </div>

                   {/* Vertical Line (Inside the Container) */}
                  <div className="w-px h-24 bg-gray-400 mx-6"></div>

                   {/* Right Side - QR Code Section */}
                  <div className="flex flex-col items-center">
                   <p className="text-gray-700 font-medium mb-2">Scan QR to Login</p>
                    <img src="/media/qr-code.png" alt="QR Code" width="100" />
                  </div>
               </div>
                        {/* submit section */}
                        <div className='w-full flex flex-col items-center gap-4'>
                            <hr className='bg-gray-400  h-[1px] mb-4' />
                            <button type="submit" className='sm:w-36 w-28 mx-auto  text-xl bg-auth-button text-white  sm:py-3 py-2 px-8 rounded-full hover:bg-[#c5ed42] border-[#9dcf00]'>
                                NEXT
                            </button>

                            <a href="#" className="text-gray-500 text-sm mb-8">FORGOT PASSWORD?</a>
                  
                        </div>

                        
                    </form>

                </div>
                     

                {/* help section */}
                <div>
                    <a href="/" className='text-blue-500 w-fit m-auto text-lg '>Need Help?</a>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;