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
    <>
      <section className='flex flex-col gap-1'>
        <nav className='bg-blue-main w-full flex justify-center items-center flex-wrap gap-4  p-2  z-10 pb-6'>
          {
            solutionsCards.map((card) => (
              <div key={card.id} className='relative w-[290px]  '>
                <button
                  onClick={() => handleContent(card.id)}
                  className={`w-full flex justify-between items-center gap-4 border-2 rounded-3xl py-2 px-4 ${activeCard === card.id ? 'text-blue-main border-blue-main bg-white' : 'text-white border-white bg-blue-main'}`}
                >
                  <span className='text-[1rem]'>{card.title}</span>
                  {
                    activeCard === card.id ? <span className='border-2 rounded-full p-1 text-blue-main border-blue-main'><FaAngleUp /></span> :
                      <span className='border-2 rounded-full p-1'><FaAngleDown /></span>
                  }
                </button>
                {
                  activeCard === card.id && (
                    <ul className='absolute top-[70%] w-full left-0 bg-white text-black shadow-lg rounded-lg  p-4 pt-8 z-10'>
                      {card.content.map((content, index) => (
                        <li key={index} className='mb-2 last:mb-0'>
                          <a
                            target='_blank'
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

        <section className='bg-blue-main '>
          <div className='flex flex-col gap-4 text-font-3xl h-52'>dsfjlkakdlfjsa</div>
          <div>dsklfj</div>
        </section>
      </section>

    </>
  )
}

export default SolutionsBar