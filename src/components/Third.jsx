import React from 'react';
// import men from '../assests/me'
import logo from '../assests/men.jpg';
import { IoMdStar } from "react-icons/io";


const Third = () => {
    return (
        // <div className='py-36 flex place-content-around'>

        //     <div>
        //         <div>
        //             <img className='h-[550px] w-[350px] rounded-xl ' src={logo} />

        //         </div>
        //         <div class="flex py-4 space-x-5">
        //             <div class="border-4 border-[#017848] text-[#017848] py-2 px-5 text-xl font-roboto rounded-full box-border">
        //                 Arian
        //             </div>
        //             <div class="relative py-2 px-5 text-xl font-roboto rounded-full transition-all duration-300 box-border group">
        //                 <div class="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 group-hover:border-4 group-hover:border-[#017848]"></div>
        //                 <div class="relative z-10">Amanda</div>
        //             </div>
        //             <div class="relative py-2 px-5 text-xl font-roboto rounded-full transition-all duration-300 box-border group">
        //                 <div class="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 group-hover:border-4 group-hover:border-[#017848]"></div>
        //                 <div class="relative z-10">Paul</div>
        //             </div>
        //         </div>

        //     </div>
        //     <div className=''>
        //         <div className=' my-10 text-slate-900 roboto-regular text-8xl'>Find out why
        //             <br /> we’re better.</div>
        //         <div>
        //             <button class="bg-[#004733]  text-white  roboto-light text-2xl py-5 px-20   hover:bg-[#017848]  rounded-full  ">
        //                 Start my approval
        //             </button>
        //         </div>
        //         <div className='text-slate-600 my-3 flex items-center'>
        //             <IoMdStar /><sapan className='px-3'><span className='text-black px-2'>Trustpilot</span>  Excellent | 4.3 out of 5</sapan>
        //         </div>
        //     </div>

        // </div >

        <div className='py-16 md:py-36 flex flex-col md:flex-row place-content-around items-center'>
            {/* <div className="flex flex-col items-center md:items-start">
                <div>
                    <img className='h-[300px] w-[200px] md:h-[550px] md:w-[350px] rounded-xl' src={logo} />
                </div>
                <div className="flex py-4 space-x-3 md:space-x-5 mt-4">
                    <div className="border-2 md:border-4 border-[#017848] text-[#017848] py-2 px-4 md:px-5 text-lg md:text-xl font-roboto rounded-full box-border">
                        Arian
                    </div>
                    <div className="relative py-2 px-4 md:px-5 text-lg md:text-xl font-roboto rounded-full transition-all duration-300 box-border group">
                        <div className="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 group-hover:border-4 group-hover:border-[#017848]"></div>
                        <div className="relative z-10">Amanda</div>
                    </div>
                    <div className="relative py-2 px-4 md:px-5 text-lg md:text-xl font-roboto rounded-full transition-all duration-300 box-border group">
                        <div className="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 group-hover:border-4 group-hover:border-[#017848]"></div>
                        <div className="relative z-10">Paul</div>
                    </div>
                </div>
            </div> */}

            <div className="flex flex-col items-center md:items-start">
                <div>
                    <img className='h-[300px] w-[200px] md:h-[550px] md:w-[350px] rounded-xl' src={logo} />
                </div>
                <div className="flex py-4 space-x-3 md:space-x-5 mt-4">
                    <div className="border-2 md:border-4 border-[#017848] text-[#017848] py-2 px-4 md:px-5 text-lg md:text-xl font-roboto rounded-full box-border">
                        Arian
                    </div>
                    <div className="relative py-2 px-4 md:px-5 text-lg md:text-xl font-roboto rounded-full transition-all duration-300 group">
                        <div className="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 group-hover:border-4 group-hover:border-[#017848]"></div>
                        <div className="relative z-10 text-[#017848]">Amanda</div>
                    </div>
                    <div className="relative py-2 px-4 md:px-5 text-lg md:text-xl font-roboto rounded-full transition-all duration-300 group">
                        <div className="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 group-hover:border-4 group-hover:border-[#017848]"></div>
                        <div className="relative z-10 text-[#017848]">Paul</div>
                    </div>
                </div>
            </div>


            <div className='text-center md:text-left mt-10 md:mt-0'>
                <div className='my-5 md:my-10 text-slate-900 roboto-regular text-4xl md:text-6xl lg:text-8xl'>
                    Find out why<br />we’re better.
                </div>
                <div className="mt-5 md:mt-10">
                    <button className="bg-[#004733] text-white roboto-light text-xl md:text-2xl py-4 md:py-5 px-10 md:px-20 hover:bg-[#017848] rounded-full">
                        Start my approval
                    </button>
                </div>
                <div className='text-slate-600 my-3 flex items-center justify-center md:justify-start'>
                    <IoMdStar />
                    <span className='px-3'>
                        <span className='text-black px-2'>Trustpilot</span> Excellent | 4.3 out of 5
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Third;