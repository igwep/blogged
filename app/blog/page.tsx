import React from 'react'
import PostCards from '../components/Homesections/PostCards';

const page = () => {
  return (
    <div>
        <section className='w-full bg-gray-100 dark:bg-[#181A2A] pt-8'>
        <div className="w-full    flex flex-col items-center text-start space-y-2 md:text-center">
      <h3 className="text-lg text-[#666666] dark:text-white font-body font-semibold">OUR BLOGS</h3>
        <h1 className="md:text-5xl text-3xl dark:text-white font-semibold text-center font-body leading-snug md:w-1/2  text-[#333333]">
        Find our all blogs from here
        </h1>
        <p className="text-[#666666] text-center dark:text-white  mt-4 md:w-[50%]">
        our blogs are written from very research research and well known writers writers so that  we can provide you the best blogs and articles articles for you to read them all along
        </p>
      </div>
<PostCards slice={false} numberOfCards={0} startIndex={0} />
        </section>

    </div>
  )
}

export  default page;