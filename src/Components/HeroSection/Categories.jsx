import React from 'react';
import { FaCookie, FaShoppingBasket, FaPumpSoap, FaHeartbeat, FaBaby, FaAppleAlt, FaFish, FaEgg, FaBreadSlice, FaCoffee, FaSnowflake } from 'react-icons/fa';

const categories = [
    { name: 'Fruits & Vegetables', icon: <FaAppleAlt /> },
    { name: 'Meats & Seafood', icon: <FaFish /> },
    { name: 'Breakfast & Dairy', icon: <FaEgg /> },
    { name: 'Breads & Bakery', icon: <FaBreadSlice /> },
    { name: 'Beverages', icon: <FaCoffee /> },
    { name: 'Frozen Foods', icon: <FaSnowflake /> },
    { name: 'Biscuits & Snacks', icon: <FaCookie /> },
    { name: 'Grocery & Staples', icon: <FaShoppingBasket /> },
    { name: 'Household Needs', icon: <FaPumpSoap /> },
    { name: 'Healthcare', icon: <FaHeartbeat /> },
    { name: 'Baby & Pregnancy', icon: <FaBaby /> },
  ];

const Categories = () => {
    return (
        <div>
            <aside className="w-full lg:w-3/4 mb-8 lg:mb-0">
          <div className="rounded-lg shadow p-2">
            <h2 className="text-lg font-bold mb-4">All Categories</h2>
            <ul className="space-y-4">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  className="flex items-center border-b border-[#E5E7EB] text-gray-700 hover:text-purple-700 cursor-pointer transition"
                >
                  <span className="mr-3 text-lg">{cat.icon}</span>
                  <span>{cat.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        </div>
    );
};

export default Categories;