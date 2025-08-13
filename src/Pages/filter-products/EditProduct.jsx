import React from "react";
import { useNavigate, useParams } from "react-router";
import axiosI from "../../utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import ProductForm from "../../components/product/ProductForm";
import { useUpdateProduct } from "../../hooks/useUpdateProduct";
import { useSingleProduct } from "../../hooks/useProduct";

const fetchProduct = async (id) => {
  const { data } = await axiosI.get(`/product/${id}`);
  return data.data;
};

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: productDetails,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });

  const {data} = useSingleProduct(id)
console.log('firest fn :',data)
console.log('2nd fn :',productDetails)
  const { mutate: updateProduct, isPending } = useUpdateProduct(id);

  const handleUpdate = (formData) => {
    updateProduct(formData);
    navigate("/admin-products");
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <ProductForm
        data={productDetails}
        isPending={isPending}
        onSubmit={handleUpdate}
        refetch={refetch}
      />
    </div>
  );
};

export default EditProduct;
