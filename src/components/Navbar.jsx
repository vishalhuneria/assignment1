// import React, { useEffect, useState } from 'react';
// import { IoIosCall } from "react-icons/io";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [sticky, setSticky] = useState(false);
//     //set toggle
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     }


//     useEffect(() => {
//         const handleScroll = () => {
//             if (Window.scrollY > 100) {
//                 setSticky(true);
//             }
//             else {
//                 setSticky(false);
//             }
//         }
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.addEventListener('scroll', handleScroll);
//         }
//     })

//     const navItems = [
//         { link: "Buy", path: "Buy" },
//         { link: "Refinance", path: "Refinance" },
//         { link: "HELOC", path: "HELOC" },
//         { link: "Rates", path: "Rates" },
//         { link: "Better", path: "Better" },

//     ]

//     return (
//         <header className='w-full  bg-[004733] fixed top-0 left-0 right-0 ' >
//             <nav className='flex p-4 text-xl roboto-light  smooth justify-between bg-[#004733] text-white items-center  px-6'>
//                 <div className='flex space-x-6 '  >
//                     <a className='font-bold text-white-700 text-2xl  font-serif px-6' href="">Better</a>
//                     {/* <ul className='md:flex text-white-600 space-x-6  hidden'>
//                         {
//                             navItems.map(({ link, path }) =>
//                                 <a className='peer ' href={path}>{link}</a>

//                             )
//                         }
//                     </ul> */}
//                     <ul className="flex space-x-8 text-white roboto-light">
//                         <li className="relative group">
//                             <a href="#" className="hover:text-gray-300">Buy</a>
//                             <ul className="absolute w-[400px] mt-1 left-0  hidden group-hover:block bg-white text-black rounded shadow-lg">
//                                 <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 1</a></li>
//                                 <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 2</a></li>
//                             </ul>
//                         </li>
//                         <li className="relative group">
//                             <a href="#" className="hover:text-gray-300">Refinance</a>
//                             <ul className="absolute left-0 mt-1 hidden group-hover:block bg-white text-black rounded shadow-lg">
//                                 <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 1</a></li>
//                                 <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 2</a></li>
//                             </ul>
//                         </li>
//                         <li className="relative group">
//                             <a href="#" className="hover:text-gray-300">Services</a>
//                             <ul className="absolute left-0 mt-1 hidden group-hover:block bg-white text-black rounded shadow-lg">
//                                 <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 1</a></li>
//                                 <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 2</a></li>
//                             </ul>
//                         </li>
//                         <li className="relative group">
//                             <a href="#" className="hover:text-gray-300">Contact Us</a>
//                             <ul className="absolute left-0 mt-1 hidden group-hover:block bg-white text-black rounded shadow-lg">
//                                 <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 1</a></li>
//                                 <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Submenu 2</a></li>
//                             </ul>
//                         </li>
//                     </ul>





//                 </div>
//                 <div className='flex space-x-4 text-[18px]  px-6'>
//                     <button class="bg-transparent   md:flex hidden bg-[#004733] text-white font-semibold hover:text-black hover:bg-white items-center px-3 border border-white hover:border-transparent rounded-full">
//                         <IoIosCall />
//                     </button>
//                     <button class="bg-transparent  text-white-600  py-2 px-4   ">
//                         Sign in
//                     </button>

//                     <button className='bg-transparent   md:hidden bg-[#004733] text-white font-semibold hover:text-black hover:bg-white items-center px-3 border border-white hover:border-transparent rounded-full'>
//                         <GiHamburgerMenu />
//                     </button>

//                 </div>

//             </nav>
//         </header>
//     )
// }

// export default Navbar


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
        <nav className=" w-full  bg-[004733] fixed top-0 left-0 right-0  flex p-4 text-xl roboto-light  smooth justify-between bg-[#004733] text-white items-center  px-6">
            <div className="flex justify-between items-center">
                <div className='my-3 lg:flex'>
                    <a className='font-bold flex text-white text-2xl  font-serif px-6' href="">Better</a>

                    <ul className="hidden lg:flex space-x-12  text-white">
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
                    <button className='p-2 px-4 hover:text-white hover:bg-[#004733] bg-[#1ee07f] rounded-full  text-slate-950'>Continue</button>
                </div>

                {/* Hamburger Icon for Mobile */}
                <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
                    <FaBars />
                </button>
            </div>


            {/* Fullscreen Menu for Mobile */}
            <div className={`fixed top-0 left-0 w-full h-full bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out md:hidden`}>
                <div className="flex justify-between items-center p-4">
                    <div className="text-slate-950 text-xl">Menu</div>
                    <button onClick={toggleMenu} className="text-slate-950 text-2xl">
                        <FaTimes />
                    </button>
                </div>
                <ul className="flex  roboto-light text-sm flex-col items-start justify-start h-full space-y-8 text-slate-950 text-2xl pl-8 pt-8">
                    {['Home', 'About Us', 'Services', 'Contact Us'].map((item, index) => (
                        <li key={index} className="relative w-full">
                            <div
                                onClick={() => toggleDropdown(index)}
                                className="cursor-pointer flex items-center"
                            >
                                <div className='flex justify-between'> <div className='flex'>{item}</div> <FaChevronDown className="ml-2 flex" /></div>
                            </div>
                            {openDropdowns.includes(index) && (
                                <ul className="mt-2 bg-white text-black w-full rounded-lg shadow-lg">
                                    <li className="py-2 pl-8 hover:bg-gray-200">Apply now</li>
                                    <li className="py-2 pl-8 hover:bg-gray-200">Mortrage calculator</li>
                                    <li className="py-2 pl-8 hover:bg-gray-200">services provided</li>

                                    <li className="py-2 pl-8 hover:bg-gray-200">learning centre</li>


                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
