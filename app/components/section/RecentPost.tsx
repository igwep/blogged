import React from 'react'
import ViewAllBtn from '../buttons/ViewAllBtn'
import Image from 'next/image'

const RecentPost = () => {
  return (
    <div className='w-full mt-10 px-28 space-y-6'>
        <div className='flex  justify-between items-center'>
            <h1 className='text-5xl font-semibold'>Our Recent Post</h1>
           <ViewAllBtn>View All</ViewAllBtn>
        </div>
         <section className=" flex   flex-col md:flex-row items-start mt-24  justify-between w-full  ">
              <div className="w-full  md:w-[75%] h-[400px] mt-4 md:mt-0 flex ">
                <Image
                  src="/image/guywithheadset.jpg"
                  alt="Hero Image"
                  width={712}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2  text-start space-y-4 md:text-left">
              <div className='flex  gap-2 items-center font-rob'> <h3 className=" text-[#333333] dark:text-white font-semibold">Development</h3> <span className='text-[#666666] dark:text-gray-300'>16 march 2022</span></div>
                <h1 className="text-4xl font-bold dark:text-white text-[#181A2A]   ">
                 How AI will change the future 
                </h1>
                <p className="text-lg dark:text-white text-[#181A2A] mt-4  ">
                The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction
                </p>
        
                {/* CTA Button */}
                <button className="mt-6 px-8 py-3 text-lg font-semibold bg-white dark:bg-[#181A2A] text-black dark:text-white rounded-lg hover:bg-blue-700 transition">
                  Read more
                </button>
              </div>
            </section>
    </div>
  )
}

export default RecentPost