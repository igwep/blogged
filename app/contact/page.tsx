import React from 'react'
import Image from 'next/image'
//import LeafletMap from '../components/contact/Map'
import ContactForm from '../components/contact/ContactForm'

const page = () => {
  return (
    <div className='pb-8 dark:bg-[#181A2A]'>
      <section className='flex py-4 bg-gray-100 dark:bg-[#181A2A]  flex-col   items-center  w-full h-auto   '>
      <div className="w-full   mt-8 flex flex-col items-center text-start space-y-2 md:text-center px-8 md:px-28">
    
        <h1 className="md:text-5xl text-3xl dark:text-white font-semibold text-center font-body leading-snug md:w-1/2  text-[#333333]">
        Get in Touch
        </h1>
        <p className="text-[#999999] font-body dark:text-white text-center  mt-4 md:w-[40%]">
        Contact us to publish your content and show ads to our website and get a good reach.
        </p>
      </div>
      <div className="bg-gray-100 p-10 text-center dark:bg-[#181A2A]  w-full">

      <div className="grid   md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 font-body w-full text-center">

  {/* Office */}
  <div className="bg-white w-full    py-10 px-8 sm:px-12 md:px-16 dark:bg-[#1f2133]   rounded-lg space-y-6">
    <div className="w-14 h-14 rounded-full bg-[#7C4EE4] flex items-center justify-center mx-auto mb-3 p-4">
      <Image src="/svg/home.svg" alt="Office Icon" width={24} height={24} />
    </div>
    <h3 className="text-lg font-semibold text-[#7C4EE4]">Office</h3>
    <p className="text-[#7A7A7A] dark:text-[#dad8d8]">Victoria Street, London, UK</p>
  </div>

  {/* Email */}
  <div className="bg-white  py-10 px-8 sm:px-12 md:px-16 dark:bg-[#1f2133]  rounded-lg space-y-6">
    <div className="mb-3 flex w-full justify-center">
      <div className="w-14 h-14 rounded-full bg-[#7C4EE4] flex items-center justify-center p-4">
        <Image src="/svg/mail.svg" alt="Email Icon" width={24} height={24} />
      </div>
    </div>
    <h3 className="text-lg font-semibold text-[#7C4EE4]">Email</h3>
    <p className="text-[#7A7A7A] dark:text-[#dad8d8]">hello@zarrin.com</p>
  </div>

  {/* Phone */}
  <div className="bg-white  py-10 px-8 sm:px-12 md:px-16 dark:bg-[#1f2133]  rounded-lg space-y-6">
    <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#7C4EE4] flex items-center justify-center p-4">
      <Image src="/svg/phone.svg" alt="Phone Icon" width={24} height={24} />
    </div>
    <h3 className="text-lg font-semibold text-[#7C4EE4]">Phone</h3>
    <p className="text-[#7A7A7A] dark:text-[#dad8d8]">(001) 2342 3451</p>
  </div>
</div>

    </div>
  

      </section>
     <div className='w-full '>
   {/*   <LeafletMap /> */}
   <div className='z-10 h-[382px] md:h-[381.97px] w-full'>
  <Image
    src="/image/map.png"
    alt="Map"
    width={1920}
    height={1080}
    layout="responsive"
    className=' h-full w-full md:block hidden'
  
  />
  <Image
    src="/image/smallMap.png"
    alt="Map"
    width={1920}
    height={1080}
    layout="responsive"
    className=' h-full w-full md:hidden block'
  
  />
</div>

    <div className='px-8'>
    <ContactForm />
    </div>

     </div>
    </div>
  )
}

export default page