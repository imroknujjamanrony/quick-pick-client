// SecondaryNavbar.jsx
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SecondaryNavbar() {
  return (
    <div className="border-b border-gray-200 mb-3">
      <div className="max-w-7xl mx-auto flex-wrap mb-10 flex items-center justify-between">
        
        {/* Left Links */}
        <ul className="flex items-center space-x-6 text-sm font-medium">
          <li className="text-purple-600 border-b-2 border-purple-600 pb-1 cursor-pointer">
            Home
          </li>
          <li className="group relative cursor-pointer">
            Shop
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-4 z-50">
              <p>Dropdown Item</p>
            </div>
          </li>
          <li>Fruits &amp; Vegetables</li>
          <li>Beverages</li>
          <li>Blog</li>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>

        {/* Right Links */}
        <ul className="flex items-center space-x-6 text-sm font-medium">
          <li className="group relative cursor-pointer">
            Trending Products
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg p-4 z-50">
              <p>Trending Item</p>
            </div>
          </li>
          <li className="flex items-center gap-1 text-red-500 font-semibold cursor-pointer">
            Almost Finished 
            <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">SALE</span>
          </li>
        </ul>
        
      </div>
    </div>
  );
}
