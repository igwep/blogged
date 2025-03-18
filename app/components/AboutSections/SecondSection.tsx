import React from 'react'
import AboutCard from './AboutCards'

const SecondSection = () => {
  return (
    <section className='px-8 md:px-28 bg-gray-100 dark:bg-[#181A2A] w-full pt-20'>
        <div className='w-full flex md:flex-row flex-col justify-between space-y-4'>
            <div className='md:w-[40%] flex flex-col gap-8'>
                <p className='text-[#666666] dark:text-white font-semibold'>HOW WE WORK</p>
                <p className='md:text-5xl text-3xl font-semibold font-body leading-snug text-[#333333] dark:text-white'>I will show you how our team works</p>
            </div>
            <div className=' flex items-end justify-start'>
                <span className='w-[80%] text-[#666666] dark:text-white'>
                Bring to the table win-win market strategies to ensure perfect articles.
                </span>


            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-20">
        <AboutCard
          number="01"
          title="Brainstorming"
          description="Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated"
          isActive={true} // Highlighted card
        />
        <AboutCard
          number="02"
          title="Analysing"
          description="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line."
        />
        <AboutCard
          number="03"
          title="News Publishing"
          description="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
        />
      </div>

    </section>
  )
}

export default SecondSection