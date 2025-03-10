import React from 'react'
import Image from 'next/image'
import ReadMoreBtn from '../buttons/ReadMoreBtn'

const SecondFeaturedPost = () => {
  return (
    <section className="relative w-full h-auto dark:bg-[#181A2A] flex items-center justify-center p-28">
      {/* Large Image */}
      <div className="w-full h-full flex items-center justify-center">
  <Image
    src="/image/guywithheadset.jpg"
    alt="Featured Post"
    layout="responsive"
    width={100} // Relative width (acts as a ratio)
    height={75} // Relative height (acts as a ratio)
    className="z-0"
  />
</div>

      {/* Content Container */}
      <div className="absolute -bottom-0 right-20  bg-white dark:bg-[#181A2A] bg-opacity-80 p-6 space-y-6 rounded-lg  max-w-5xl">
     <div className='flex  gap-2 items-center font-rob'> <h3 className=" text-[#333333] dark:text-white font-semibold">Development</h3> <span className='text-[#666666] dark:text-gray-300'>16 march 2022</span></div>
        <h1 className="text-4xl  font-bold text-[#333333] dark:text-white">
        How to make a Game look more attractive with New VR & AI Technology
        </h1>
        <p className="text-base text-[#333333] dark:text-white mt-4 w-[90%]">
        Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
        </p>
        {/* CTA Button */}
       <ReadMoreBtn>
          Read more
       </ReadMoreBtn>
      </div>
    </section>
  )
}

export default SecondFeaturedPost