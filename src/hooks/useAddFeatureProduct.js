import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { featureProduct } from "../services/productService";
import toast from "react-hot-toast";

const useAddFeatureProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, isFeatured }) => featureProduct(id, isFeatured),
    onSuccess: (data) => {
      toast(data?.message);
      queryClient.invalidateQueries(["products"]);
    },
    onError: (error) => {
      toast.error("❌ Failed to add featured product:", error);
    },
  });
};

export default useAddFeatureProduct;
