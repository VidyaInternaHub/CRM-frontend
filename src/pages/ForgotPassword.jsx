import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { forgotPasswordData } from '../data/ComponentsData';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'


const ForgotPassword = () => {
    const [message, setMessage] = useState('Message will be shown here');
    const [inputValue, setInputValue] = useState('');
    const [isPhoneNumber, setIsPhoneNumber] = useState(false);
    const { logo, backLink, textSection, languageOptions, mainContent } = forgotPasswordData;

    const validateInput = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        if (emailRegex.test(inputValue)) {
            setMessage('Valid email address');
            setIsPhoneNumber(false);
            return true;
        } else if (phoneRegex.test(inputValue)) {
            setMessage('Valid phone number');
            setIsPhoneNumber(true);
            return true;
        } else {
            if (isPhoneNumber) {
                setMessage('Please enter a valid  10-digit phone number');
            } else {
                setMessage('Please enter a valid email ');
            }

            return false;
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInput()) {
            alert(isPhoneNumber ? `Phone: ${inputValue}` : `Email: ${inputValue}`);
        }
    };
    return (
        <section className='bg-auth-bg  flex flex-row items-center justify-center overflow-x-hidden mt-10'>
            {/* Left Section */}
            <div className=' md:w-[40%] w-[30%] h-screen sm:flex flex-col justify-between p-6 hidden'>
                {/* Logo and Back Link */}
                <div className='w-full flex justify-center md:flex-row flex-col gap-4 items-center h-1/3'>
                    <div className='md:w-1/2 w-full'>
                        {logo.svgPath}
                    </div>
                    <div>
                        <a href={backLink.href} className='text-white flex items-center text-sm'>
                            <FaArrowLeft />
                            <span className='ml-2'>{backLink.text}</span>
                        </a>
                    </div>
                </div>

                {/* Text Section */}
                <div className='text-white flex flex-col items-center gap-4 h-1/3'>
                    <h1 className='w-full md:w-1/2  md:text-font-3xl text-font-2xl font-bold text-center'>{textSection.title}</h1>
                    <div className='flex justify-center items-start md:flex-row flex-col gap-2 lg:text-font-2xl text-font-xl'>
                        {
                            textSection.points.map((point, index) => (
                                <p key={index}>{point}</p>
                            ))
                        }
                    </div>
                </div>
                <hr className='bg-white w-full h-[2px] mt-8' />

                {/* Language Selector */}
                <div className='w-full  flex justify-end '>
                    <div className={`text-md lg:w-1/3 md:w-[40%] sm:w-full bg-opacity-55  text-white bg-gray-100 border-white py-3 px-4 rounded  bg-[data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%20%20%3Cpath%20opacity%3D%22.7%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1.414%204.242L0%205.656%204.243%209.9l1.414%201.414L7.07%209.9l4.243-4.243-1.415-1.414-4.242%204.243-4.243-4.243z%22%20fill%3D%22white%22/%3E%0A%3C/svg%3E%0A]`}>
                        <select className="bg-transparent focus:ring-0 focus:outline-none w-full">
                            {languageOptions.map((option) => (
                                <option key={option.value} value={option.value} className="text-black">
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className=' md:w-[60%] sm:w-[75%] w-[90%] bg-white flex flex-col items-center justify-between sm:min-h-screen min-h-[80%]  p-4'>
                {/* main content section */}
                <div className='w-full flex flex-col items-center gap-10'>
                    <div className='w-full flex flex-col items-center gap-4 mt-10'>
                        <h2 className='text-font-3xl font-bold mb-4'>{mainContent.heading}</h2>
                        <hr className='bg-gray-400 w-full h-[1px]' />
                    </div>
                    <div className='sm:w-[80%] w-[90%] bg-auth-yellow-bg p-4 '>
                        {mainContent.message}
                    </div>

                    {/* form section */}
                    <form className='w-full flex flex-col items-center gap-4 justify-center' onSubmit={handleSubmit}>
                        <div className='w-full mb-4 sm:px-6 px-2'>
                            <label htmlFor="forgotpassword" className='block text-lg lg:w-[75%] m-auto font-medium text-gray-700'>Enter phone number or email</label>
                            {
                                isPhoneNumber ?
                                    <PhoneInput
                                        className='w-[80%] m-auto sm:px-4 px-2 py-3 border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-main'
                                        placeholder="Enter phone number"
                                        value={inputValue}
                                        onChange={(value) => setInputValue(value)}

                                    /> :
                                    <div className='flex mt-1 w-full  lg:w-[75%] m-auto sm:px-3 px-2 py-3 border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500'>
                                        <input type="text" placeholder='Enter email' className='focus:ring-0 focus:outline-none text-xl' />

                                    </div>
                            }


                        </div>
                        <div className="">
                            <span
                                className="text-blue-500 cursor-pointer"
                                onClick={() => {
                                    setIsPhoneNumber(!isPhoneNumber);
                                    setMessage('');
                                    setInputValue('');
                                }}
                            >
                                {isPhoneNumber ? 'Switch to Email' : 'Switch to Phone Number'}
                            </span>
                        </div>

                        {/* message section */}
                        <div >
                            {message}
                        </div>

                        {/* submit section */}
                        <div className='w-full flex flex-col items-center gap-4'>
                            <hr className='bg-gray-400 w-full h-[1px] mb-4' />
                            <button type="submit" className='sm:w-36 w-28 mx-auto  text-xl bg-auth-button text-white  sm:py-3 py-2 px-8 rounded-full hover:bg-[#c5ed42] border-[#9dcf00]'>
                                {mainContent.submitButton.text}
                            </button>
                        </div>
                    </form>

                </div>

                {/* help section */}
                <div>
                    <a href={mainContent.helpButton.link} className='text-blue-500 w-fit m-auto text-lg'>{mainContent.helpButton.text}</a>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;