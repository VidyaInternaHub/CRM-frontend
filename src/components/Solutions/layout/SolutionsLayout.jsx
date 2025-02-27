import React from 'react'
import SolutionsBar from '../components/SolutionsBar'
import { Outlet } from 'react-router-dom'

const SolutionsLayout = () => {
  return (
    <div className='flex flex-col gap-1 mt-20'>
      <div className=' z-10 '>
        <SolutionsBar />
      </div>

      <div className='-z-10'>
        <Outlet />
      </div>

    </div>
  )
}

export default SolutionsLayout