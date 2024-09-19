import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 p-20 flex items-center gap-5">
      <div className="cardcontainer w-1/2 h-[60vh]">
        <div className="card relative w-full rounded-lg h-full bg-[#004D43] flex items-center justify-center">
          <img
            className=" px-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 text-sm border-2 border-[#CDEA68] rounded-full text-[#CDEA68]">
            &copy;2023-2024
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 flex gap-5 h-[60vh]">
        <div className="card relative flex items-center justify-center w-1/2 rounded-lg h-full bg-[#081b19]">
          <img
            className=""
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 text-sm border-2 rounded-full text-white">
           RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-1/2 rounded-lg h-full bg-[#0b2421]">
          <img
            className=" w-20"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-5 py-1 text-sm border-2 rounded-full text-white">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
