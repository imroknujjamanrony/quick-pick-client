// RelatedProducts.js
import { AiOutlineStar } from "react-icons/ai";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const RelatedProducts = ({ data }) => {
  const {
    productname,
    images = [],
    price,
    title,
    quantity,
    isOrganic,
    seller,
    _id = '',
  } = data;

  const image = images[0] || "/placeholder.jpg";
  const inStock = parseInt(quantity) > 0;

  return (
    <div className="bg-white border w-auto border-gray-200 rounded-md shadow-sm">
      {/*  Image */}
      <div className="w-full relative">
        <img
          src={image}
          alt={productname}
          className="w-full h-48 object-cover"
        />

        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <FaHeart className="text-gray-600" />
        </button>
        {/* Organic tag */}
        {isOrganic == "true" && (
          <span className="text-gray-200 text-xs font-semibold mb-4 absolute bottom-0 ml-4  rounded-3xl p-2 bg-green-600 ">
            ✅ Organic
          </span>
        )}
      </div>

      {/* Product details */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-1">
          {productname}
        </h3>

        {/* Rating (Static) */}
        <div className="flex items-center mb-2">
          <span className="flex text-yellow-400">
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </span>
          <span className="text-xs text-gray-500 ml-1">(4.0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center mb-3">
          <span className="text-lg font-bold text-gray-900">
            ${parseFloat(price).toFixed(2)}
          </span>
        </div>

        {/* Buttons and stock */}
        <div className="flex items-center gap-4">
          <button
            className={`py-2 px-4 rounded-md flex items-center justify-center text-sm ${
              inStock
                ? "bg-green-600 text-white"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!inStock}
          >
            <FaShoppingCart className="mr-2" />
          </button>

          <p
            className={`text-xs font-medium ${
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
