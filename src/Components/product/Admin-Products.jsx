import React, { useState } from "react";
import { useDeleteProduct, useProducts } from "../../hooks/useProduct";
import ProductTable from "./ProductTable";

const AdminProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20;

  const queryParams = {
    page: currentPage + 1,
    limit: itemsPerPage,
  };

  const { data, refetch, isFetching, isLoading } = useProducts(queryParams);
  const totalPages = data?.data?.totalPages || 1;
  const productsData = data?.data?.products || [];
  const totalItems = data?.data?.total || 0;
  const { mutate } = useDeleteProduct();

  return (
    <div>
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
      />
    </div>
  );
};

export default AdminProducts;
