import React from "react";
import { useNavigate, useParams } from "react-router";
import ProductForm from "../../components/product/ProductForm";
import {
  useDeleteProductImage,
  useUpdateProduct,
  useUpdateProductImage,
} from "../../hooks/useUpdateProduct";
import { useSingleProduct } from "../../hooks/useProduct";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: productDetails, isLoading, refetch } = useSingleProduct(id);
  const { mutate: deleteProductImage } = useDeleteProductImage(
    productDetails?.data?._id
  );

  const { mutate: updateProduct, isPending } = useUpdateProduct(id);
  const { mutate: updateProductImage, isPending : updateImagePending } = useUpdateProductImage(id);

  const handleUpdate = (formData) => {
    updateProduct(formData);
    navigate("/admin-products");
  };

  const handleDeleteImage = async () => {
    deleteProductImage(productDetails?.data?._id);
    refetch();
  };

  const handleUpdatePhoto = (images) => {
    console.log(images);
    let submissionData = new FormData();
    images.forEach((img) => {
      if (img instanceof File) {
        submissionData.append("image", img);
      }
    });

    updateProductImage({ id: productDetails?.data?._id, updateData: submissionData });
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
        handleUpdatePhoto={handleUpdatePhoto}
        updateImagePending={updateImagePending}
      />
    </div>
  );
};

export default EditProduct;
