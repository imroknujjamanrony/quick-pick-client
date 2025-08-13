import React from "react";
import { useNavigate, useParams } from "react-router";
import axiosI from "../../utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import ProductForm from "../../components/product/ProductForm";
import {
  useDeleteProductImage,
  useUpdateProduct,
} from "../../hooks/useUpdateProduct";
import { useSingleProduct } from "../../hooks/useProduct";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: productDetails, isLoading, refetch } = useSingleProduct(id);
  const { mutate: deleteProductImage } = useDeleteProductImage(
    productDetails?.data?._id
  );

  console.log("details :", productDetails);

  const { mutate: updateProduct, isPending } = useUpdateProduct(id);

  const handleUpdate = (formData) => {
    updateProduct(formData);
    navigate("/admin-products");
  };

  const handleDeleteImage = async (index) => {
    console.log(index);
    await deleteProductImage({ id: productDetails?.data?._id, indx: index });
    refetch();
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <ProductForm
        data={productDetails?.data}
        isPending={isPending}
        onSubmit={handleUpdate}
        refetch={refetch}
        handleDeleteImage={handleDeleteImage}
      />
    </div>
  );
};

export default EditProduct;
