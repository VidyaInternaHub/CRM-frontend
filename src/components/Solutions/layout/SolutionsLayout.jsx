import React from 'react';
import SolutionsBar from '../components/SolutionsBar';
import { Outlet, useParams } from 'react-router-dom';
import {SolutionPageData} from '../../../data/ComponentsData'

const SolutionsLayout = () => {
  const {category,type} = useParams();
  const {solutionsCards,AllSolutions} = SolutionPageData;
  const currentCategory = AllSolutions.find(
    (categoryItem) => categoryItem.category.toLowerCase() === category?.toLowerCase()
  );

  const currentSolutionType = currentCategory?.type.find(
    (typeItem) => typeItem.title.toLowerCase() === type?.toLowerCase()
  );
  
  return (
    <div className='flex flex-col gap-1 mt-20'>
      <div className=' z-10 '>
        <SolutionsBar solutionsCards={solutionsCards} currentSolutionType={currentSolutionType}  />
      </div>

      <div className='-z-10'>
        <Outlet />
      </div>

    </div>
  )
}

export default SolutionsLayout