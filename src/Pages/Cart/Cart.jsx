import React from "react";
import { Link } from "react-router-dom";
import Cart from "../../assets/icon/Cart.png";

const CartPage = () => {
  const cartItems = [];

  if (cartItems.length === 0) {
    return (
      <div>
        <div className="max-w-[80%] md:mx-auto font-semibold">
          <Link to="/" className="hover:text-green-600 text-gray-400">
            Home
          </Link>{" "}
          &gt; Cart
        </div>
        <div className="max-w-[80%] mx-auto min-h-[50vh] flex flex-col items-center justify-center px-4">
          x
          <img className="pb-5" src={Cart} alt="cart" />
          {/* Empty cart message */}
          <div className="border border-gray-200 p-4 rounded-lg text-[#F03E3E] font-bold mb-4 w-6/6 md:w-2xl text-center">
            YOUR CART IS CURRENTLY EMPTY.
          </div>
          {/* Return to shop button */}
          <Link
            to="/shop"
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Return to shop
          </Link>
        </div>
      </div>
    );
  }

  return <div className="p-8">{/* Your cart items layout here */}</div>;
};

export default CartPage;
