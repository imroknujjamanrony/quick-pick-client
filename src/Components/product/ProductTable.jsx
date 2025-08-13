import { useState } from "react";
import { useDeleteProduct } from "../../hooks/useProduct.js";
import Paginate from "../pagination/paginate.jsx";
import { useNavigate, useRoutes } from "react-router";

export default function ProductTable({
  data,
  mutate,
  refetch,
  totalPages,
  setCurrentPage,
  currentPage,
  isFetching,
  isLoading,
}) {
  const products = data?.data?.products;
  const [openDropdown, setOpenDropdown] = useState(null);
  const totalItems = data?.data?.total || 0;
  const navigate = useNavigate();

  const handleEdit = (product) => {
    console.log("Edit:", product);
    navigate(`/admin-product-edit/${product?._id}`);

    // Open edit modal or navigate to edit page
  };

  const handleDelete = (product) => {
    console.log("Delete:", product);
    // Show confirm dialog & delete product
    mutate(product?._id);
    refetch();
  };

  const handleFeature = (product) => {
    console.log("Feature:", product);
    // API call to mark as featured
  };

  return (
    <div className="overflow-x-auto">
      <span className="text-2xl font-bold">total products : {totalItems}</span>
      <table className="w-full border border-gray-300 text-sm sm:text-base">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Product Name</th>
            <th className="border p-2">SKU</th>
            <th className="border p-2  sm:table-cell">Category</th>
            <th className="border p-2">Price</th>
            <th className="border p-2  sm:table-cell">Quantity</th>
            <th className="border p-2">Images</th>
            <th className="border p-2  md:table-cell">Organic</th>
            <th className="border p-2  md:table-cell">Featured</th>
            <th className="border p-2  sm:table-cell">Seller</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{product?.productname}</td>
              <td className="border p-2">{product?.sku}</td>
              <td className="border p-2  sm:table-cell">
                {product?.category ?? "N/A"}
              </td>
              <td className="border p-2">{product?.price}</td>
              <td className="border p-2  sm:table-cell">{product?.quantity}</td>
              <td className="border p-2">
                {product?.images && product?.images?.length > 0 ? (
                  <div className="flex gap-2 flex-wrap">
                    {product?.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={product?.productname}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded"
                      />
                    ))}
                  </div>
                ) : (
                  "No Image"
                )}
              </td>
              <td className="border p-2  md:table-cell">
                {product?.isOrganic}
              </td>
              <td className="border p-2  md:table-cell">
                {product?.isFeatured}
              </td>
              <td className="border p-2  sm:table-cell">{product?.seller}</td>
              <td className="border p-2 relative">
                <button
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 w-full mx-auto"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === product._id ? null : product._id
                    )
                  }
                >
                  ⋮
                </button>
                {openDropdown === product._id && (
                  <div className="absolute right-0 mt-1 w-40 bg-white border rounded shadow-lg z-10">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleEdit(product)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleDelete(product)}
                    >
                      🗑️ Delete
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleFeature(product)}
                    >
                      ⭐ Feature
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        <div className="mt-3 mb-5">
          <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            isFetching={isFetching}
            isLoading={isLoading}
            totalPages={totalPages}
          />
        </div>
      }
    </div>
  );
}
