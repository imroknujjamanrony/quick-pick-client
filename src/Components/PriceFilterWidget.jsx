import React, { useState } from "react";
import toast from "react-hot-toast";

const PriceFilterWidget = ({ setFilterOption }) => {
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("30");
  const [category, setCategory] = useState(""); // Single value
  const [brand, setBrand] = useState(""); // Single value
  const [status, setStatus] = useState(""); // Single value

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

  const brands = ["Fresh", "coca-cola", "Nestle", "Pran", "Unilever"];
  const statusOptions = ["In Stock", "On Sale" , 'Organic', 'Featured Products'];

  const handleSubmit = (e) => {
    e.preventDefault();

    const min = Number(minPrice);
    const max = Number(maxPrice);

    if (isNaN(min) || isNaN(max)) {
      toast.error("Please enter valid numbers for price.");
      return;
    }

    if (min > max) {
      toast.error("Min price cannot be greater than max price.");
      return;
    }

    console.log("Selected filters:", {
      minPrice: min,
      maxPrice: max,
      category,
      brand,
      status
    });

    setFilterOption({
      minPrice: min,
      maxPrice: max,
      category,
      brand,
      status,
    });
  };

  return (
    <form
      className="w-64 bg-white p-4 font-sans text-sm text-gray-800"
      onSubmit={handleSubmit}
    >
      <h1 className="text-lg font-bold mb-4">Widget price filter</h1>

      {/* Price Range */}
      <div className="mb-6">
        <table className="w-full mb-2">
          <thead>
            <tr>
              <th className="text-left font-normal pb-1">Min price</th>
              <th className="text-left font-normal pb-1">Max price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full border p-1 rounded"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full border p-1 rounded ml-2"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="border-t border-gray-200 mb-2"></div>

        <div className="text-center py-2 flex justify-between items-center">
          <span className="font-medium">
            Price: ${minPrice} — ${maxPrice}
          </span>
          <button
            type="submit"
            className="btn border-2 bg-gray-400 text-white p-2 rounded-md cursor-pointer"
          >
            Filter
          </button>
        </div>

        <div className="border-t border-gray-200 mt-2"></div>
      </div>

      {/* Product Categories */}
      <h2 className="font-bold mb-3">Product Categories</h2>
      <div className="mb-6 space-y-2">
        {categories.map((cat) => (
          <div key={cat} className="flex items-center">
            <input
              type="radio"
              name="category"
              id={`category-${cat}`}
              value={cat}
              checked={category === cat}
              onChange={() => setCategory(cat)}
              className="mr-2"
            />
            <label htmlFor={`category-${cat}`}>{cat}</label>
          </div>
        ))}
      </div>

      {/* Filter by Brands */}
      <h2 className="font-bold mb-3">Filter by Brands</h2>
      <div className="mb-6 space-y-2">
        {brands.map((br) => (
          <div key={br} className="flex items-center">
            <input
              type="radio"
              name="brand"
              id={`brand-${br}`}
              value={br}
              checked={brand === br}
              onChange={() => setBrand(br)}
              className="mr-2"
            />
            <label htmlFor={`brand-${br}`}>{br}</label>
          </div>
        ))}
      </div>

      {/* Product Status */}
      <h2 className="font-bold mb-3">Product Status</h2>
      <div className="space-y-2">
        {statusOptions.map((stat) => (
          <div key={stat} className="flex items-center">
            <input
              type="radio"
              name="status"
              id={`status-${stat}`}
              value={stat}
              checked={status === stat}
              onChange={() => setStatus(stat)}
              className="mr-2"
            />
            <label htmlFor={`status-${stat}`}>{stat}</label>
          </div>
        ))}
      </div>
    </form>
  );
};

export default PriceFilterWidget;