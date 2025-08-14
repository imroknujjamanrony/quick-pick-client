import { useState } from "react";
import Paginate from "../pagination/paginate.jsx";
import { useNavigate } from "react-router";

export default function ProductTable({
  data,
  mutate,
  totalPages,
  setCurrentPage,
  currentPage,
  isFetching,
  isLoading,
  handleFeatureProduct,
  handleOrganicProduct
}) {
  const products = data?.data?.products;
  const [openDropdown, setOpenDropdown] = useState(null);
  const totalItems = data?.data?.total || 0;
  const navigate = useNavigate();

  const handleEdit = (product) => {
    navigate(`/admin-product-edit/${product?._id}`);

  };

  const handleDelete = (product) => {
    mutate(product?._id);
  };
  

  return (
    <div className="overflow-x-auto">
      <div className="text-2xl font-bold mt-10 mb-5">
        total products : {totalItems}
      </div>
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
            <tr key={product._id} className="">
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
              <td className="border p-2  md:table-cell text-center">
                {product?.isOrganic ? "✅" : "❌"}
              </td>
              <td className="border p-2  md:table-cell text-center">
                {product?.isFeatured ? "✅" : "❌"}
              </td>
              <td className="border p-2  sm:table-cell">{product?.seller}</td>
              <td className="border p-2 relative">
                <button
                  className="px-2 py-1 bg-gray-200 rounded cursor-pointer w-full mx-auto"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === product._id ? null : product._id
                    )
                  }
                >
                  ⋮
                </button>
                {openDropdown === product._id && (
                  <div key={product?._id} className="absolute right-0 mt-1 w-40 bg-white border rounded shadow-lg z-10">
                    <button
                      className="block w-full text-left px-4 py-2 cursor-pointer"
                      onClick={() => handleEdit(product)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 cursor-pointer"
                      onClick={() => handleDelete(product)}
                    >
                      🗑️ Delete
                    </button>
                    <button
                      type="button"
                      className="block w-full text-left px-4 py-2 cursor-pointer"
                      onClick={() => handleFeatureProduct(product)}
                    >
                      {product?.isFeatured ? "❌ Unfeature" : "✅ Feature"}
                    </button>
                    <button
                      type="button"
                      className="block w-full text-left px-4 py-2 cursor-pointer"
                      onClick={() => handleOrganicProduct(product)}
                    >
                      {product?.isOrganic ? "❌ Remove Organic tag" : "✅Add Organic tag"}
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
