import React from "react";
import { useForm } from "react-hook-form";

const categories = [
  "Fruits & Vegetables",
  "Baby & Pregnancy",
  "Beverages",
  "Meats & Seafood",
  "Biscuits & Snacks",
  "Breads & Bakery",
  "Breakfast & Dairy",
  "Frozen Foods",
  "Grocery & Staples",
  "Healthcare",
  "Household Needs",
];

export default function ProductForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white bg-opacity-90 shadow-xl rounded-xl p-8 max-w-3xl w-full space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-purple-700 text-center mb-6">
          Add New Product
        </h2>

        {/* Product Name */}
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="productname"
          >
            Product Name <span className="text-red-500">*</span>
          </label>
          <input
            id="productname"
            {...register("productname", { required: "Product name is required" })}
            placeholder="Awesome Organic Apples"
            className={`w-full rounded-md border border-gray-500 px-4 py-3 text-gray-900 ${
              errors.productname ? "border-red-500" : ""
            }`}
          />
          {errors.productname && (
            <p className="text-red-500 text-sm mt-1">{errors.productname.message}</p>
          )}
        </div>

        {/* Title */}
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            {...register("title")}
            placeholder="Best fresh apples 2025"
            className="w-full rounded-md border border-gray-500 px-4 py-3 text-gray-900"
          />
        </div>

        {/* SKU */}
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="sku"
          >
            SKU
          </label>
          <input
            id="sku"
            {...register("sku")}
            placeholder="SKU12345"
            className="w-full rounded-md border border-gray-500 px-4 py-3 text-gray-900"
          />
        </div>

        {/* Description */}
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description")}
            placeholder="Fresh, juicy, and organically grown apples from our farms."
            rows={4}
            className="w-full rounded-md border border-gray-500 px-4 py-3 text-gray-900 resize-none"
          />
        </div>

        {/* Category dropdown */}
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            id="category"
            {...register("category")}
            className="w-full rounded-md border border-gray-500 px-4 py-3 text-gray-900"
            defaultValue=""
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Brand */}
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="brand"
          >
            Brand
          </label>
          <input
            id="brand"
            {...register("brand")}
            placeholder="Farm Fresh"
            className="w-full rounded-md border border-gray-500 px-4 py-3 text-gray-900"
          />
        </div>

        {/* Price and Quantity side by side */}
        <div className="flex gap-6">
          <div className="flex-1">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="price"
            >
              Price ($) <span className="text-red-500">*</span>
            </label>
            <input
              id="price"
              type="number"
              step="0.01"
              {...register("price", {
                required: "Price is required",
                min: { value: 0, message: "Price cannot be negative" },
              })}
              placeholder="19.99"
              className={`w-full rounded-md border border-gray-500 px-4 py-3 text-gray-900 ${
                errors.price ? "border-red-500" : ""
              }`}
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
            )}
          </div>

          <div className="flex-1">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="quantity"
            >
              Quantity <span className="text-red-500">*</span>
            </label>
            <input
              id="quantity"
              type="number"
              {...register("quantity", {
                required: "Quantity is required",
                min: { value: 1, message: "Quantity must be at least 1" },
              })}
              placeholder="100"
              className={`w-full rounded-md border border-gray-500 px-4 py-3 text-gray-900 ${
                errors.quantity ? "border-red-500" : ""
              }`}
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
            )}
          </div>
        </div>

        {/* Seller */}
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="seller"
          >
            Seller <span className="text-red-500">*</span>
          </label>
          <input
            id="seller"
            {...register("seller", { required: "Seller name is required" })}
            placeholder="John's Farm"
            className={`w-full rounded-md border border-gray-500 px-4 py-3 text-gray-900 ${
              errors.seller ? "border-red-500" : ""
            }`}
          />
          {errors.seller && (
            <p className="text-red-500 text-sm mt-1">{errors.seller.message}</p>
          )}
        </div>

        {/* isOrganic toggle */}
        <div className="flex items-center gap-3">
          <input
            id="isOrganic"
            type="checkbox"
            {...register("isOrganic")}
            className="text-gray-300"
          />
          <label htmlFor="isOrganic" className="text-gray-700 font-semibold">
            Organic Product
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-bold py-3 rounded-lg shadow-lg text-lg"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
