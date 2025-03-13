import React from 'react';
import Image from 'next/image';
import ReadMoreBtn from '../buttons/ReadMoreBtn';

const SecondFeaturedPost = () => {

  return (
    <section className="relative w-full h-auto bg-gray-100 dark:bg-[#181A2A] flex flex-col items-center justify-center md:px-28 md:py-28 p-8">
      {/* Wrapper Container: Has border on mobile; no border on desktop */}
      <div className="relative bg-white md:bg-transparent w-full border flex flex-col space-y-5 border-gray-300 dark:border-gray-700 md:border-0 rounded-lg  p-4 py-8">
        {/* Large Image */}
        <div className="w-full flex items-center justify-center">
          <Image
            src="/image/guywithheadset.jpg"
            alt="Featured Post"
            layout="responsive"
            width={100} // Acts as a ratio
            height={75} // Acts as a ratio
            className="z-0"
          />
        </div>
        {/* Content Container */}
        <div className="md:absolute md:-bottom-30 md:right-0 rounded-md max-w-5xl  bg-white dark:bg-[#181A2A] bg-opacity-80 md:p-6 space-y-6">
          <div className="flex gap-2 items-center font-rob">
            <h3 className="text-[#333333] dark:text-white font-semibold">Development</h3>
            <span className="text-[#666666] dark:text-gray-300">16 march 2022</span>
          </div>
          <h1 className="text-4xl font-bold text-[#333333] dark:text-white">
            How to make a Game look more attractive with New VR & AI Technology
          </h1>
          <p className="text-base text-[#333333] dark:text-white mt-4 w-[90%]">
            Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
          </p>
          <ReadMoreBtn>
            Read more
          </ReadMoreBtn>
        </div>
      </div>
    </section>
  );
};

export default SecondFeaturedPost;
