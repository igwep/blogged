import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex py-4  flex-col md:flex-row items-center justify-between w-full h-auto md:h-[80vh] bg-[#7C4EE4] px-8 md:px-28 overflow-hidden">
      {/* Top Left Pattern */}
      <div className="absolute top-[-50px] left-0 w-64  h-64 md:w-[600px] md:h-60 opacity-50 pointer-events-none">
      <Image
  src="/svg/parttern.svg"
  alt="Pattern"
  width={900}
  height={700}
  className="w-full h-auto" // Ensures responsiveness
/>
      </div>

      {/* Bottom Right Pattern */}
      <div className="absolute bottom-[-10px] right-0 w-64 h-64 md:w-[600px] md:h-60 opacity-50 pointer-events-none">
        <Image
          src="/svg/pattern2.svg"
          alt="Pattern"
          width={900}
          height={700}
          className="w-full h-auto" // Ensures responsiveness
        />
      </div>

      {/* Left Content */}
      <div className="w-full md:w-1/2 mt-16 text-start space-y-4 md:text-left">
      <h3 className="text-lg text-white dark:text-[#181A2A] font-semibold">Featured post</h3>
        <h1 className="text-6xl font-bold text-white dark:text-[#181A2A]   ">
         How AI will change the future 
        </h1>
        <p className="text-lg text-white dark:text-[#181A2A] mt-4 w-[80%] ">
        The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction
        </p>

        {/* CTA Button */}
        <button className="mt-6 px-8 py-3 text-lg font-semibold bg-white dark:bg-[#181A2A] text-black dark:text-white rounded-lg hover:bg-blue-700 transition">
          Read more
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full z-50 md:w-1/2 mt-4 md:mt-0 flex justify-center">
        <Image
          src="/image/heroimage.png"
          alt="Hero Image"
          width={500}
          height={400}
          className="rounded-lg"
        />
      </div>

    </section>
  );
}
