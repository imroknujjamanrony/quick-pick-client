import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
  fetchProduct,
  fetchSingleProduct,
} from "../services/productService.js";

export const useProducts = (filters = {}) => {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: () => fetchProduct(filters),    
    placeholderData : keepPreviousData
  });
};

export const useSingleProduct = (id) => {
    console.log("useSingleProduct" , id)
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchSingleProduct(id),
  });
};




import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadProduct } from "../services/productService.js";

export const useUploadProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(uploadProduct, {
    onSuccess: () => {
      // After successful upload, refetch product list to update UI
      queryClient.invalidateQueries(["products"]);
    },
    onError: (error) => {
      console.error("Upload product failed:", error);
    },
  });
};

