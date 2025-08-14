import React from "react";

const Paginate = ({
  isFetching,
  isLoading,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
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
            setCurrentPage((old) => (old + 1 < totalPages ? old + 1 : old))
          }
          disabled={currentPage + 1 >= totalPages || isLoading || isFetching}
        >
          {isLoading || isFetching ? "loading.." : "Next Page"}
        </button>
      </div>
    </div>
  );
};

export default Paginate;
