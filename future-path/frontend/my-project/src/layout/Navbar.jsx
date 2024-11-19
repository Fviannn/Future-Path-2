// src/Navbar.js
import React from 'react';
import { MdOutlineLightMode, } from "react-icons/md";
import { Link } from 'react-router-dom';
import PopUpProfile from './PopUpProfile';


const Navbar = () => {


  return (
    <div className="flex sticky top-0 z-50 bg-white shadow-md rounded-b-xl p-1">
      <nav className="flex justify-between mx-5 py-1 w-full">
        <h1 className="text-2xl font-bold text-black my-2 cursor-pointer">
          FUTURE<span className="text-sky-700">PATH</span>
        </h1>
        <ul className="flex justify-center space-x-1 my-3 ">
          <li className='flex'>
            <Link to="/Home" className="relative px-5 rounded-lg hover:shadow-inner focus:shadow-inner focus:shadow-gray-300 hover:shadow-gray-300 shadow-sm text-black hover:text-sky-700 transition-color duration-300 group ">
              Beranda
              <span className="block h-0.5 w-full bg-sky-700 transition-all duration-500 transform scale-x-0 group-hover:scale-x-125 group-focus:scale-x-125"></span>
            </Link>
          </li>
          <li className='flex'>
            <Link to="/News" className="relative px-5 rounded-lg hover:shadow-inner focus:shadow-inner focus:shadow-gray-300 hover:shadow-gray-300 shadow-sm text-black hover:text-sky-700 transition-color duration-300 group">
              Berita
              <span className="block h-0.5 w-full bg-sky-700 transition-all duration-500 transform scale-x-0 group-hover:scale-x-125 group-focus:scale-x-125"></span>
            </Link>
          </li>
          <li className='flex'>
            <Link to="/List" className="relative px-5 rounded-lg hover:shadow-inner focus:shadow-inner focus:shadow-gray-300 hover:shadow-gray-300 shadow-sm text-black hover:text-sky-700 transition-color duration-300 group-focus:shadow-inner group">
              Pilihan
              <span className="block h-0.5 w-full bg-sky-600 transition-all duration-500 transform scale-x-0 group-hover:scale-x-125 group-focus:scale-x-125"></span>
            </Link>
          </li>
          <li className='flex'>
            <Link to="/FAQ" className="relative px-5 rounded-lg hover:shadow-inner focus:shadow-inner focus:shadow-gray-300 hover:shadow-gray-300 shadow-sm text-center items-center text-black hover:text-sky-700 transition-color duration-300 focus: group">
              Faq
              <span className="block h-0.5 w-full bg-sky-600 transition-all duration-500 transform scale-x-0 group-hover:scale-x-125 group-focus:scale-x-125"></span>
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-5">
          <div className="cursor-pointer flex">
            {/* <PopUpSearch/>
            <div class="relative w-full">
                        <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:outline-none focus-ring-1 focus-ring-sky-700 " placeholder="Search" required />
                        <button type="submit" class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-sky-700 rounded-e-lg border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg></button>
                    </div> */}
          </div>
          <MdOutlineLightMode size={25} />
          <div>
            <PopUpProfile />
          </div>
          {/* <div className='p-2 border rounded-xl cursor-pointer text bg-red-800'>Keluar</div> */}
        </div>
      </nav>

    </div>
  );
};

export default Navbar;