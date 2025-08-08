import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-100 text-[#6B7280] text-[12px] px-4 py-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        {/* Left Section (About, Account, Wishlist, Delivery Info) */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="hover:underline cursor-pointer">About Us</span>
          <span className="hover:underline cursor-pointer">My Account</span>
          <span className="hover:underline cursor-pointer">Wishlist</span>
          <span className="hidden sm:inline">
            We deliver to you every day from 7:00 to 23:00
          </span>
        </div>

        {/* Right Section (Language, Currency, Tracking) */}
        <div className="flex items-center gap-x-4">
          <span className="hover:underline cursor-pointer">English</span>
          <span className="hover:underline cursor-pointer">USD</span>
          <span className="hover:underline cursor-pointer">Order Tracking</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
