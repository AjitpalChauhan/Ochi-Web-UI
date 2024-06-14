import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] text-black rounded-tl-3xl rounded-tr-3xl'>
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4vw]'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='w-full flex gap-5 pt-10 border-t-[1px] border-zinc-700 mt-20 '>
        <div className='w-1/2 '>
          <h1 className='text-4xl'>Our Approach</h1>
          <button className='uppercase items-center px-10 mt-10 py-6 bg-zinc-900 rounded-full text-white flex gap-7'>Read More
            <div className='w-2 h-2 bg-white rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 bg-red-600 rounded-xl h-[70vh]'></div>
      </div>
    </div>
  )
}

export default About