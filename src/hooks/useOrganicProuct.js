import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { organicProduct } from "../services/productService";
import toast from "react-hot-toast";

const useOrganicProuct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({id, isOrganic}) => organicProduct({ id, isOrganic }),
    onSuccess: (data) => {
      toast(data?.message);
      queryClient.invalidateQueries(["products"]);
    },
    onError: (error) => {
      toast.error("❌ Failed to add organic product", error);
    },
  });
};

export default useOrganicProuct;
