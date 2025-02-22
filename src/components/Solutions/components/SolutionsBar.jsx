import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { SolutionPageData } from '../../../data/ComponentsData'

const SolutionsBar = () => {
  const [activeCard, setActiveCard] = useState(null);
  const { solutionsCards } = SolutionPageData;

  const handleContent = (id) => {
    setActiveCard((prevCard) => prevCard ? null : id)
  }

  return (
    <nav className='bg-blue-main flex justify-center gap-4 items-center p-2 flex-wrap z-10'>
      {
        solutionsCards.map((card) => (
          <div key={card.id} className='relative w-[290px]  m-auto'>
            <button
              onClick={() => handleContent(card.id)}
              className={`w-full flex justify-between items-center gap-4 border-2 rounded-3xl py-2 px-4 ${activeCard === card.id ? 'text-blue-main border-blue-main bg-white'  : 'text-white border-white bg-blue-main'}`}
            >
              <span className='text-[1rem]'>{card.title}</span>
              {
                activeCard === card.id ? <span className='border-2 rounded-full p-1 text-blue-main border-blue-main'><FaAngleUp  /></span> :
                  <span className='border-2 rounded-full p-1'><FaAngleDown /></span>
              }
            </button>
            {
              activeCard === card.id && (
                <ul className='absolute top-[70%] w-full left-0 bg-white text-black shadow-lg rounded-lg  p-4 pt-8 z-10'>
                  {card.content.map((content, index) => (
                    <li key={index} className='mb-2 last:mb-0'>
                      <a
                        href={content.link}
                        className=' hover:text-blue-main transition duration-200'
                      >
                        {content.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )
            }
          </div>
        ))
      }
    </nav>
  )
}

export default SolutionsBar