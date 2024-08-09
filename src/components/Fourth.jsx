import React from 'react'

const Fourth = () => {
    return (
        // <div className='flex py-25 justify-between px-44'>
        //     <div className=' my-10 text-slate-900 roboto-regular text-4xl'>
        //         Got questions?<br />
        //         We've got answers
        //     </div>
        //     <div className='flex items-center'>
        //         <div class="flex py-4 space-x-5">
        //             <div class="border-4 flex border-[017848#017848] text-[#017848] py-2 px-5 text-xl font-roboto rounded-full box-border">
        //                 Our products
        //             </div>
        //             <div class="relative py-2 px-5 text-xl font-roboto rounded-full transition-all duration-300 box-border group">
        //                 <div class="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 group-hover:border-4 group-hover:border-[#017848]"></div>
        //                 <div class="relative z-10">Calculators</div>
        //             </div>
        //             <div class="relative py-2 px-5 text-xl font-roboto rounded-full transition-all duration-300 box-border group">
        //                 <div class="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 group-hover:border-4 group-hover:border-[#017848]"></div>
        //                 <div class="relative z-10">Guides & FAQs</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='flex flex-col md:flex-row py-10 md:py-25 justify-between px-8 md:px-44'>
            <div className='my-5 md:my-10 text-slate-900 roboto-regular text-2xl md:text-4xl text-center md:text-left'>
                Got questions?<br />
                We've got answers
            </div>
            <div className='flex flex-col md:flex-row items-center mt-5 md:mt-0'>
                <div className="flex flex-col md:flex-row py-4 space-y-3 md:space-y-0 md:space-x-5">
                    <div className="border-2 md:border-4 border-[#017848] text-[#017848] py-2 px-5 text-lg md:text-xl font-roboto rounded-full box-border">
                        Our products
                    </div>
                    <div className="relative py-2 px-5 text-lg md:text-xl font-roboto rounded-full transition-all duration-300 box-border group">
                        <div className="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 group-hover:border-4 group-hover:border-[#017848]"></div>
                        <div className="relative z-10">Calculators</div>
                    </div>
                    <div className="relative py-2 px-5 text-lg md:text-xl font-roboto rounded-full transition-all duration-300 box-border group">
                        <div className="absolute inset-0 border-2 border-transparent rounded-full transition-all duration-300 group-hover:border-4 group-hover:border-[#017848]"></div>
                        <div className="relative z-10">Guides & FAQs</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Fourth