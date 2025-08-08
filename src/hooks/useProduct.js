import { useQuery } from "@tanstack/react-query";
import {
  fetchProduct,
  fetchSingleProduct,
} from "../services/productService.js";

export const useProducts = (filters = {}) => {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: () => fetchProduct(filters),
    
  });
};

export const useSingleProduct = (id) => {
    console.log("useSingleProduct" , id)
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchSingleProduct(id),
  });
};
