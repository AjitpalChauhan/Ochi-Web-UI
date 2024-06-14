import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl text-white bg-[#004d43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 overflow-hidden gap-10 flex whitespace-nowrap'>
        <h1 className='text-[17vw] leading-none font-["Founders Grotesk"] font-semibold uppercase mb-[2vw] '>we are ochi</h1>
        <h1 className='text-[17vw] leading-none font-["Founders Grotesk"] font-semibold uppercase mb-[2vw] '>we are ochi</h1>
      </div>
    </div>
  )
}

export default Marquee