import React, { useState } from "react";
import PriceFilterWidget from "../../components/PriceFilterWidget";
import RelatedProducts from "../../components/RelatedProducts";

const products = [
  {
    id: 1,
    name: "Large Garden Spinach & Herb Wrap Tortillas - 15oz 6ct",
    image:
      "https://res.cloudinary.com/ds4hwq3hb/image/upload/v1754212757/download_dfrwej.jpg",
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

const FilterProductPage = () => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    return (
    <div className="flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar Filter */}
      <aside className="hidden md:block w-64 p-4 border-r bg-white">
        <PriceFilterWidget />
      </aside>

      {/* Mobile Filter Overlay */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="w-3/4 bg-white p-4 overflow-y-auto">
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="text-red-500 mb-4"
            >
              ✕ Close
            </button>
            <PriceFilterWidget />
          </div>
          <div
            className="w-1/4 bg-black bg-opacity-40"
            onClick={() => setMobileFilterOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4">
        {/* Mobile Filter Button */}
        <button
          onClick={() => setMobileFilterOpen(true)}
          className="md:hidden mb-4 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm"
        >
          ☰ Filter
        </button>

        {/* Promotional Section */}
        <section className="mb-8">
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
            Only This Week
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Grocery store with different treasures
          </h1>
          <p className="text-gray-500 mb-4 text-sm md:text-base">
            We have prepared special discounts for you on grocery products...
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded-full text-sm md:text-base">
            Shop Now →
          </button>
        </section>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="">
              <RelatedProducts data={product} />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default FilterProductPage;
