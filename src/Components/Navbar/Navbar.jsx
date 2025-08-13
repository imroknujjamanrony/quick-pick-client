import Notification from './Notification';
import Header from './Header';
import logo from '../../assets/Logo/Group 70.png';
import { IoLocationOutline } from 'react-icons/io5';
import React, { useContext, useState } from "react";
import { RiContactsLine } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { GrCart } from "react-icons/gr";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { SearchContext } from "../../providers/SearchProvider";

const Navbar = () => {
  const { setSearchValue } = useContext(SearchContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav>
      <Notification />
      <div className="lg:w-[1380px] mx-auto">
        <Header />

        {/* Main Navbar */}
        <div className="flex items-center justify-between py-4 gap-2 lg:gap-4 px-4 lg:px-0">
          {/* Left - Logo & Location */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-24 sm:w-28" />
            <span className="hidden sm:inline text-2xl">
              <IoLocationOutline />
            </span>
            <p className="hidden sm:block text-sm sm:text-base">
              Deliver to <span className="font-bold">all</span>
            </p>
          </div>

          {/* Center - Search (desktop only) */}
          <div className="hidden md:flex flex-1 justify-center max-w-lg">
            <label className="input w-full flex items-center gap-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
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
              <input
                type="search"
                required
                placeholder="Search for products, categories or brands..."
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 outline-none"
              />
            </label>
          </div>

          {/* Right - Desktop Icons */}
          <div className="hidden md:flex gap-4 items-center">
            <button className="text-2xl">
              <RiContactsLine />
            </button>
            <p className="hidden lg:block">
              <span className="text-[12px]">Sign In</span> <br />
              <span className="font-bold">Account</span>
            </p>
            <button className="text-2xl">
              <GoHeart />
            </button>
            <button className="text-2xl">
              <GrCart />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 bg-white border-t border-gray-200 space-y-4">
            {/* Mobile Search */}
            <label className="input w-full flex items-center gap-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
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
              <input
                type="search"
                required
                placeholder="Search for products, categories or brands..."
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 outline-none"
              />
            </label>

            {/* Mobile Actions */}
            <div className="flex gap-6 items-center">
              <button className="text-2xl">
                <RiContactsLine />
              </button>
              <p>
                <span className="text-[12px]">Sign In</span> <br />
                <span className="font-bold">Account</span>
              </p>
              <button className="text-2xl">
                <GoHeart />
              </button>
              <button className="text-2xl">
                <GrCart />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
