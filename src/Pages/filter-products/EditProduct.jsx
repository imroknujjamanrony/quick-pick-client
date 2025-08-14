import React from "react";
import { useNavigate, useParams } from "react-router";
import ProductForm from "../../components/product/ProductForm";
import {
  useDeleteProductImage,
  useUpdateProduct,
  useUpdateProductImage,
} from "../../hooks/useUpdateProduct";
import { useSingleProduct } from "../../hooks/useProduct";
import Loader from "../../components/loader/Loader";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: productDetails, isLoading, refetch } = useSingleProduct(id);
  console.log(productDetails)
  const { mutate: deleteProductImage, isPending: pendingDeletePhoto } =
    useDeleteProductImage(productDetails?._id);

  const { mutate: updateProduct, isPending: updateProductPending } =
    useUpdateProduct(id);


  const { mutate: updateProductImage, isPending: updateImagePending } =
    useUpdateProductImage(id);

  const handleUpdate = (formData) => {
    console.log(formData)
    updateProduct(formData);
    navigate("/admin-products");
  };

  const handleDeleteImage = async () => {
    deleteProductImage(productDetails?._id);
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

    updateProductImage({
      id: productDetails?._id,
      updateData: submissionData,
    });
  };

  

  if (isLoading) return <p><Loader/></p>;
  return (
    <div className="flex items-center justify-center mt-10 mb-10">
      <ProductForm
        data={productDetails}
        isPending={updateProductPending}
        onSubmit={handleUpdate}
        refetch={refetch}
        handleDeleteImage={handleDeleteImage}
        handleUpdatePhoto={handleUpdatePhoto}
        updateImagePending={updateImagePending}
        pendingDeletePhoto={pendingDeletePhoto}
      />
    </div>
  );
};

export default EditProduct;
