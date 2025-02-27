import React from 'react'
import { SolutionPageData } from '../data/ComponentsData';


const SolutionsPage = () => {
const {title,solutionsCards,meetingImage} = SolutionPageData;
  return (
    <>
      <section className='mt-10 p-10 flex flex-col'>
        <h1 className=' m-auto my-10  text-font-3xl'>{title}</h1>

        <div className='sm:w-[90%] w-full grid lg:grid-cols-3 col-span-1 gap-6 m-auto '>
          {
            solutionsCards.map((card) => (
              <div
                key={card.id}
                className={`flex gap-4 overflow-hidden ${card.id === 2 || card.id === 3 ? 'bg-blue-main text-white ' : 'bg-slate-2 text-blue-main md:col-span-2'} ${card.id === 5 && 'lg:col-span-1'} rounded-3xl p-4 `}>

                <div className='flex flex-col  gap-4'>
                  <div className='flex justify-between'>
                    <h2 className={`text-font-2xl font-semibold ${card.id === 2 || card.id === 3 ? 'text-white' : 'text-black'}`}>{card.title}</h2>

                    {card.icon && <span >{card.icon}</span>}

                  </div>
                  <ul className='flex flex-wrap  gap-y-2 gap-x-6'>
                    {card.content.map((content, index) => (
                      <li
                        key={index}
                        className={`border p-2 rounded-3xl text-font-[1rem] flex justify-center items-center font-medium cursor-pointer ${card.id === 2 || card.id === 3 ? 'hover:bg-white hover:text-blue-main border-white' : 'hover:bg-blue-main hover:text-white border-blue-main'} `}>
                        <a href={content.link}>{content.name}</a>
                      </li>
                    ))}
                  </ul>

                </div>
                {
                  card.image && <div className='md:block hidden'>
                    <img src={card.image} alt="CardImage" className='w-full object-contain' />
                  </div>
                }
              </div>
            ))
          }
          <div className='col-span-2 rounded-3xl lg:block hidden'>
            <img src={meetingImage} alt="Meeting" className='object-contain rounded-3xl' />
          </div>

        </div>

      </section>
    </>
  )
}

export default SolutionsPage