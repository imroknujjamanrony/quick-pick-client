import React from 'react';

const Header = () => {
    return (
        <div className="bg-gray-100 text-sm text-gray-700 flex gap-5 lg:justify-between items-center px-4 py-2">
        <div className="flex gap-4 text-[#6B7280] text-[12px]">
          <span>About Us</span>
          <span>My Account</span>
          <span>Wishlist</span>
          <span>We deliver to you every day from 7:00 to 23:00</span>
        </div>
        <div className='flex gap-4 text-[#6B7280] text-[12px]'>
        <span>English</span>
          <span>USD</span>
          <span>Order Tracking</span>
        </div>
      </div>
    );
};

export default Header;