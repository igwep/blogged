import React from 'react'
import ViewAllBtn from '../buttons/ViewAllBtn';


const MorePostSection = () => {
  return (
    <div className='w-full pt-10 px-28 bg-gray-100 dark:bg-[#181A2A] space-y-6'>
    <div className='flex justify-between items-center'>
      <h1 className='text-5xl font-semibold dark:text-white'>More Post</h1>
      <ViewAllBtn>View All</ViewAllBtn>
    </div>

    </div>
  )
}
export  default MorePostSection;