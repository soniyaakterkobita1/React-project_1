import React from 'react'
import { GoChevronRight } from "react-icons/go";

const BreadCrumb = ({pageLabel, rootPage}) => {
  return (
    <div>
       <div>
            <span className='font-bold font-dmsans text-5xl block '>{pageLabel}</span>
                <div className='mt-5 flex items-center gap-1'>
                   <p className='text-gray_2 font-normal text-xs '>{rootPage}</p>
                     <GoChevronRight />
                   <p className='text-gray_2 font-normal text-xs '>{pageLabel}</p>
                </div>
            </div>
    </div>
  )
}

export default BreadCrumb
