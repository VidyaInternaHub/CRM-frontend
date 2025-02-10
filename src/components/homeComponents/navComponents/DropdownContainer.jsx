import React from 'react'

const DropdownContainer = ({children}) => {
  return (
    // <div className='hidden lg:flex items-center justify-center w-full fixed bg-white border-0 z-40 pt-9 pb-12 rounded-b-lg shadow-lg text-black text-center'>{children}</div>
    <section className=" lg:flex hidden top-0 pt-9 pb-12 justify-center w-full bg-white rounded-b-2xl shadow-lg ">{children}</section>
  )
}

export default DropdownContainer