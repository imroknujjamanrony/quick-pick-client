import React, { useState } from "react";

const PriceFilterWidget = () => {
  // State variables
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("30");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [status, setStatus] = useState([]);

  const category = [
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

  const brand = [
    "Fresh",
    "coca-cola",
    "Nestle",   
    "Pran",
    "Unilever",
  ]

  // Generic checkbox handler
  const handleCheckboxChange = (e, setState) => {
    const value = e.target.value;
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const min = Number(minPrice);
    const max = Number(maxPrice);

    if (isNaN(min) || isNaN(max)) {
      alert("Please enter valid numbers for price.");
      return;
    }

    if (min > max) {
      alert("Min price cannot be greater than max price.");
      return;
    }

    console.log({
      minPrice: min,
      maxPrice: max,
      categories,
      brands,
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
        {category.map((cat) => (
          <div key={cat} className="flex items-center">
            <input
              type="checkbox"
              id={cat.id}
              value={cat}
              checked={categories.includes(cat)}
              onChange={(e) => handleCheckboxChange(e, setCategories)}
              className="mr-2"
            />
            <p>{cat}</p>
          </div>
        ))}
      </div>

      {/* Filter by Brands */}
      <h2 className="font-bold mb-3">Filter by Brands</h2>
      <div className="mb-6 space-y-2">
        {brand.map((brand) => (
          <div key={brand} className="flex items-center">
            <input
              type="checkbox"
              id={brand?.id}
              value={brand}
              checked={brands.includes(brand)}
              onChange={(e) => handleCheckboxChange(e, setBrands)}
              className="mr-2"
            />
            <p>{brand}</p>
          </div>
        ))}
      </div>

      {/* Product Status */}
      <h2 className="font-bold mb-3">Product Status</h2>
      <div className="space-y-2">
        {["In Stock", "On Sale"].map((stat) => (
          <div key={stat} className="flex items-center">
            <input
              type="checkbox"
              id={stat?.id}
              value={stat}
              checked={status.includes(stat)}
              onChange={(e) => handleCheckboxChange(e, setStatus)}
              className="mr-2"
            />
           <p>{stat}</p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default PriceFilterWidget;
