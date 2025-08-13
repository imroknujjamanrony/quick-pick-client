import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  deleteProduct,
  fetchProduct,
  fetchSingleProduct,
} from "../services/productService.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadProduct } from "../services/productService.js";
import toast from "react-hot-toast";

export const useProducts = (filters = {}) => {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: () => fetchProduct(filters),
    placeholderData: keepPreviousData,
  });
};

export const useSingleProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchSingleProduct(id),
  });
};

export const useUploadProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(uploadProduct, {
    onSuccess: () => {
      toast.success("product uploaded successfully");
      queryClient.invalidateQueries(["products"]);
    },
    onError: (error) => {
      console.error("Upload product failed:", error);
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: () => {
      toast.success("Deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["products",] });
    },
    onError: () => {
      toast.error("error while deleting a product");
    },
  });
};
