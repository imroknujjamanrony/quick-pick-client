import React from 'react';
import Notification from './Notification';
import Header from './Header';
import logo from '../../assets/Logo/Group 70.png'
import { IoLocationOutline } from 'react-icons/io5';
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav>
            <Notification></Notification>

            <div className='lg:w-[1380px] mx-auto'>
            <Header></Header>
            <div className="flex items-center justify-between py-4 gap-1 lg:gap-4 px-2">
        <div className='flex gap-2 justify-center items-center'>
            <img className='w-38' src={logo} alt="logo" />
            <span className=''><IoLocationOutline className='size-5' /></span>
            <p className='hidden md:block'>Deliver to <span className='font-bold'>all</span></p>
        </div>
        <div>
      <label className="input w-28 md:w-3xl">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search for products, categories or brands..." />
</label>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
          <FaUser className="cursor-pointer" />
          <p><span className='text-[13px]'>Sign In</span> <br /> <span className='font-semibold'>Account</span> </p>
          <FaHeart className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
        </div>
        </div>
            </div>
        </nav>
    );
};

export default Navbar;