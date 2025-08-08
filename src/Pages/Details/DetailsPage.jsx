import React, { useEffect, useState } from "react";
import { FaStar, FaRegStar, FaPaypal } from "react-icons/fa";
import {
  AiOutlineHeart,
  AiOutlinePayCircle,
  AiOutlineShareAlt,
  AiOutlineStar,
  AiOutlineSwap,
  AiOutlineWarning,
} from "react-icons/ai";
import ReactStars from "react-rating-stars-component";
import RelatedProducts from "../../components/RelatedProducts";
import Carousel from "../../components/ImageSlider.jsx";
import { useParams } from "react-router";
import axiosI from "../../utils/axiosInstance.js";
import { useQuery } from "@tanstack/react-query";
import { useProducts } from "../../hooks/useProduct.js";
import { Link } from "react-router-dom";

const fetchProduct = async (id) => {
  const { data } = await axiosI.get(`/product/${id}`);
  return data.data;
};

// const related = [
//   {
//     id: 1,
//     name: "Large Garden Spinach & Herb Wrap Tortillas - 15oz 6ct",
//     image:
//       "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212758/pngtree-one-banana-isolated-on-transparent-background-png-image_2414234_ayzgfh.jpg",
//     price: 27.9,
//     oldPrice: 32.9,
//     discount: 16,
//     inStock: true,
//   },
//   {
//     id: 2,
//     name: "Organic Whole Wheat Tortillas - 12oz 8ct",
//     image:
//       "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212757/download_dfrwej.jpg",
//     price: 24.5,
//     oldPrice: 29.99,
//     discount: 18,
//     inStock: true,
//   },
//   {
//     id: 3,
//     name: "Gluten-Free Almond Flour Wraps - 10oz 5ct",
//     image:
//       "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212757/download_dfrwej.jpg",
//     price: 31.75,
//     oldPrice: 35.5,
//     discount: 11,
//     inStock: false,
//   },
//   {
//     id: 4,
//     name: "Jalapeño & Cheddar Flavored Tortillas - 14oz 6ct",
//     image:
//       "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212757/download_dfrwej.jpg",
//     price: 26.25,
//     oldPrice: null,
//     discount: 0,
//     inStock: true,
//   },
//   {
//     id: 5,
//     name: "Sun-Dried Tomato & Basil Wraps - 13oz 7ct",
//     image:
//       "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212757/download_dfrwej.jpg",
//     price: 28.99,
//     oldPrice: 34.2,
//     discount: 15,
//     inStock: true,
//   },
//   {
//     id: 6,
//     name: "Low-Carb Keto Friendly Tortillas - 9oz 10ct",
//     image:
//       "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212757/download_dfrwej.jpg",
//     price: 35.4,
//     oldPrice: 39.99,
//     discount: 12,
//     inStock: true,
//   },
// ];

const DetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { id } = useParams();

  const {
    data: productDetails,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });

  // console.log(productDetails);

  const { data: related } = useProducts({
    searchValue: productDetails?.productname,
  });
  console.log(related);

  if (isLoading) return <div>loading</div>;

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="px-4 py-8 w-full md:w-[80%] mx-auto">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left - Image Slider */}
        <div className="w-full lg:w-[45%]">
          <Carousel
            carouselItems={productDetails?.images}
            isOrganic={productDetails?.isOrganic}
            offer={productDetails?.offer}
          />
        </div>

        {/* Right - Details */}
        <div className="w-full lg:w-[55%]">
          <h1 className="text-2xl font-bold">{productDetails.productname}</h1>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {/* <ReactStars
              count={productDetails?.rattings}
              size={24}
              activeColor="#ffd700"
            /> */}
            <span className="flex">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
            {productDetails?.rattings && (
              <span className="text-sm text-gray-500 border-gray-200 border-2 p-[2px] rounded-md font-semibold">
                {productDetails?.rattings.toFixed(2)}
              </span>
            )}

            {productDetails?.review && (
              <span className="text-sm text-gray-500">
                {productDetails?.review} reviews
              </span>
            )}
            <span className="hidden sm:inline-block text-sm text-gray-500 border-r-2 border-slate-300 h-5"></span>
            <p className="hidden sm:block">
              <span className="text-gray-500">SKU: </span>
              <span className="">{productDetails?.sku}</span>
            </p>
          </div>

          {/* Price */}
          <div className="mt-3 flex items-center gap-3">
            <span className="text-red-500 text-2xl sm:text-3xl font-bold">
              ${productDetails?.price}
            </span>
            {productDetails?.oldPrice && (
              <span className="line-through text-gray-400">
                ${productDetails?.oldPrice}
              </span>
            )}
          </div>

          <button className="bg-[#16a34a] text-white px-4 py-2 mt-3 rounded-lg font-semibold cursor-pointer hover:bg-[#138a3d] transition-colors">
            Order on WhatsApp
          </button>

          {/* Special Offer */}
          <div className="bg-orange-50 border border-orange-300 p-3 rounded-lg mt-4">
            <div className="flex flex-wrap gap-3 items-center">
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
                Remains until the end of the offer
              </p>
            </div>
          </div>

          {/* Quantity & Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4">
            <div className="flex border-slate-300 border-2 rounded">
              <button
                onClick={decreaseQty}
                className="px-3 py-1 cursor-pointer hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                className="w-12 text-center border-x border-slate-300"
                readOnly
              />
              <button
                onClick={increaseQty}
                className="px-3 py-1 cursor-pointer hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button className="bg-[#16a34a] text-white px-5 py-2 rounded-lg font-semibold cursor-pointer hover:bg-[#138a3d] transition-colors">
                Add to Cart
              </button>
              <button className="bg-[#212529] text-white px-5 py-2 rounded-lg font-semibold cursor-pointer hover:bg-[#3a4149] transition-colors">
                Buy Now
              </button>
            </div>
          </div>

          {/* Payment & Warranty */}
          <div className="mt-4 text-sm text-gray-600 space-y-2 border-2 border-slate-200 rounded-2xl p-2">
            <div className="flex items-start gap-4">
              <span className="mt-1">
                <AiOutlinePayCircle />
              </span>
              <div>
                <p>
                  Payment: Payment upon receipt of goods, Payment by card in the
                  department, Google Pay, Online card, -5% discount in case of
                  payment
                </p>
              </div>
            </div>
            <div className="border-t-2 border-slate-200 w-[100%]"></div>
            <div className="flex items-start gap-4">
              <span className="mt-1">
                <AiOutlineWarning />
              </span>
              <p>
                Warranty: The Consumer Protection Act does not provide for the
                return of this product of proper quality.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mt-4 text-gray-500">
            <button className="flex items-center gap-1 hover:text-gray-700">
              <span className="border-2 border-slate-200 p-1.5 rounded hover:bg-gray-100">
                <AiOutlineHeart />
              </span>
              <span className="hidden sm:inline">Add to wishlist</span>
            </button>
            <button className="flex items-center gap-1 hover:text-gray-700">
              <span className="border-2 border-slate-200 p-1.5 rounded hover:bg-gray-100">
                <AiOutlineShareAlt />
              </span>
              <span className="hidden sm:inline">Share</span>
            </button>
            <button className="flex items-center gap-1 hover:text-gray-700">
              <span className="border-2 border-slate-200 p-1.5 rounded hover:bg-gray-100">
                <AiOutlineSwap />
              </span>
              <span className="hidden sm:inline">Compare</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12 border-b border-slate-400">
        <div className="flex gap-4 sm:gap-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`pb-2 font-medium cursor-pointer ${
              activeTab === "description"
                ? "border-b-2 border-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Description
          </button>
          {productDetails?.reviews && (
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-2 font-medium cursor-pointer ${
                activeTab === "reviews"
                  ? "border-b-2 border-black"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Reviews ({productDetails?.reviews?.length})
            </button>
          )}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {/* description section */}
        {activeTab === "description" && (
          <div className="text-gray-600 text-base sm:text-lg font-medium space-y-4">
            <p>{productDetails?.description}</p>
          </div>
        )}

        {/* review section */}
        {activeTab === "reviews" && (
          <div className="text-gray-600 text-base sm:text-lg font-medium space-y-4">
            {productDetails?.reviews.map((review, i) => (
              <div key={i} className="border-b py-3 text-sm text-gray-700">
                <p className="font-semibold">{review.name}</p>
                <p>{review?.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {related?.data && (
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-4">Related products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {related?.data?.products.map((product) => (
              <Link to={`/product/${product?._id}`}>
                <RelatedProducts key={product?._id} data={product} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
