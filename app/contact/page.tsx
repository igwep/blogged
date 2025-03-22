import React from 'react'
import Image from 'next/image'
import Map from '../blog/contact/Map'

const page = () => {
  return (
    <div className=''>
      <section className='flex py-4 bg-gray-100 dark:bg-[#181A2A]  flex-col   items-center  w-full h-auto   px-8 md:px-28'>
      <div className="w-full   mt-8 flex flex-col items-center text-start space-y-2 md:text-center">
    
        <h1 className="md:text-5xl text-3xl dark:text-white font-semibold text-center font-body leading-snug md:w-1/2  text-[#333333]">
        Get in Touch
        </h1>
        <p className="text-[#999999] font-body dark:text-white text-center  mt-4 md:w-[40%]">
        Contact us to publish your content and show ads to our website and get a good reach.
        </p>
      </div>
      <div className="bg-gray-100 p-10 text-center">
      

      <div className="grid md:grid-cols-3 gap-6 font-body text-center">
  {/* Office */}
  <div className="bg-white py-8 px-16 rounded-lg space-y-6">
    <div className="w-12 h-12 rounded-full bg-[#7C4EE4] flex items-center justify-center mx-auto mb-3 p-4">
      <Image src="/svg/home.svg" alt="Office Icon" width={24} height={24} />
    </div>
    <h3 className="text-lg font-semibold text-[#7C4EE4]">Office</h3>
    <p className="text-[#7A7A7A]">Victoria Street, London, UK</p>
  </div>

  {/* Email */}
  <div className="bg-white py-8 px-16 rounded-lg space-y-6">
    <div className="mb-3 flex w-full justify-center">
      <div className="w-12 h-12 rounded-full bg-[#7C4EE4] flex items-center justify-center p-4">
        <Image src="/svg/mail.svg" alt="Email Icon" width={24} height={24} />
      </div>
    </div>
    <h3 className="text-lg font-semibold text-[#7C4EE4]">Email</h3>
    <p className="text-[#7A7A7A]">hello@zarrin.com</p>
  </div>

  {/* Phone */}
  <div className="bg-white py-8 px-16 rounded-lg space-y-6">
    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#7C4EE4] flex items-center justify-center p-4">
      <Image src="/svg/phone.svg" alt="Phone Icon" width={24} height={24} />
    </div>
    <h3 className="text-lg font-semibold text-[#7C4EE4]">Phone</h3>
    <p className="text-[#7A7A7A]">(001) 2342 3451</p>
  </div>
</div>

    </div>
  

      </section>
     <div className='w-full'>
     <Map />
     </div>
    </div>
  )
}

export default page