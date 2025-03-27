
//import React, {useEffect, useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
//import { useFooterContext } from '@/app/context/FooterProvider';



const Footer = () => {
  /* const { setFooterHeight } = useFooterContext();
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
  }, [setFooterHeight]); */

  return (
    <>
    <section
    /* ref={footerRef} */
    className='relative flex font-body justify-center items-center h-auto w-full bg-[#7C4EE4] py-20  md:px-28 px-8 overflow-hidden'>{/* subscription */}
        {/* Top Left Pattern */}
              <div className="absolute md:top-[-50px] top-[-50px] left-0 w-64  h-64 md:w-[600px] md:h-60 opacity-50 pointer-events-none">
                <Image
                  src="/svg/parttern.svg"
                  alt="Pattern"
                  layout="intrinsic"
                  width={700}
                  height={700}
                />
              </div>
              {/* Bottom Right Pattern */}
              <div className="absolute md:bottom-[-10px] bottom-[-100px] right-0 w-64 h-64 md:w-[600px] md:h-60 opacity-50 pointer-events-none">
                <Image
                  src="/svg/pattern2.svg"
                  alt="Pattern"
                  layout="intrinsic"
                  width={700}
                  height={700}
                />
              </div>
<div className='flex  flex-col gap-8 md:w-1/2 items-center justify-center' >
<h1 className='md:text-5xl text-3xl text-center font-semibold text-white dark:text-[#181A2A]'>
Get our stories delivered  From us to your inbox weekly.
</h1>
<div className="flex gap-2 w-full flex-nowrap">
  <input
    type="email"
    placeholder="Your Email"
    className="bg-white dark:bg-[#181A2A] dark:placeholder:text-white px-4 py-3 flex-grow min-w-0 rounded-md"
  />
  <button className="border border-white dark:border-[#181A2A] dark:text-[#181A2A] font-semibold text-white px-6 py-3 rounded-md whitespace-nowrap">
    Get started
  </button>
</div>

<span className='text-center text-[#BBBBBB] dark:text-[#21243a]'>
Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
</span>
</div>
    </section>
    <section className='bg-white dark:bg-[#181A2A] flex justify-center md:p-10 py-8 '>
       <div className='flex flex-col items-center gap-6 w-full'> 
       <div className="flex gap-2 items-center ">
                  <Image
                    src="/svg/mainLogo.svg"
                    alt="logo"
                    width={40}
                    height={40}
        
                  />
                  <span className="text-3xl font-bold dark:text-white">BlogSpot</span>
                </div>
                <ul className='flex gap-8  dark:text-white'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link> </li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                <div className='flex gap-4 text-white dark:text-black'>{/* social media */}
                    <button className='rounded-full bg-[#7C4EE4] px-2 py-1'>FB</button>
                    <button className='rounded-full bg-[#7C4EE4] px-2 py-1'>IG</button>
                    <button className='rounded-full bg-[#7C4EE4] px-2 py-1 text-sm'>LN</button>
                    <button className='rounded-full bg-[#7C4EE4] px-2 py-1'>YT</button>
                </div>
                <div className='border border-[#7C4EE4] w-full'>
                </div>
                <span className='pt-5 pb-8 dark:text-white'>
                Copyright BlogSpot Inc © {new Date().getFullYear()}. All Rights Reserved.
                </span>
       </div>
        


    </section>
    
    </>
  )
}

export default Footer