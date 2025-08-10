
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={"← Prev"}
      nextLabel={"Next →"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={onPageChange}
      containerClassName="flex justify-center items-center gap-2 mt-6 flex-wrap"
      pageClassName="px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer"
      previousClassName="px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer"
      nextClassName="px-3 py-1 border rounded hover:bg-gray-100 cursor-pointer"
      activeClassName="bg-green-600 text-white font-bold"
      breakClassName="px-3 py-1"
    />
  );
};


export default Pagination;
