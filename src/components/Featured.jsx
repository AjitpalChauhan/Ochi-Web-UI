import React, { useState } from "react";
import { motion } from "framer-motion";

function Featured() {
  const [hovering1, setHovering1] = useState(false);
  const [hovering2, setHovering2] = useState(false);
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-800 pb-10">
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>
          Featured project
        </h1>
      </div>
      <div className="cards w-full gap-10 flex p-20">
        <div
          onMouseEnter={() => setHovering1(true)}
          onMouseLeave={() => setHovering1(false)}
          className="cardContainer relative w-1/2 h-[70vh] "
        >
          <h1 className="z-10 absolute text-[#CDEA68] text-7xl flex overflow-hidden leading-none tracking-tight left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
            {"FYDE".split("").map((item, index) => (
              <motion.span 
                initial={{ y: "100%" }} 
                animate={hovering1 ? {y:"0"} : {y:"100%"}}
                transition={{ease: [0.22, 1, 0.36, 1 ], delay: index*.06}}
                className="inline-block">
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-lg bg-[#cccccd] overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt=""
            />
          </div>
        </div>
        <div 
         onMouseEnter={() => setHovering2(true)}
         onMouseLeave={() => setHovering2(false)}
        className="cardContainer relative w-1/2 h-[70vh] ">
          <h1 className="absolute text-[#CDEA68] text-7xl flex overflow-hidden leading-none tracking-tight right-full translate-x-1/2 top-1/2 -translate-y-1/2">
            {"VISE".split("").map((item, index) => (
              <motion.span 
              initial={{ y: "100%" }} 
              animate={hovering2 ? {y:"0"} : {y:"100%"}}
              transition={{ease: [0.22, 1, 0.36, 1 ], delay: index*.06}}
              className="inline-block">
              {item}
            </motion.span>
            ))}
          </h1>
          <div className="card w-full h-full rounded-lg bg-[#cccccd] overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
