import { useState, useEffect } from "react";
import { useProducts } from "../../hooks/useProduct.js";
import PriceFilterWidget from "../../components/PriceFilterWidget.jsx";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";
import RelatedProducts from "../../components/RelatedProducts.jsx";

const FilterProductPage = () => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [filterOption, setFilterOption] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const queryParams = {
    ...filterOption,
    page: currentPage + 1,
    limit: itemsPerPage,
  };

  console.log(queryParams);

  const { data, isLoading, isFetching } = useProducts(queryParams);

  console.log(data);

  const totalPages = data?.data?.totalPages || 1;
  const productsData = data?.data?.products || [];
  const totalItems = data?.data?.total || 0;

  return (
    <div className="flex flex-col md:flex-row md:w-[80%] mx-auto justify-between">
  {/* Sidebar Filter - Desktop */}
  <aside className="hidden md:block md:w-64 flex-shrink-0 p-4 bg-white">
    <PriceFilterWidget
      setFilterOption={setFilterOption}
      currentPage={currentPage}
    />
  </aside>

  {/* Mobile Filter Overlay */}
  {mobileFilterOpen && (
    <div className="fixed inset-0 z-50 flex md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-transparent bg-opacity-40"
        onClick={() => setMobileFilterOpen(false)}
      ></div>

      {/* Sidebar Content */}
      <div className="relative w-3/4 bg-white p-4 shadow-lg overflow-y-auto z-50">
        <button
          onClick={() => setMobileFilterOpen(false)}
          className="text-red-500 mb-4 font-semibold"
        >
          ✕ Close
        </button>
        <PriceFilterWidget
          setFilterOption={setFilterOption}
          currentPage={currentPage}
        />
      </div>
    </div>
  )}

  {/* Main Content */}
  <main className="p-4 w-[95%] mx-auto">
    {/* Mobile Filter Button */}
    <button
      onClick={() => setMobileFilterOpen(true)}
      className="md:hidden mb-4 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm"
    >
      ☰ Filter
    </button>

    {/* Promotional Section */}
    <section className="mb-8 space-y-2">
      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
        Only This Week
      </span>
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        Grocery store with different treasures
      </h1>
      <p className="text-gray-500 text-md">
        We have prepared special discount for you on grocery
      </p>
      <button className="border-2 p-1.5 rounded-2xl mt-2">shop now</button>
      <p className="text-gray-500 mb-4 text-sm md:text-base">
        Showing {productsData.length} of {totalItems} products
      </p>
    </section>

    {/* Product Grid */}
    <section className="mb-8 min-h-[500px]">
      {!isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productsData.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <RelatedProducts data={product} />
            </Link>
          ))}
        </div>
      )}
    </section>

    {/* Pagination */}
    {totalPages > 1 && (
      <div
        className={`flex justify-center mt-8 ${
          isFetching || isLoading ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="space-x-4 flex items-center">
          <button
            className="border-2 rounded-2xl p-2 cursor-pointer bg-green-500 text-white"
            onClick={() => setCurrentPage((old) => Math.max(old - 1, 0))}
            disabled={currentPage === 0}
          >
            Previous Page
          </button>
          <span>
            Current Page: {currentPage + 1}/{totalPages}
          </span>
          <button
            className="border-2 rounded-2xl p-2 cursor-pointer bg-green-500 text-white"
            onClick={() =>
              setCurrentPage((old) =>
                old + 1 < totalPages ? old + 1 : old
              )
            }
            disabled={
              currentPage + 1 >= totalPages || isLoading || isFetching
            }
          >
            {isLoading || isFetching ? "loading.." : "Next Page"}
          </button>
        </div>
      </div>
    )}
  </main>
</div>

  );
};

export default FilterProductPage;
