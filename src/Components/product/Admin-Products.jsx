import React, { useState, useContext } from "react";
import { useDeleteProduct, useProducts } from "../../hooks/useProduct";
import ProductTable from "./ProductTable";
import useAddFeatureProduct from "../../hooks/useAddFeatureProduct";
import { SearchContext } from "../../providers/SearchProvider.jsx";
import useOrganicProuct from "../../hooks/useOrganicProuct.js";
import Loader from "../loader/Loader.jsx";

const AdminProducts = () => {
  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(0);

  const { searchValue } = useContext(SearchContext);

  // console.log(searchValue)

  const queryParams = {
    page: currentPage + 1,
    limit: itemsPerPage,
    searchValue,
  };

  const { data, refetch, isFetching, isLoading, isPending } =
    useProducts(queryParams);

  const totalPages = data?.data?.totalPages || 1;
  const totalItems = data?.data?.total || 0;
  const { mutate } = useDeleteProduct();

  const { mutate: addToFeatureProduct } = useAddFeatureProduct();

  const { mutate: addToOrganicList } = useOrganicProuct();

  const handleFeatureProduct = (product) => {
    const { _id, isFeatured } = product;
    addToFeatureProduct({
      id: _id,
      isFeatured: isFeatured == "undefined" ? true : !isFeatured,
    });
    // console.log(_id, isFeatured);
  };

  const handleOrganicProduct = (product) => {
    const { _id, isOrganic } = product;
    addToOrganicList({ id: _id, isOrganic: !isOrganic });
  };

  return (
    <div className="w-full flex items-center justify-center">
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <ProductTable
          data={data}
          mutate={mutate}
          refetch={refetch}
          totalPages={totalPages}
          totalItems={totalItems}
          isFetching={isFetching}
          isLoading={isLoading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleFeatureProduct={handleFeatureProduct}
          handleOrganicProduct={handleOrganicProduct}
        />
      )}
    </div>
  );
};

export default AdminProducts;
