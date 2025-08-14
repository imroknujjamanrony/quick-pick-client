import React, {  useState } from "react";
import { FaStar, FaRegStar, FaPaypal } from "react-icons/fa";
import {
  AiOutlineHeart,
  AiOutlinePayCircle,
  AiOutlineShareAlt,
  AiOutlineStar,
  AiOutlineSwap,
  AiOutlineWarning,
} from "react-icons/ai";
import ReactStars from "react-stars";

import RelatedProducts from "../../components/RelatedProducts";
import Carousel from "../../components/ImageSlider.jsx";
import { useParams } from "react-router";
import { useProducts, useSingleProduct } from "../../hooks/useProduct.js";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader.jsx";
import Paginate from "../../components/pagination/paginate.jsx";
import {  submitReeview } from "../../services/productService.js";
import toast from "react-hot-toast";
import useGetReviews from "../../hooks/reviews/useGetReviews.js";

const DetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(0);

  const [ratingStars, setRatingStars] = useState(0);
  const [comment, setComment] = useState("");


  const { data: productDetails, isLoading, refetch } = useSingleProduct(id);

  const { data: reviews, refetch: refetchReviews } = useGetReviews(
    productDetails?._id
  );
  console.log(reviews);

  const { data: related, isFetching } = useProducts({
    searchValue: productDetails?.category?.[0],
    page: currentPage + 1,
    limit: 5,
  });
  const totalPages = related?.data?.totalPages || 1;
  const totalItems = related?.data?.total || 0;

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleSubmitReview = async () => {
    const sentReview = {
      productId: productDetails?._id,
      //todo : replace with actual user data
      userId: "siyam",
      username: "Siyam",
      rating: parseFloat(ratingStars),
      comment: comment,
    };
    submitReeview(sentReview).then(() => {
      setRatingStars(0);
      setComment("");
      toast.success("Review submitted successfully");
      refetchReviews()
    });

    refetch();
  };

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  return (
    <div className="px-4 py-8 w-full md:w-[80%] lg:w-[80%] mx-auto">
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
          <h1 className="text-2xl font-bold">{productDetails?.productname}</h1>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-2 mt-2">
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
          <div className="mt-2 text-sm text-gray-600">
            <p>{productDetails?.title}</p>
          </div>

          {/* Price */}
          <div className="mt-2 flex items-center gap-3">
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

          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-2 font-medium cursor-pointer ${
              activeTab === "reviews"
                ? "border-b-2 border-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Reviews {reviews?.data?.length ? `(${reviews.data.length})` : ""}
          </button>
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

        {/* reviews section */}
        {activeTab === "reviews" && (
          <div className="space-y-4">
            {/* Existing reviews */}
            {reviews?.data?.length > 0 ? (
              reviews.data.map((review, i) => (
                <div
                  key={review._id || i}
                  className="border-b pb-3 text-sm text-gray-700"
                >
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{review.userId}</p>
                    <ReactStars
                      count={5}
                      size={16}
                      value={review.rating}
                      edit={false} // read-only for existing reviews
                    />
                  </div>
                  <p className="mt-1">{review.comment || "No comment"}</p>
                  <span className="text-xs text-gray-500">
                    {new Date(review.createdAt).toLocaleString()}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No reviews yet. Be the first to add one!
              </p>
            )}

            {/* Add new review form */}
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Add your review</h4>
              <ReactStars
                count={5}
                size={30}
                value={ratingStars}
                onChange={setRatingStars}
              />
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment..."
                className="w-full border rounded p-2 mt-2"
              />
              <button
                onClick={handleSubmitReview}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-2"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>

      {related?.data && (
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-4">
            Related products ({totalItems})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {related?.data?.products.map((product) => (
              <Link key={product?._id} to={`/product/${product?._id}`}>
                <RelatedProducts key={product?._id} data={product} />
              </Link>
            ))}
          </div>
        </div>
      )}

      {related?.data && (
        <Paginate
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isFetching={isFetching}
          isLoading={isLoading}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default DetailsPage;
