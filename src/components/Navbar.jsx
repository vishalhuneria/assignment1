


import React, { useState } from 'react';
import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';

import { IoIosCall } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState([]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleDropdown = (index) => {
        setOpenDropdowns(prevState =>
            prevState.includes(index) ? prevState.filter(i => i !== index) : [...prevState, index]
        );
    };

    return (
        <nav className="  bg-[004733] fixed top-0 left-0 right-0  flex p-4 text:sm md:text-xl roboto-light  justify-between bg-[#004733] text-white items-center  px-6">
            <div className="flex justify-between items-center">
                <div className='my-3 lg:flex'>
                    <a className='font-bold flex text-white text-2xl  font-serif px-6' href="">Better</a>

                    <ul className="hidden  lg:flex space-x-12  text-white">
                        {['Buy', 'Refinance', 'Heloc', 'Rates', 'Better+'].map((item, index) => (
                            <li key={index} className="relative group">
                                <div className="cursor-pointer hover:text-gray-300">
                                    {item}
                                </div>
                                {/* Dropdown Menu on Hover */}
                                <ul className="absolute left-0 mt-1 w-[200px] bg-white text-black rounded shadow-lg hidden group-hover:block">
                                    <li className="px-4 py-2 hover:bg-gray-200">Apply now</li>
                                    <li className="px-4 py-2 hover:bg-gray-200">Purchase rate</li>
                                    <li className="px-4 py-2 hover:bg-gray-200">Affordability calculator</li>
                                    <li className="px-4 py-2 hover:bg-gray-200">Mortrage calculator</li>
                                    <li className="px-4 py-2 hover:bg-gray-200">learningg centre</li>


                                </ul>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
            <div className='flex space-x-4 items-center' >
                <div className='bg-transparent    bg-[#004733] text-white font-semibold hover:text-black hover:bg-white items-center p-2 border border-white hover:border-transparent rounded-full '><IoIosCall /></div>

                <div className='hidden md:flex'>Sign in</div>

                <div>
                    <button className='p-2 px-4 hover:text-white hidden md:flex hover:bg-[#004733] bg-[#1ee07f] rounded-full  text-slate-950'>Continue</button>
                </div>

                {/* Hamburger Icon for Mobile */}
                <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
                    <FaBars />
                </button>
            </div>


            {/* Fullscreen Menu for Mobile */}
            <div className={`fixed top-0 left-0 w-full h-full bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out md:hidden`}>
                <div>
                    <div className="flex justify-between items-center p-4 border-b border-gray-200">
                        <div className="text-slate-950 text-xl font-semibold">Menu</div>
                        <button onClick={toggleMenu} className="text-slate-950 text-2xl">
                            <FaTimes />
                        </button>
                    </div>
                    <ul className="flex flex-col items-start justify-start h-full space-y-8 text-slate-950 text-2xl pl-8 pt-8">
                        {['Home', 'About Us', 'Services', 'Contact Us'].map((item, index) => (
                            <li key={index} className="relative w-full">
                                <div
                                    onClick={() => toggleDropdown(index)}
                                    className="cursor-pointer flex items-center justify-between"
                                >
                                    <div className='flex'>{item}</div>
                                    <FaChevronDown className={`ml-2 ${openDropdowns.includes(index) ? 'transform rotate-180' : ''}`} />
                                </div>
                                {openDropdowns.includes(index) && (
                                    <ul className="mt-2 bg-white text-black w-full rounded-lg shadow-lg">
                                        <li className="py-2 pl-8 hover:bg-gray-200">Apply now</li>
                                        <li className="py-2 pl-8 hover:bg-gray-200">Mortgage calculator</li>
                                        <li className="py-2 pl-8 hover:bg-gray-200">Services provided</li>
                                        <li className="py-2 pl-8 hover:bg-gray-200">Learning centre</li>
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

            {/* Navbar for Large Screens */}
            <nav className="hidden md:flex bg-[#004733] fixed top-0 left-0 right-0 p-4 text-white">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center space-x-6">
                        <a className="font-bold text-2xl" href="#">Better</a>
                        <ul className="flex space-x-6">
                            {['Buy', 'Refinance', 'Heloc', 'Rates', 'Better+'].map((item, index) => (
                                <li key={index} className="relative group">
                                    <div className="cursor-pointer hover:text-gray-300">{item}</div>
                                    {/* Dropdown Menu on Hover */}
                                    <ul className="absolute left-0 mt-2 w-[200px] bg-white text-black rounded shadow-lg hidden group-hover:block">
                                        <li className="px-4 py-2 hover:bg-gray-200">Apply now</li>
                                        <li className="px-4 py-2 hover:bg-gray-200">Purchase rate</li>
                                        <li className="px-4 py-2 hover:bg-gray-200">Affordability calculator</li>
                                        <li className="px-4 py-2 hover:bg-gray-200">Mortgage calculator</li>
                                        <li className="px-4 py-2 hover:bg-gray-200">Learning centre</li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex space-x-4 items-center">
                        <div className="bg-transparent text-white font-semibold hover:text-black hover:bg-white p-2 border border-white hover:border-transparent rounded-full">
                            <IoIosCall />
                        </div>
                        <div className="hidden md:block">Sign in</div>
                        <button className="p-2 px-4 bg-[#1ee07f] text-slate-950 hover:text-white hover:bg-[#004733] rounded-full">
                            Continue
                        </button>
                        <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
                            <FaBars />
                        </button>
                    </div>
                </div>
            </nav>

        </nav >
    );
};

export default Navbar;

// import React, { useState } from 'react';
// import { FaBars, FaChevronDown, FaTimes } from 'react-icons/fa';
// import { IoIosCall } from "react-icons/io";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [openDropdowns, setOpenDropdowns] = useState([]);

//     const toggleMenu = () => setIsOpen(!isOpen);

//     const toggleDropdown = (index) => {
//         setOpenDropdowns(prevState =>
//             prevState.includes(index) ? prevState.filter(i => i !== index) : [...prevState, index]
//         );
//     };

//     return (
//         <>
//             {/* Navbar for Large Screens */}
//             <nav className="hidden md:flex bg-[#004733] fixed top-0 left-0 right-0 p-4 text-white">
//                 <div className="flex justify-between items-center w-full">
//                     <div className="flex items-center space-x-6">
//                         <a className="font-bold text-2xl" href="#">Better</a>
//                         <ul className="flex space-x-6">
//                             {['Buy', 'Refinance', 'Heloc', 'Rates', 'Better+'].map((item, index) => (
//                                 <li key={index} className="relative group">
//                                     <div className="cursor-pointer hover:text-gray-300">{item}</div>
//                                     {/* Dropdown Menu on Hover */}
//                                     <ul className="absolute left-0 mt-2 w-[200px] bg-white text-black rounded shadow-lg hidden group-hover:block">
//                                         <li className="px-4 py-2 hover:bg-gray-200">Apply now</li>
//                                         <li className="px-4 py-2 hover:bg-gray-200">Purchase rate</li>
//                                         <li className="px-4 py-2 hover:bg-gray-200">Affordability calculator</li>
//                                         <li className="px-4 py-2 hover:bg-gray-200">Mortgage calculator</li>
//                                         <li className="px-4 py-2 hover:bg-gray-200">Learning centre</li>
//                                     </ul>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="flex space-x-4 items-center">
//                         <div className="bg-transparent text-white font-semibold hover:text-black hover:bg-white p-2 border border-white hover:border-transparent rounded-full">
//                             <IoIosCall />
//                         </div>
//                         <div className="hidden md:block">Sign in</div>
//                         <button className="p-2 px-4 bg-[#1ee07f] text-slate-950 hover:text-white hover:bg-[#004733] rounded-full">
//                             Continue
//                         </button>
//                     </div>
//                 </div>
//             </nav>

//             {/* Navbar for Small Screens */}
//             <nav className="md:hidden bg-[#004733] fixed top-0 left-0 right-0 p-4 text-white">
//                 <div className="flex justify-between items-center">
//                     <a className='font-bold text-white text-2xl' href="#">Better</a>
//                     <div className="flex items-center space-x-4">
//                         <button className="text-white text-xl py-2 px-4 hover:bg-[#017848] rounded-full">
//                             <IoIosCall />
//                         </button>
//                         <div className="bg-transparent text-white font-semibold hover:text-black hover:bg-white p-2 border border-white hover:border-transparent rounded-full">
//                             <IoIosCall />
//                         </div>
//                         <div className="hidden md:block">Sign in</div>
//                         <button className="p-2 px-4 bg-[#1ee07f] text-slate-950 hover:text-white hover:bg-[#004733] rounded-full">
//                             Continue
//                         </button>
//                     </div>
//                 </div>

//                 {/* Fullscreen Menu for Mobile */}
//                 <div className={`fixed top-0 left-0 w-full h-full bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out`}>
//                     <div className="flex justify-between items-center p-4 border-b border-gray-200">
//                         <div className="text-slate-950 text-xl font-semibold">Menu</div>
//                         <button onClick={toggleMenu} className="text-slate-950 text-2xl">
//                             <FaTimes />
//                         </button>
//                     </div>
//                     <ul className="flex flex-col items-start justify-start h-full space-y-8 text-slate-950 text-2xl pl-8 pt-8">
//                         {['Home', 'About Us', 'Services', 'Contact Us'].map((item, index) => (
//                             <li key={index} className="relative w-full">
//                                 <div
//                                     onClick={() => toggleDropdown(index)}
//                                     className="cursor-pointer flex items-center justify-between"
//                                 >
//                                     <div className='flex'>{item}</div>
//                                     <FaChevronDown className={`ml-2 ${openDropdowns.includes(index) ? 'transform rotate-180' : ''}`} />
//                                 </div>
//                                 {openDropdowns.includes(index) && (
//                                     <ul className="mt-2 bg-white text-black w-full rounded-lg shadow-lg">
//                                         <li className="py-2 pl-8 hover:bg-gray-200">Apply now</li>
//                                         <li className="py-2 pl-8 hover:bg-gray-200">Mortgage calculator</li>
//                                         <li className="py-2 pl-8 hover:bg-gray-200">Services provided</li>
//                                         <li className="py-2 pl-8 hover:bg-gray-200">Learning centre</li>
//                                     </ul>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>

//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Navbar;

