// RelatedProducts.js
import { AiOutlineStar } from "react-icons/ai";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const RelatedProducts = ({ data }) => {
  const { name, image, price, oldPrice, discount, inStock } = data;

  return (
    <div className="bg-white border w-auto border-gray-200">
      {/*  Image */}
      <div className="w-full relative">
        <img src={image} alt={name} className="w-full h-48" />

        {/* Discount  */}
        {discount > 0 && (
          <span className=" bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute top-2 left-2">
            {discount}%
          </span>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <FaHeart className="text-gray-600" />
        </button>
      </div>

      {/* Product name */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-2 ">{name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          {/* <ReactStars
            count={5}
            size={18}
            value={3}
            edit={false}
            activeColor="#ffd700"
          /> */}
          <span className="flex">
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </span>
          <span className="text-xs text-gray-500 ml-1">(3.0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center mb-3">
          <span className="text-lg font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-5">
          {/* Add to Cart Button */}
          <button
            className={`py-2 px-4 rounded-md flex items-center justify-center  cursor-pointer
            ${
              inStock
                ? "bg-green-600  text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!inStock}
          >
            <FaShoppingCart className="mr-2" />
          </button>

          {/* Stock Status */}
          <p
            className={`text-xs font-medium mb-3 text-center ${
              inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {inStock ? "IN STOCK" : "OUT OF STOCK"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
