import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductImage, updateProduct } from "../services/productService";
import toast from "react-hot-toast";

export const useUpdateProduct = (id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updateData) => updateProduct(id, updateData),
    onSuccess: () => {
      toast.success("Product updated successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      toast.error("Error while updating a product");
    },
  });
};


export const useDeleteProductImage = (id) =>{
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, indx }) => deleteProductImage(id, indx),
    onSuccess: () => {
      toast.success("Product image deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["products", id] });
    },
    onError: () => {
      toast.error("Error while deleting product image");
    },
  });
}