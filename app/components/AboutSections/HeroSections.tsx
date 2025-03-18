import React from 'react'
import Image from 'next/image'

const HeroSections = () => {
  return (
    <section className='flex py-4 bg-gray-100 dark:bg-[#181A2A]  flex-col   items-center  w-full h-auto   px-8 md:px-28 '>
<div className="w-full   mt-8 flex flex-col items-center text-start space-y-2 md:text-center">
      <h3 className="text-lg text-[#666666] font-body dark:text-white font-semibold">ABOUT US</h3>
        <h1 className="md:text-5xl text-3xl dark:text-white font-semibold text-center font-body leading-snug md:w-1/2  text-[#333333]">
        Creative Blog Writting and publishing site
        </h1>
        <p className="text-[#666666] dark:text-white text-center  mt-4 md:w-[80%]">
        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
        </p>
      </div>
      {/* Right Image */}
      <div className="w-full  mt-12 md:mt-20 flex justify-center">
        <Image
          src="/image/about.png"
          alt="Hero Image"
          layout="responsive"
          width={100} // Acts as a ratio
          height={75} // Acts as a ratio
          className="rounded-lg"
        />
      </div>
    </section>
  )
}

export default HeroSections