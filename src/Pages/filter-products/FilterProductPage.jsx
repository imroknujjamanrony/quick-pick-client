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
    <div className="flex flex-col md:flex-row overflow-hidden border-gray-300">
      {/* Sidebar Filter */}
      <aside className="hidden md:block w-64 p-4 border-r bg-white">
        <PriceFilterWidget
          setFilterOption={setFilterOption}
          currentPage={currentPage}
        />
      </aside>

      {/* Mobile Filter Overlay */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="w-1.5/3 bg-white p-4 overflow-y-auto">
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="text-red-500 mb-4"
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
      <main className="flex-1 p-4 md:ml-20">
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
            {/* <Pagination
              pageCount={totalPages}
              onPageChange={handlePageChange}
              forcePage={currentPage}
              disableInitialCallback={true}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
            /> */}

            <div className="space-x-4">
              <button
                className="border-2 rounded-2xl p-2 cursor-pointer"
                onClick={() => setCurrentPage((old) => Math.max(old - 1, 0))}
                disabled={currentPage === 0}
              >
                Previous Page
              </button>
              <span>
                Current Page: {currentPage + 1}/{totalPages}
              </span>

              <button
                className="border-2 rounded-2xl p-2 cursor-pointer"
                onClick={() =>
                  setCurrentPage((old) =>
                    old + 1 < totalPages ? old + 1 : old
                  )
                }
                disabled={currentPage + 1 >= totalPages}
              >
                Next Page
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default FilterProductPage;
