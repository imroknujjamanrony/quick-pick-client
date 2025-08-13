import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { useLocation } from "react-router";

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
  handleUpdatePhoto,
  updateImagePending,
}) {
  const [images, setImages] = useState([]);
  const { pathname } = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Populate form when editing or reset when adding
  useEffect(() => {
    if (data) {
      reset({
        productname: data.productname || "",
        title: data.title || "",
        sku: data.sku || "",
        description: data.description || "",
        category: data.category || "",
        brand: data.brand || "",
        price: data.price || "",
        quantity: data.quantity || "",
        seller: data.seller || "",
        isOrganic: data.isOrganic || false,
      });
      setImages(data.images || []); // images from DB as URLs
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
      setImages([]);
    }
  }, [data, reset]);

  // Handle adding new images
  const handleImageChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const totalImages = [...images, ...newFiles];

    if (totalImages.length > 5) {
      toast.error("You can only upload up to 5 images.");
      setImages([]);

      return;
    }

    setImages(totalImages);

    // For edit mode, trigger backend update for images
    if (data) {
      handleUpdatePhoto(newFiles);
    }
  };

  // Remove specific image by index
  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);

    // For DB image deletion
    if (data && typeof images[index] === "string") {
      handleDeleteImage(images[index]); // pass image URL or ID
    }
  };

  // Submit form
  const handleFormSubmit = async (formData) => {
    if (images.length === 0) {
      toast.error("Please select at least one image.");
      return;
    }

    let submissionData = new FormData();
    for (const key in formData) {
      submissionData.append(key, formData[key]);
    }

    if (pathname.includes("/add-product")) {
      images.forEach((img) => {
        if (img instanceof File) {
          submissionData.append("images", img);
        }
      });
    }

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
        <label className="block text-gray-700 font-semibold mb-2">
          Product Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register("productname", { required: "Product name is required" })}
          placeholder="Awesome Organic Apples"
          className={`w-full rounded-md border px-4 py-3 ${
            errors.productname ? "border-red-500" : "border-gray-500"
          }`}
        />
        {errors.productname && (
          <p className="text-red-500 text-sm">{errors.productname.message}</p>
        )}
      </div>

      {/* Title */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Title</label>
        <input
          {...register("title")}
          placeholder="Best fresh apples 2025"
          className="w-full rounded-md border border-gray-500 px-4 py-3"
        />
      </div>

      {/* SKU */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">SKU</label>
        <input
          {...register("sku")}
          placeholder="SKU12345"
          className="w-full rounded-md border border-gray-500 px-4 py-3"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Description
        </label>
        <textarea
          {...register("description")}
          placeholder="Fresh, juicy, and organically grown apples."
          rows={4}
          className="w-full rounded-md border border-gray-500 px-4 py-3 resize-none"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Category
        </label>
        <select
          {...register("category")}
          className="w-full rounded-md border border-gray-500 px-4 py-3"
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Brand */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Brand</label>
        <input
          {...register("brand")}
          placeholder="Farm Fresh"
          className="w-full rounded-md border border-gray-500 px-4 py-3"
        />
      </div>

      {/* Price & Quantity */}
      <div className="flex gap-6">
        <div className="flex-1">
          <label className="block text-gray-700 font-semibold mb-2">
            Price ($) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            step="0.01"
            {...register("price", {
              required: "Price is required",
              min: { value: 0, message: "Price cannot be negative" },
            })}
            className={`w-full rounded-md border px-4 py-3 ${
              errors.price ? "border-red-500" : "border-gray-500"
            }`}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        <div className="flex-1">
          <label className="block text-gray-700 font-semibold mb-2">
            Quantity <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            {...register("quantity", {
              required: "Quantity is required",
              min: { value: 1, message: "Must be at least 1" },
            })}
            className={`w-full rounded-md border px-4 py-3 ${
              errors.quantity ? "border-red-500" : "border-gray-500"
            }`}
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm">{errors.quantity.message}</p>
          )}
        </div>
      </div>

      {/* Seller */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Seller <span className="text-red-500">*</span>
        </label>
        <input
          {...register("seller", { required: "Seller name is required" })}
          placeholder="John's Farm"
          className={`w-full rounded-md border px-4 py-3 ${
            errors.seller ? "border-red-500" : "border-gray-500"
          }`}
        />
        {errors.seller && (
          <p className="text-red-500 text-sm">{errors.seller.message}</p>
        )}
      </div>

      {/* isOrganic */}
      <div className="flex items-center gap-2">
        <input type="checkbox" {...register("isOrganic")} />
        <label className="text-gray-700 font-semibold">Organic Product</label>
      </div>

      {/* Image Upload */}
      {pathname.includes("/add-product") && (
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Upload Images (max 5)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="border p-2"
          />

          {/* Preview */}

          <div className="flex flex-wrap gap-3 mt-3">
            {images.map((image, index) => {
              let previewSrc;
              if (image instanceof File) {
                previewSrc = URL.createObjectURL(image);
              } else if (typeof image === "string") {
                previewSrc = image;
              }

              return (
                <img
                  key={index}
                  src={previewSrc}
                  alt="Preview"
                  className="w-20 h-20 object-cover"
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Image update */}
      {pathname.includes("/admin-product-edit/") && (
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Update Images (max 5)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="border p-2"
          />

          {/* Preview */}
          <div className="">
            {updateImagePending ? (
              "loading"
            ) : (
              <div className="flex flex-wrap gap-3 mt-3">
                {images?.map((image, index) => {
                  let previewSrc = "";
                  if (image instanceof File) {
                    previewSrc = URL.createObjectURL(image);
                  } else if (typeof image === "string") {
                    previewSrc = image;
                  }

                  return (
                    <div key={index} className="">
                      <img
                        src={previewSrc}
                        alt="Preview"
                        className="w-20 h-20 object-cover rounded"
                      />
                    </div>
                  );
                })}
                {images?.length > 0 && (
                  <button
                    type="button"
                    onClick={() => handleDeleteImage()}
                    className="bg-red-500 mt-3 text-white rounded-full p-4 cursor-pointer"
                  >
                    <FaTrash size={12} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending || updateImagePending}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg disabled:opacity-70"
      >
        {isPending ? "Saving..." : data ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}
