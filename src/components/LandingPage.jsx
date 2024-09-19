import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-white pt-1">
      <div className="textstructure mt-28 px-20">
        <div className="masker ">
          <h1 className='uppercase text-[7vw] font-bold font-["Founders Grotesk"] leading-[6vw] tracking-tighter'>
            We Create
          </h1>
        </div>
        <div className='masker font-["Founders Grotesk"] flex '>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "7vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration:1 }}
            className="bg-red-600 w-[7vw] h-[5vw] relative overflow-hidden rounded-md top-[1vw]"
          >
            <img className="w-full h-full bg-cover bg-center" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
          </motion.div>
          <h1 className='uppercase text-[7vw] font-bold font-["Founders Grotesk"] leading-[6vw] tracking-tighter'>
            EYE-OPENING
          </h1>
        </div>
        <div className='masker font-["Founders Grotesk"]'>
          <h1 className='uppercase text-[7vw] font-bold font-["Founders Grotesk"] leading-[6vw] tracking-tighter'>
            PRESENTATIONS
          </h1>
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-3 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-normal tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 border-[1px] border-zinc-700 rounded-full uppercase text-md font-normal">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-700 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
