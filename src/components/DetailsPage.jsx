import React, { useState } from "react";
import { FaStar, FaRegStar, FaPaypal } from "react-icons/fa";
import {
  AiOutlineHeart,
  AiOutlinePayCircle,
  AiOutlineShareAlt,
  AiOutlineStar,
  AiOutlineSwap,
  AiOutlineWarning,
} from "react-icons/ai";
// import banana1 from "../assets/download.jpg";
import ReactStars from "react-rating-stars-component";
import RelatedProducts from "./RelatedProducts";
import Carousel from "./ImageSlider";

const productDetails = {
  productName: "Marketside Fresh Organic Bananas, Bunch",
  productImage: [
    {
      img: "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212758/pngtree-one-banana-isolated-on-transparent-background-png-image_2414234_ayzgfh.jpg",
    },
    {
      img: "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212757/images_tdjuaa.jpg",
    },
    {
      img: "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212757/download_dfrwej.jpg",
    },
    {
      img: "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212757/pngtree-a-peeled-giant-banana-image_1201052_tbnjen.jpg",
    },
  ],
  rattings: 5.0,
  review: 2,
  sku: "EIUDBGIOD",
  price: 0.89,
  oldPrice: 1.99,
  description: 'lorem50 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. lorem50 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  reviews: [
    {
      name: "John Doe",
      comment: "Great bananas! Fresh and tasty.",
    },
    {
      name: "Jane Smith",
      comment: "Good quality but a bit pricey.",
    },
  ],
  type: "ORGANIC",
  offer: "56%",
};

const related = [
  {
    id: 1,
    name: "Large Garden Spinach & Herb Wrap Tortillas - 15oz 6ct",
    image:
      "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212758/pngtree-one-banana-isolated-on-transparent-background-png-image_2414234_ayzgfh.jpg",
    price: 27.9,
    oldPrice: 32.9,
    discount: 16,
    inStock: true,
  },
  {
    id: 2,
    name: "Organic Whole Wheat Tortillas - 12oz 8ct",
    image:
      "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212757/download_dfrwej.jpg",
    price: 24.5,
    oldPrice: 29.99,
    discount: 18,
    inStock: true,
  },
  {
    id: 3,
    name: "Gluten-Free Almond Flour Wraps - 10oz 5ct",
    image:
      "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212757/download_dfrwej.jpg",
    price: 31.75,
    oldPrice: 35.5,
    discount: 11,
    inStock: false,
  },
  {
    id: 4,
    name: "Jalapeño & Cheddar Flavored Tortillas - 14oz 6ct",
    image:
      "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212757/download_dfrwej.jpg",
    price: 26.25,
    oldPrice: null,
    discount: 0,
    inStock: true,
  },
  {
    id: 5,
    name: "Sun-Dried Tomato & Basil Wraps - 13oz 7ct",
    image:
      "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212757/download_dfrwej.jpg",
    price: 28.99,
    oldPrice: 34.2,
    discount: 15,
    inStock: true,
  },
  {
    id: 6,
    name: "Low-Carb Keto Friendly Tortillas - 9oz 10ct",
    image:
      "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212757/download_dfrwej.jpg",
    price: 35.4,
    oldPrice: 39.99,
    discount: 12,
    inStock: true,
  },
];

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="px-4 py-8 min-h-screen">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left - Image Slider */}
        <div className="gap-4 mt-4 w-[99%] mx-auto">
          <Carousel
            carouselItems={productDetails?.productImage}
            type={productDetails?.type}
            offer={productDetails?.offer}
          />
        </div>

        {/* Right - Details */}
        <div>
          <h1 className="text-[38px] font-bold">
            {/* {productDetails.productName} */}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <ReactStars
              count={productDetails?.rattings}
              size={24}
              activeColor="#ffd700"
            />
            <span className="flex">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
            <span className="text-sm text-gray-500 border-gray-200 border-2 p-[2px] rounded-md font-semibold">
              {productDetails?.rattings.toFixed(2)}
            </span>

            <span className="text-sm text-gray-500">
              {productDetails?.review}
            </span>
            <span className="text-sm text-gray-500 border-r-2 border-slate-300  h-5"></span>
            <p>
              <span className="text-gray-500">SKU : </span>
              <span className="">{productDetails?.sku}</span>
            </p>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-center gap-3">
            <span className="text-red-500 text-3xl font-bold">
              ${productDetails?.price}
            </span>
            <span className="line-through text-gray-400">
              ${productDetails?.oldPrice}
            </span>
          </div>

          <button className="bg-[#16a34a] text-white px-4 py-2 mt-3 rounded-lg font-semibold  cursor-pointer">
            Order on WhatsApp
          </button>

          {/* Special Offer */}
          <div className="bg-orange-50 border border-orange-300 p-3 rounded-lg mt-4">
            <div className=" sm:flex gap-3  items-center space-y-2 sm:space-y-0">
              <p className="text-orange-600 text-sm font-bold">
                Special Offer:
              </p>
              <div className="bg-orange-500 text-white px-2 py-1 rounded">
                81
              </div>
              <div className="bg-orange-500 text-white px-2 py-1 rounded">
                80
              </div>
              <div>:</div>
              <div className="bg-orange-500 text-white px-2 py-1 rounded">
                50
              </div>
              <p className="text-sm font-medium">
                Remains untill the end of the offer
              </p>
            </div>
          </div>

          {/* Quantity & Buttons */}
          <div className="flex items-center gap-3 mt-4">
            <div className="flex border-slate-300 border-2 rounded">
              <button
                onClick={decreaseQty}
                className="px-1 py-1 cursor-pointer"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                className="w-12 text-center -x"
                readOnly
                disabled
              />
              <button
                onClick={increaseQty}
                className="px-1 py-1 cursor-pointer"
              >
                +
              </button>
            </div>
            <button className="bg-[#16a34a] text-white px-5 py-2 rounded-lg font-semibold cursor-pointer">
              Add to Cart
            </button>
            <button className="bg-[#212529] text-white px-5 py-2 rounded-lg font-semibold cursor-pointer">
              Buy Now
            </button>
          </div>

          {/* Payment & Warranty */}
          <div className="mt-4 text-sm text-gray-600 space-y-2 border-2  border-slate-200 rounded-2xl">
            <div className="flex items-center gap-4 p-2">
              <span>
                <AiOutlinePayCircle />
              </span>
              <div>
                <p className=" ">
                  Payment: Payment upon receipt of goods, Payment by card in the
                  department, Google Pay, Online card, -5% discount in case of
                  payment
                </p>
              </div>
            </div>
            <div className="border-t-2 border-slate-200 w-[100%]"></div>
            <div className="flex items-center gap-4 p-2">
              <span>
                <AiOutlineWarning />
              </span>
              <p>
                Warranty: The Consumer Protection Act does not provide for the
                return of this product of proper quality.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-4 text-gray-500">
            <button className="flex items-center gap-1">
              <span className="border-2 border-slate-200 p-1.5">
                <AiOutlineHeart />
              </span>{" "}
              Add to wishlist
            </button>
            <button className="flex items-center gap-1">
              <span className="border-2 border-slate-200 p-1.5">
                {" "}
                <AiOutlineShareAlt />
              </span>{" "}
              Share
            </button>
            <button className="flex items-center gap-1">
              <span className="border-2 border-slate-200 p-1.5">
                {" "}
                <AiOutlineSwap />
              </span>{" "}
              Compare
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12 border-b border-slate-400">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`pb-2 font-medium cursor-pointer ${
              activeTab === "description"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-2 font-medium cursor-pointer ${
              activeTab === "reviews"
                ? "border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Reviews (2)
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {/* description section */}
        {activeTab === "description" && (
          <div className="text-gray-600 text-lg font-medium space-y-4">
            <p>{productDetails?.description}</p>
          </div>
        )}

        {/* review section */}
        {activeTab === "reviews" && (
          <div className="text-gray-600 text-lg font-medium space-y-4">
            {productDetails?.reviews.map((review, i) => (
              <div key={i} className="border-b py-3 text-sm text-gray-700">
                <p className="font-semibold">{review.name}</p>
                <p>{review?.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Related Products */}
      <div className="mt-10">
        <h2 className="text-lg font-bold mb-4">Related products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {related.map((product) => (
            <RelatedProducts key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
