import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-white pt-1'>
      <div className='textstructure mt-28 px-20'>
        <div className='masker '>
          <h1 className='uppercase text-[7vw] font-bold font-["Founders Grotesk"] leading-[6vw] tracking-tighter'>We Create</h1>
        </div>
        <div className='masker font-["Founders Grotesk"] flex '>
          <div className='bg-red-600 w-[7vw] h-[5vw] relative rounded-md top-[1vw]'></div>
          <h1 className='uppercase text-[7vw] font-bold font-["Founders Grotesk"] leading-[6vw] tracking-tighter'>EYE-OPENING</h1>
        </div>
        <div className='masker font-["Founders Grotesk"]'>
          <h1 className='uppercase text-[7vw] font-bold font-["Founders Grotesk"] leading-[6vw] tracking-tighter'>PRESENTATIONS</h1>
        </div>
      </div>
      <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-3 px-20'>
        {["For public and private companies", "From the first pitch to IPO" ].map((item, index) => (
          <p className='text-md font-normal tracking-tight leading-none'>{item}</p>
        ))}
        <div className='start flex items-center gap-5'>
          <div className='px-4 py-2 border-[1px] border-zinc-700 rounded-full uppercase text-md font-normal'>start the project</div>
          <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-700 rounded-full'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
   )
}

export default LandingPage