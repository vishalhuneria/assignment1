import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";

const Header = () => {

  return (
    <header className=" bg-[#004733] bg-[url('https://media.better.com/better-com/homepage/hero-variant-c.webp')] md:pt-0 pt-20 bg-[length:470px_510px] bg-bottom  bg-no-repeat  bg-custom-size[] md:h-dvh h-max  place-content-center">
      <div className=" text-[#1ee07f] text-center  antialiased roboto-bold text-[60px]   md:text-[100px] " >
        Mortgages < br />
        made simple
      </div>
      <div className='md:flex  md:justify-around grid justify-center  md:py-20 md:space-y-0  space-y-80 mb-5 '>
        <div >
          <button class="bg-[#1ee07f]  block text-black  py-5 px-20 hover:bg-transparent hover:text-white hover:text-bold rounded-full  ">
            Start my approval
          </button>
          <div className='flex py-3 items-center text-white'><CiClock2 /> <span className='mx-4'>  min | No credit impact</span></div>
        </div>
        <div className='md:flex'>
          <div className='conten block items-center mt-3 text-white space-x-2'>
            <div className='  p-2 flex text-slate-800 text-xl'>
              <FaGoogle />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoStarHalfSharp />
            </div>

            <div className='mt-2  ' block>
              4.6 Stars | 3166 Google <br />
              Reviews
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header