import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaTimes, FaTrash } from "react-icons/fa";
import { useDeleteProductImage } from "../../hooks/useUpdateProduct";

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

export default function ProductForm({
  onSubmit,
  isPending,
  data,
  handleDeleteImage,
}) {
  const [previewImages, setPreviewImages] = useState([]);
  const [existingImages, setExistingImages] = useState(data?.images || []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  useEffect(() => {
    if (data) {
      reset({
        productname: data.productname,
        title: data.title,
        sku: data.sku,
        description: data.description,
        category: data.category,
        brand: data.brand,
        price: data.price,
        quantity: data.quantity,
        seller: data.seller,
        isOrganic: data.isOrganic || false,
      });
      setExistingImages(data.images || []);
    } else {
      reset({
        productname: "",
        title: "",
        sku: "",
        description: "",
        category: "",
        brand: "",
        price: "",
        quantity: "",
        seller: "",
        isOrganic: false,
      });
      setExistingImages([]);
    }
  }, [data, reset]);


  const handleImageChange = (e) => {
    const addImageFiles = Array.from(e.target.files);

    if (addImageFiles.length + existingImages.length > 5) {
      toast.error("You can only upload up to 5 images in total.");
      e.target.value = "";
      setPreviewImages([]);
      return;
    }
    setPreviewImages(addImageFiles);
  };


  const handleFormSubmit = async (formData) => {
    if (previewImages.length === 0 && existingImages.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    let submissionData = new FormData();

    for (const key in formData) {
      submissionData.append(key, formData[key]);
    }

    previewImages.forEach((file) => {
      submissionData.append("images", file);
    });

    existingImages.forEach((url) => {
      submissionData.append("existingImages", url);
    });

    onSubmit(submissionData);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="bg-white bg-opacity-90 shadow-xl rounded-xl p-8 max-w-3xl w-full space-y-6"
    >
      <h2 className="text-3xl font-extrabold text-purple-700 text-center mb-6">
        {data ? "Edit Product" : "Add New Product"}
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
          <p className="text-red-500 text-sm mt-1">
            {errors.productname.message}
          </p>
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
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="sku">
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
          rows={6}
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
          defaultValue={data?.category}
          id="category"
          {...register("category")}
          className="w-full rounded-md border border-gray-500 px-4 py-3 text-gray-900"
        >
          <option disabled>Select a category</option>
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

      {/* Price and Quantity */}
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
            <p className="text-red-500 text-sm mt-1">
              {errors.quantity.message}
            </p>
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

      {/* isOrganic */}
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

      {/* Image Upload */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Upload Images (max 5) <span className="text-red-500">*</span>
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleImageChange(e)}
          className="mb-2 border-2"
        />

        {/* Image Previews from db */}
        {existingImages?.length > 0 && data && (
          <div className="flex flex-wrap gap-4 mt-4">
            {existingImages?.map((pimage, index) => (
              <div key={index} className="relative">
                <img
                  key={index}
                  src={pimage}
                  alt={`Preview-${index}`}
                  className="w-24 h-24 object-cover border rounded"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteImage(index)}
                  className="absolute top-0 right-0 mr-2 cursor-pointer mt-2 p-2  hover:bg-red-500 rounded-full "
                >
                  <FaTrash size={12} />
                </button>
              </div>
            ))}

            <div></div>
          </div>
        )}

        {/* Image Previews from selection */}
        {previewImages?.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-4">
            {previewImages?.map((pimage, index) => (
              <div key={index} className="relative">
                <img
                  key={index}
                  src={URL.createObjectURL(pimage)}
                  alt={`Preview-${index}`}
                  className="w-24 h-24 object-cover border rounded"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-0 right-0 mr-2 cursor-pointer mt-2 p-2"
                >
                  <FaTrash size={12} />
                </button>
              </div>
            ))}

            <div></div>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-bold py-3 rounded-lg shadow-lg text-lg disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isPending ? "Saving..." : data ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}
